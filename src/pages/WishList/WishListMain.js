import React, { useState, useContext, useEffect } from "react";
import "./WishListMain.css";
import ColorButton from "../../components/ColorButton";
import DefaultModal from "../../modal/DefaultModal";
import useModal from "../../hooks/useModal";
import useCreateFs from "../../hooks/useCreateFs";
import Input from "../../components/Input";
import context from "../../context/context";
import ModalButton from "../../components/ModalButton";
import useReadFs from "../../hooks/useReadFs";
import useDeleteFs from "../../hooks/useDeleteFs";

export default function WishListMain({ user }) {
  const { isOpen, toggle } = useModal();
  const { create } = useCreateFs();
  const { read } = useReadFs();
  const { _delete } = useDeleteFs();
  const [isInsert, setIsInsert] = useState(true);
  const { setEunsuList, setChaewonList, eunsuCheckList, chaewonCheckList } =
    useContext(context);

  const [list, setList] = useState("");
  // const createList = async () => {
  //   try {
  //     const collectionRef = collection(db, user);
  //     await addDoc(collectionRef, { content: list });
  //   } catch (error) {
  //     console.error("Error happened:", error);
  //   }
  // };
  const createList = () => {
    create(user, { content: list });
  };
  const readAndSet = (snapshot) => {
    user === "eunsu"
      ? setEunsuList(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        )
      : setChaewonList(
          snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
  };
  const readList = () => {
    read(user, readAndSet);
  };
  const deleteList = () => {
    user === "eunsu"
      ? eunsuCheckList.map((id) => _delete(user, id))
      : chaewonCheckList.map((id) => _delete(user, id));
    readList();
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
  const listAddHandler = () => {
    if (list.trim() === "") {
      alert("내용을 입력하세요!");
    } else {
      createList();
      readList();
      toggle();
    }
  };
  const listDeleteHandler = () => {
    toggle();
    deleteList();
  };
  const keyPressHandler = (e)=>{
    if(e.key==="Enter") listAddHandler();
  }

  useEffect(() => {
    readList();
  }, []);

  return (
    <div className="wishlist_main">
      {user === localStorage.getItem("loggedIn") && (
        <ColorButton onClick={insertHandler}>Insert</ColorButton>
      )}
      <h2 className="wishlist_main_title">{user}님의 위시리스트</h2>
      {user === localStorage.getItem("loggedIn") && (
        <ColorButton onClick={deleteHandler}>Delete</ColorButton>
      )}
      <DefaultModal isOpen={isOpen} onClose={toggle}>
        {isInsert ? (
          <>
            <Input
              className="wishlist_input"
              value={list}
              onChange={listHandler}
              onKeyPress={keyPressHandler}
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
              <ModalButton
                className="wishlist_list_delete"
                onClick={listDeleteHandler}
              >
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
