import React, { useState } from "react";
import "./DiaryContent.css";
import ColorButton from "../../components/ColorButton";
import Input from "../../components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCreateFs from "../../hooks/useCreateFs";

const dayToString = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function DiaryContent({ createDiary }) {
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const clickHandler = () => {
    createDiary(
      startDate.getDate(),
      dayToString[startDate.getDay()],
      diaryTitle,
      diaryContent
    );
  };
  const titleHandler = (e) => {
    setDiaryTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setDiaryContent(e.target.value);
  };

  return (
    <div className="diarycontent">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy년 MM월 dd일"
      />
      <Input
        className="diarycontent_title"
        placeholder="Title"
        value={diaryTitle}
        onChange={titleHandler}
      />
      <textarea
        className="diarycontent_content"
        placeholder="내용을 입력하세요"
        value={diaryContent}
        onChange={contentHandler}
      />
      <ColorButton onClick={clickHandler} className="diarycontent_button">
        Submit
      </ColorButton>
    </div>
  );
}
