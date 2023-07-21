import React from "react";
import { db } from "../backend/firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

export default function useCreateFs() {
  const create = async (document, obj) => {
    try {
      const collectionRef = collection(db, document);
      await addDoc(collectionRef, obj);
    } catch (error) {
      console.error("error Happened:", error);
    }
  };
  const create_sub = async (document, id, id_id, obj) => {
    try {
      const docRef = doc(db, document, id, id, id_id);
      await setDoc(docRef, obj);
    } catch (error) {
      console.error("Error happened: ", error);
    }
  };
  return { create, create_sub };
}
