import { doc, setDoc } from "firebase/firestore";
import { additionalFieldsType } from "../../types/additionalFieldsType";
import { db } from "../firebase/firebaseConfig";
import { generateId } from "./generateId";

export const addNewProduct = async (
  dbRef: string,
  additionalFields: additionalFieldsType[],
  productID: string
) => {
  if (additionalFields.length > 0) {
    const id = productID ? productID : generateId();
    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/${dbRef}/${id}`), {
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};
