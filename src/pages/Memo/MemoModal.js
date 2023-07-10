import React, { useRef } from "react";
import "./MemoModal.css";

export default function MemoModal({ onClose, isOpen, onDelete, id }) {
  const outside = useRef(null);

  if (!isOpen) return null;

  const deleteHandler = () => {
    onClose();
    onDelete(id);
  };
  const modalhandler = (e) => {
    if (outside.current === e.target) onClose();
  };

  return (
    <div className="memoModal_background" onClick={modalhandler} ref={outside}>
      <div className="memoModal">
        <h1 className="memoModal_title">메모 삭제</h1>
        <p className="memoModal_content">
          정말 삭제하시겠습니까?
          <br />
          삭제한 메모는 되돌릴 수 없습니다.
        </p>
        <div className="memoModal_button">
          <button onClick={onClose} className="memoModal_button_close">
            닫기
          </button>
          <button onClick={deleteHandler} className="memoModal_button_delete">
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}
