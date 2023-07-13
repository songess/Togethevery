import React, { useState, useContext } from "react";
import context from "../../context/context";
import "./WishListContent.css";
import WishListContentmember from "./WishListContentmember";

export default function WishListContent() {
  const { eunsuList, chaewonList } = useContext(context);
  return <div className="wishlistcontent">{eunsuList.map(item=>{
    <WishListContentmember content={item.content}></WishListContentmember>
  })}</div>;
}
