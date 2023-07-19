import React from "react";
import { db } from "../backend/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function useDeleteFs() {
  const _delete = async (document, id) => {
    try {
      const docRef = doc(db, document, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error happened", error);
    }
  };
  return { _delete };
}
