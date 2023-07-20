import React from "react";
import "./DiaryContent.css";
import ColorButton from "../../components/ColorButton";
import Input from "../../components/Input";

export default function DiaryContent() {
  const clickHandler = () => {};

  return (
    <div className="diarycontent">
      <Input className="diarycontent_title" placeholder="Title"/>
      <textarea className="diarycontent_content" placeholder="내용을 입력하세요"/>
      <ColorButton onClick={clickHandler}>Submit</ColorButton>
    </div>
  );
}
