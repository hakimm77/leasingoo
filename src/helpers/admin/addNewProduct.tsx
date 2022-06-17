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

export const addNewCar = async (
  additionalFields: additionalFieldsType[],
  name: string
) => {
  if (additionalFields.length > 0 && name) {
    const id = generateId();
    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/cars/${id}`), {
      name: name,
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};

export const addNewRetailer = async (
  additionalFields: additionalFieldsType[],
  name: string
) => {
  if (additionalFields.length > 0 && name) {
    const id = generateId();
    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/retailers/${id}`), {
      name: name,
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};
