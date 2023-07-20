import React from "react";
import "./Diary.css";
import DiaryList from "./DiaryList";
import DiaryContent from "./DiaryContent";

export default function Diary() {
  return (
    <div className="diary_wrapper">
      <div className="diary_year">Year</div>
      <div className="diary">
        <div className="diary_info">
          <div className="diary_month">Month</div>
          <div className="diary_list">
            <DiaryList></DiaryList>
            <DiaryList></DiaryList>
          </div>
        </div>
        <DiaryContent></DiaryContent>
      </div>
    </div>
  );
}
