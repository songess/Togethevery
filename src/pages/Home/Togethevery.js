import React, { useContext, useState } from "react";
import Section from "./Section";
import Button from "../../components/Button";
import Memo from "../Memo/Memo";
import { Link, useNavigate } from "react-router-dom";
import { format, differenceInDays } from "date-fns";
import Calendar from "react-calendar";
import context from "../../context/context";
import "react-calendar/dist/Calendar.css";
import "./Togethevery.css";

export default function Togethevery() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const memoHandler = () => {
    navigate("/Memo");
  };
  return (
    <>
      <div className="basic_screen">
        <section className="sec_button">
          <Link className="button_link" to="/Memo">
            <Button>메모</Button>
          </Link>
          <Link className="button_link" to="/Map">
            <Button>지도</Button>
          </Link>
          <Link className="button_link" to="/WishList">
            <Button>위시리스트</Button>
          </Link>
          <Link className="button_link" to="/Diary">
            <Button>일기</Button>
          </Link>
        </section>
        <Calendar className="calender" onChange={onChange} value={value} />
      </div>
    </>
  );
}
