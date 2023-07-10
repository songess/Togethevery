import React, { useState, useEffect } from "react";
import MemoList from "./MemoList";
import Input from "../../components/Input";
import "./Memo.css";
import ColorButton from "../../components/ColorButton";
import { v4 as uuidv4 } from "uuid";
import { db } from "../../backend/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function Memo() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [contents, setContents] = useState([
  //   {
  //     title: "행궁동",
  //     content: "수원에 가면 행궁동을 꼭 가봐야 한대요",
  //     id: uuidv4(),
  //   },
  //   {
  //     title: "광장시장",
  //     content: "광장시장에 가면 육회가 그렇게 맛있다던데",
  //     id: uuidv4(),
  //   },
  // ]}
  const [contents, setContents] = useState([]);

  const createMemo = async () => {
    try {
      const collectionRef = collection(db, "Memo");
      const docRef = await addDoc(collectionRef, {
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
      // setContents(prev=>memoSnapShot.docs);
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
  const updateMemo = async (editContent,id) => {
    try {
      const docRef=doc(db,"Memo",id);
      await updateDoc(docRef,{content:editContent});
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
    // setContents((prev) => [
    //   ...prev,
    //   { title: title, content: content, id: uuidv4() },
    // ]);
    // setTitle("");
    // setContent("");
    createMemo();
    readMemo();
  };

  const deleteHandler = (id) => {
    // setContents((prev) => prev.filter((item) => item.id !== id));
    deleteMemo(id);
    readMemo();
  };
  const contentChangeHandler = (editContent, id) => {
    // const idx = contents.findIndex((ctt) => ctt.content === content);
    // const newContent = {
    //   title: contents[idx].title,
    //   content: editContent,
    //   id: uuidv4(),
    // };
    // setContents((prev) =>
    //   prev.map((item, i) => {
    //     if (i === idx) {
    //       return newContent;
    //     }
    //     return item;
    //   })
    // );
    // //prev는 불변성을 띈데요..
    // //splice는 변경, map은 새로운거 반환
    updateMemo(editContent,id);
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
    </>
  );
}
