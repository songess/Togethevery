import React from "react";
import "./DiaryList.css";

export default function DiaryList() {
  return (
    <div className="diarylist_wrapper">
      <div className="diarylist_left">
        <div className="diarylist_day">18</div>
        <div className="diarylist_date">Tue</div>
      </div>
      <div className="diarylist_right">
        <div className="diarylist_title">비가와요</div>
        <div className="diarylist_content">오늘은 비가오는데 날이 참 밝아요...</div>
      </div>
    </div>
  );
}
