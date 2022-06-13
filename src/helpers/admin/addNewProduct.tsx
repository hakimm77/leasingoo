import { doc, setDoc } from "firebase/firestore";
import { additionalFieldsType } from "../../types/additionalFieldsType";
import { db } from "../firebase/firebaseConfig";
import { generateId } from "./generateId";

export const addNewCarBrand = async (
  name: string,
  description: string,
  additionalFields: additionalFieldsType[]
) => {
  if (name && description && additionalFields.length > 0) {
    const id = generateId();
    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/carBrands/${id}`), {
      name: name,
      description: description,
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};

export const addCar = () => {};

export const addNewRetailer = () => {};
