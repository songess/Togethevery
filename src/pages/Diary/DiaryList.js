import React from "react";
import "./DiaryList.css";

export default function DiaryList({ day, date, content, title }) {
  return (
    <div className="diarylist_wrapper">
      <div className="diarylist_left">
        <div className="diarylist_day">{day}</div>
        <div className="diarylist_date">{date}</div>
      </div>
      <div className="diarylist_right">
        <div className="diarylist_title">{title}</div>
        <div className="diarylist_content">{content}</div>
      </div>
    </div>
  );
}
