import React, { useState } from "react";
import "./Diary.css";
import DiaryList from "./DiaryList";
import DiaryContent from "./DiaryContent";

let DUMMY_Diary = [
  {
    day: 4,
    date: "Tue",
    title: "안녕하세요",
    content: "날이 참 맑네요..",
    id: 3,
  },
  {
    day: 7,
    date: "Fri",
    title: "배고파요",
    content: "무언가를 먹어야 할 것 같아요",
    id: 5,
  },
];

export default function Diary() {
  const [diary, setDiary] = useState(DUMMY_Diary);
  const [diaryId, setDiaryId] = useState(6);

  const diaryCreateHandler = (day, date, title, content, id = diaryId) => {
    setDiary((prev) => [...prev, { id, day, date, title, content }]);
    setDiaryId((prev) => prev + 1);
    // console.log(id, day, date, title, content);
  };

  return (
    <div className="diary_wrapper">
      <div className="diary_year">2023년</div>
      <div className="diary">
        <div className="diary_info">
          <div className="diary_month">8월</div>
          <div className="diary_list">
            {diary.map((diary) => {
              return (
                <DiaryList
                  key={diary.id}
                  day={diary.day}
                  date={diary.date}
                  title={diary.title}
                  content={diary.content}
                />
              );
            })}
          </div>
        </div>
        <DiaryContent createDiary={diaryCreateHandler}></DiaryContent>
      </div>
    </div>
  );
}
