import React from "react";
import { db } from "../backend/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function useReadFs() {
  const read = async (document, func) => {
    try {
      const snapshot = await getDocs(collection(db, document));
      func(snapshot);
    } catch (error) {
      console.error("Error happened:", error);
    }
  };
  return { read };
}
