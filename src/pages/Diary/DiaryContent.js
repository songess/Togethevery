import React, { useState } from "react";
import "./DiaryContent.css";
import ColorButton from "../../components/ColorButton";
import Input from "../../components/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCreateFs from "../../hooks/useCreateFs";

export default function DiaryContent() {
  const [diaryTitle, setDiaryTitle] = useState("");
  const [diaryContent, setDiaryContent] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [diaryDate, setDiaryDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });
  const { create_sub } = useCreateFs();

  const clickHandler = () => {
    console.log(diaryDate, diaryTitle, diaryContent);
    create_sub(diaryDate.year.toString(),diaryDate.month.toString(),diaryDate.day.toString(), {
      day: diaryDate.day,
      title: diaryTitle,
      content: diaryContent,
    });
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
