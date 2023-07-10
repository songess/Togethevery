import React, { useState } from "react";
import "./WishListMain.css";
import ColorButton from "../../components/ColorButton";
import DefaultModal from "../../modal/DefaultModal";
import useModal from "../../hooks/useModal";
import Input from "../../components/Input";
import { db } from "../../backend/firebase";
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export default function WishListMain({ user }) {
  const { isOpen, toggle } = useModal();
  const [isInsert, setIsInsert] = useState(true);

  const [list, setList] = useState("");
  const [lists, setLists] = useState([]);
  const createList = async () => {
    try {
      const collectionRef = collection(db, "eunsu");
      await addDoc(collectionRef, { content: list });
    } catch (error) {
      console.error("Error happened:", error);
    }
  };
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

  return (
    <div className="wishlist_main">
      <ColorButton onClick={insertHandler}>Insert</ColorButton>
      <h2>{user}님의 위시리스트</h2>
      <ColorButton onClick={deleteHandler}>Delete</ColorButton>
      <DefaultModal isOpen={isOpen} onClose={toggle}>
        {isInsert ? (
          <Input className="wishlist_input" value={listHandler} />
        ) : (
          <p>일괄삭제 하시겠습니까?</p>
        )}
      </DefaultModal>
    </div>
  );
}
