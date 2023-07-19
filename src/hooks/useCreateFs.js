import React from "react";
import { db } from "../backend/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function useCreateFs() {
  const create = async (document, obj) => {
    try {
      const collectionRef = collection(db, document);
      await addDoc(collectionRef, obj);
    } catch (error) {
      console.error("error Happened:", error);
    }
  };
  return { create };
}
