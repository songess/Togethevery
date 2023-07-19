import React from "react";
import { db } from "../backend/firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function useUpdateFs() {
  const update = async (document, id, obj) => {
    try {
      const docRef = doc(db, document, id);
      await updateDoc(docRef, obj);
    } catch (error) {
      console.error("Error happened:", error);
    }
  };
  return { update };
}
