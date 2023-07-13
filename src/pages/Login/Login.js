import React, { useState, useEffect, useRef, useContext } from "react";
import Input from "../../components/Input";
import PortalModal from "./PortalModal";
import context from "../../context/context";
import "./Login.css";
import ColorButton from "../../components/ColorButton";
import { useNavigate } from "react-router-dom";

let acceptLogin = [
  { name: "eunsu", id: "songess", pw: "0" },
  { name: "chaewon", id: "star7602", pw: "0" },
];

const Login = () => {
  const { loginId, setLoginId } = useContext(context);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [idReady, setIdReady] = useState(true);
  const [pwReady, setPwReady] = useState(true);
  const [tryNum, setTryNum] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMounted1 = useRef(0);
  const isMounted2 = useRef(0);

  const idChange = (value) => {
    setLoginId(value);
  };
  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const pwChangeHandler = (event) => {
    setPw(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setId("");
    setPw("");
    if (idReady === true && pwReady === true && tryNum > 4) {
      acceptLogin.forEach((item) => {
        if (item.id === id && item.pw === pw) {
          idChange(item.name);
          localStorage.setItem("loggedIn", item.name);
          navigate("/Home");
        } else {
          setIsModalOpen(true);
        }
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    setTryNum((prevState) => prevState + 1);
    if (isMounted1.current >= 2) {
      if (id.trim() === "") {
        setIdError("이름을 입력하랑께요");
        setIdReady(false);
      } else if (!/^[A-Za-z0-9]{1,10}$/.test(id.trim())) {
        setIdError(
          "영문자와 숫자로 이루어진 10자리 이하 문자열을 입력해주세요"
        );
        setIdReady(false);
      } else {
        setIdError("");
        setIdReady(true);
      }
    } else isMounted1.current += 1;
  }, [id]);

  useEffect(() => {
    setTryNum((prevState) => prevState + 1);
    if (isMounted2.current >= 2) {
      if (pw.trim() === "") {
        setPwError("비밀번호를 입력하랑께요");
        setPwReady(false);
      } else if (!/^[A-Za-z0-9]{1,15}$/.test(pw.trim())) {
        setPwError(
          "영문자와 숫자로 이루어진 15자리 이하 문자열을 입력해주세요"
        );
        setPwReady(false);
      } else {
        setPwError("");
        setPwReady(true);
      }
    } else isMounted2.current += 1;
  }, [pw]);

  return (
    <>
      <form method="GET" className="login_form" onSubmit={submitHandler}>
        <h1>Togethevery Login</h1>
        <h2>I love being yours.</h2>
        <div className="login_content">
          <div className="login_id">아이디</div>
          <Input
            className={
              idReady ? "loginInput_size" : "loginInput_size showError"
            }
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={idChangeHandler}
          />
          <p className="error">{idError}</p>
          <div className="login_pw">비밀번호</div>
          <Input
            className={
              pwReady ? "loginInput_size" : "loginInput_size showError"
            }
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={pw}
            onChange={pwChangeHandler}
          />
          <p className="error">{pwError}</p>
        </div>
        <ColorButton>Login</ColorButton>
      </form>
      <PortalModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Login;
