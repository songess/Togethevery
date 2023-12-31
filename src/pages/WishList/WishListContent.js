import React, { useState, useContext } from "react";
import context from "../../context/context";
import "./WishListContent.css";
import WishListContentmember from "./WishListContentmember";

export default function WishListContent({ user }) {
  const { eunsuList, chaewonList } = useContext(context);
  return (
    <div className="wishlistcontent">
      {user === "eunsu"
        ? eunsuList?.map((item) => {
            return (
              <WishListContentmember
                content={item.content}
                id={item.id}
                key={item.id}
                user={user}
              ></WishListContentmember>
            );
          })
        : chaewonList?.map((item) => {
            return (
              <WishListContentmember
                content={item.content}
                id={item.id}
                key={item.id}
                user={user}
              ></WishListContentmember>
            );
          })}
    </div>
  );
}
