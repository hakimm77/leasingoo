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
      if (field.key !== "id") {
        additionalFieldsObject[field.key] = field;
      }
    });

    await setDoc(doc(db, `/${dbRef}/${id}`), {
      id: {
        key: "id",
        value: id,
        order: 0,
      },
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};
