import React, { useContext, useState } from "react";
import "./WishListContentmember.css";
import context from "../../context/context";

export default function WishListContentmember({ content, id, user }) {
  const { setEunsuCheckList,setChaewonCheckList } = useContext(context);
  const [isCheckedBox, setIsCheckedBox] = useState(false);
  const checkedHandler = (isChecked, id) => {
    if(user==="eunsu"){
      setIsCheckedBox(!isCheckedBox);
    if (isChecked) {
      setEunsuCheckList((prev) => [...prev, id]);
    } else {
      setEunsuCheckList((prev) => prev.filter((item) => item !== id));
    }
    }
    else{
      setIsCheckedBox(!isCheckedBox);
    if (isChecked) {
      setChaewonCheckList((prev) => [...prev, id]);
    } else {
      setChaewonCheckList((prev) => prev.filter((item) => item !== id));
    }
    }
  };

  return (
    <label
      htmlFor={content}
      className={`${
        isCheckedBox
          ? "member_clicked  wishlistmember_wrapper"
          : "wishlistmember_wrapper"
      }`}
    >
      <div className="wishlistmember_content">{content}</div>
      <input
        type="checkbox"
        id={content}
        onChange={(e) => checkedHandler(e.target.checked, id)}
      />
    </label>
  );
}
