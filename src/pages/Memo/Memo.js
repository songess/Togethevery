import React, { useState, useEffect } from "react";
import MemoList from "./MemoList";
import Input from "../../components/Input";
import "./Memo.css";
import ColorButton from "../../components/ColorButton";
import { db } from "../../backend/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import DefaultModal from "../../modal/DefaultModal";
import useModal from "../../hooks/useModal";

export default function Memo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contents, setContents] = useState([]);
  const { isOpen, toggle } = useModal();

  const createMemo = async () => {
    try {
      const collectionRef = collection(db, "Memo");
      await addDoc(collectionRef, {
        title: title,
        content: content,
      });
    } catch (error) {
      console.error("Error happend : ", error);
    }
  };
  const readMemo = async () => {
    try {
      const memoSnapShot = await getDocs(collection(db, "Memo"));
      setContents(
        memoSnapShot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    } catch (error) {
      console.error("Error happened:", error);
    }
  };
  const deleteMemo = async (id) => {
    try {
      const docRef = doc(db, "Memo", id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error happened", error);
    }
  };
  const updateMemo = async (editContent, id) => {
    try {
      const docRef = doc(db, "Memo", id);
      await updateDoc(docRef, { content: editContent });
    } catch (error) {
      console.error("Error happened:", error);
    }
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      toggle();
    } else {
      createMemo();
      readMemo();
      setTitle("");
      setContent("");
    }
  };

  const deleteHandler = (id) => {
    deleteMemo(id);
    readMemo();
  };
  const contentChangeHandler = (editContent, id) => {
    updateMemo(editContent, id);
    readMemo();
  };

  useEffect(() => {
    readMemo();
  }, []);

  return (
    <>
      <form className="memo_input" method="GET" onSubmit={submitHandler}>
        <Input
          type="text"
          placeholder="제목"
          value={title}
          className="memo_title_size"
          onChange={titleHandler}
        />
        <Input
          type="text"
          placeholder="내용"
          value={content}
          className="memo_content_size"
          onChange={contentHandler}
        />
        <ColorButton>Insert</ColorButton>
      </form>
      <div className="memo_flex">
        <div className="memo_list">
          {contents?.map((item) => {
            return (
              <MemoList
                key={item.id}
                title={item.title}
                content={item.content}
                id={item.id}
                onDelete={deleteHandler}
                contentChange={contentChangeHandler}
              ></MemoList>
            );
          })}
        </div>
      </div>
      <DefaultModal isOpen={isOpen} onClose={toggle}><p>제목과 내용을 입력하세요!</p></DefaultModal>
    </>
  );
}
