import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const deleteItem = async (dbRef: string, id: string) => {
  const userValidation = window.confirm(
    "Are you sure you want to delete this item ?"
  );

  if (userValidation) {
    await deleteDoc(doc(db, `/${dbRef}/${id}`));
    window.location.href = "/admin-page";
  }
};
