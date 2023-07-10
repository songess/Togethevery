import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format, differenceInDays } from "date-fns";
import Calendar from "react-calendar";
import ColorButton from "../components/ColorButton";
import context from "../context/context";
import "react-calendar/dist/Calendar.css";
import "./Layout.css";

export default function Layout(props) {
  const { loginId, setLoginId } = useContext(context);
  const navigate = useNavigate();
  const location = useLocation();
  const loggedInId = localStorage.getItem("loggedIn");

  const logoutHandler = () => {
    localStorage.removeItem("loggedIn");
    navigate("/")
  };

  if (location.pathname === "/")
    return <div className="layout">{props.children}</div>;

  return (
    <>
      <nav className="navigation_bar">
        <div>{loggedInId}님, 안녕하세요!</div>
        <div>{format(new Date(), "yy.MM.dd.(EE)")}</div>
        <div>{differenceInDays(new Date(), new Date("2023-03-11"))}Days</div>
        <ColorButton onClick={logoutHandler}>Logout</ColorButton>
      </nav>
      <div className="layout">{props.children}</div>
    </>
  );
}
