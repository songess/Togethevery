import React, { useState, useContext } from "react";
import context from "../../context/context";
import "./WishListOpponentContent.css";
import WishListContentmember from "./WishListContentmember";
import WishListOpponentContentmember from "./WishListOpponentContentmember";

export default function WishListOpponentContent({ user }) {
  const { eunsuList, chaewonList } = useContext(context);
  return (
    <div className="wishlistOpponentcontent">
      {user === "eunsu"
        ? eunsuList?.map((item) => {
            return (
              <WishListOpponentContentmember
                content={item.content}
                id={item.id}
                key={item.id}
                user={user}
              ></WishListOpponentContentmember>
            );
          })
        : chaewonList?.map((item) => {
            return (
              <WishListOpponentContentmember
                content={item.content}
                id={item.id}
                key={item.id}
                user={user}
              ></WishListOpponentContentmember>
            );
          })}
    </div>
  );
}
