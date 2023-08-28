import React, { useState } from "react";
import Login from "./pages/Login/Login";
import Togethevery from "./pages/Home/Togethevery";
import Layout from "./layout/Layout";
import Memo from "./pages/Memo/Memo";
import Map from "./pages/Map/Map";
import WishList from "./pages/WishList/WishList";
import Movie from "./pages/Movie/Movie";
import Diary from "./pages/Diary/Diary";
import ContextProvider from "./context/ContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  //const [isLogin, setIsLogin] = useState(false);
  // const loginHandler = () => {
  //   setIsLogin(true);
  // };

  return (
    // <div className="App">
    //   {!isLogin && (
    //     <Login onLogin={loginHandler} idChange={idChangeHandler}></Login>
    //   )}
    //   {isLogin && <Togethevery loginId={loginId}></Togethevery>}
    // </div>
    <ContextProvider>
      <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Login></Login>}></Route>
              <Route path="/Home" element={<Togethevery></Togethevery>}></Route>
              <Route path="/Memo" element={<Memo></Memo>}></Route>
              <Route path="/Map" element={<Map></Map>}></Route>
              <Route path="/WishList" element={<WishList></WishList>}></Route>
              <Route path="/Diary" element={<Diary></Diary>}></Route>
            </Routes>
          </Layout>
        </Router>
      </div>
    </ContextProvider>
  );
}

export default App;
