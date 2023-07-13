import React, { useState, useContext } from "react";
import "./WishListMain.css";
import ColorButton from "../../components/ColorButton";
import DefaultModal from "../../modal/DefaultModal";
import useModal from "../../hooks/useModal";
import Input from "../../components/Input";
import context from "../../context/context";
import { db } from "../../backend/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import ModalButton from "../../components/ModalButton";

export default function WishListMain({ user }) {
  const { isOpen, toggle } = useModal();
  const [isInsert, setIsInsert] = useState(true);
  const { setEunsuList, setChaewonList } = useContext(context);

  const [list, setList] = useState("");
  const [lists, setLists] = useState([]);
  const createList = async () => {
    try {
      const collectionRef = collection(db, user);
      await addDoc(collectionRef, { content: list });
    } catch (error) {
      console.error("Error happened:", error);
    }
  };
  const readList = async () => {
    try {
      const listSnapshot = await getDocs(db, user);
      setEunsuList(
        listSnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    } catch (error) {
      console.error("Error happened: ", error);
    }
  };
  // const deleteList = async () => {
  //   try{
  //     const docRef=doc(db,user,id);
  //     await deleteDoc(docRef);
  //   }catch(error){
  //     console.error("error Happened : ",error);
  //   }
  // }
  // const updateList = async () => {
  //   try {
  //     const docRef=doc(db,user,id);
  //     await updateDoc(docRef,{content:"이걸로 바꿔주세요"});
  //   } catch (error) {
  //     console.error("Error Happened :", error);
  //   }
  // };

  const insertHandler = () => {
    toggle();
    setIsInsert(true);
  };
  const deleteHandler = () => {
    toggle();
    setIsInsert(false);
  };
  const listHandler = (e) => {
    setList(e.target.value);
  };
  const listAddHandler = () => {
    console.log(lists);
    createList();
    readList();
    toggle();
  };

  return (
    <div className="wishlist_main">
      <ColorButton onClick={insertHandler}>Insert</ColorButton>
      <h2>{user}님의 위시리스트</h2>
      <ColorButton onClick={deleteHandler}>Delete</ColorButton>
      <DefaultModal isOpen={isOpen} onClose={toggle}>
        {isInsert ? (
          <>
            <Input
              className="wishlist_input"
              value={list}
              onChange={listHandler}
            />
            <ModalButton
              className="wishlist_list_insert"
              onClick={listAddHandler}
            >
              확인
            </ModalButton>
          </>
        ) : (
          <div className="wishlist_deletemodal">
            <p>일괄삭제 하시겠습니까?</p>
            <div className="wishbuttons">
              <ModalButton className="wishlist_list_delete" onClick={toggle}>
                삭제
              </ModalButton>
              <ModalButton className="wishlist_list_close" onClick={toggle}>
                닫기
              </ModalButton>
            </div>
          </div>
        )}
      </DefaultModal>
    </div>
  );
}
