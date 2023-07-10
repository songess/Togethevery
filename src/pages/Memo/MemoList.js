import React, { useState, useRef, useEffect } from "react";
import ColorButton from "../../components/ColorButton";
import PortalMemoModal from "./PortalMemoModal";
import Input from "../../components/Input";
import "./MemoList.css";

export default function MemoList({
  title,
  content,
  id,
  onDelete,
  contentChange,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [isHover, setIsHover] = useState(false);
  const inputRef = useRef(null);
  const onModalHandler = () => {
    setIsModalOpen(true);
  };
  const offModalHandler = () => {
    setIsModalOpen(false);
  };
  const editHandler = () => {
    setIsEdit(true);
  };
  const contentHandler = (event) => {
    setEditContent(event.target.value);
  };
  const contentChangeHandler = () => {
    contentChange(editContent, id);
    setIsEdit(false);
  };
  const mouseEnterHandler = () => {
    setIsHover(true);
  };
  const mouseLeaveHandler = () => {
    setIsHover(false);
  };
  const inputPressHandler = (e) => {
    if (e.key === "Enter") contentChangeHandler();
  };

  useEffect(() => {
    if (isEdit && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEdit]);

  return (
    <div
      className="memoList_list"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="memoList_title">{title}</div>
      {!isEdit && <div className="memoList_content">{content}</div>}
      {isEdit && (
        <Input
          value={editContent}
          ref={inputRef}
          className="memoList_input"
          onChange={contentHandler}
          onKeyPress={inputPressHandler}
        ></Input>
      )}
      {isHover && (
        <>
          <div className="memoList_button">
            {!isEdit && <ColorButton onClick={editHandler}>Edit</ColorButton>}
            {isEdit && (
              <ColorButton onClick={contentChangeHandler}>Insert</ColorButton>
            )}
            <div className="memoList_space"></div>
            <ColorButton onClick={onModalHandler}>Delete</ColorButton>
          </div>
        </>
      )}
      <PortalMemoModal
        onClose={offModalHandler}
        isOpen={isModalOpen}
        onDelete={onDelete}
        id={id}
      />
    </div>
  );
}
