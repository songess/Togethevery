import React from "react";
import "./WishList.css";
import WishListMain from './WishListMain';
import WishListContent from "./WishListContent";

export default function WishList() {
  const user = localStorage.getItem("loggedIn");
  const oppenent = user === "은수" ? "채원" : "은수";
  return (
    <div className="wishlist_wrapper">
      <header className="wishlist_title">WishList</header>
      <main className="wishlist_main">
        <div className="wishlist_user">
          <WishListMain user={user}/>
          <WishListContent />
        </div>
        <div className="wishlist_user">
          <WishListMain user={oppenent}/>
          <WishListContent />
        </div>
      </main>
    </div>
  );
}
