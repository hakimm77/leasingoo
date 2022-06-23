import { doc, setDoc } from "firebase/firestore";
import { additionalFieldsType } from "../../types/additionalFieldsType";
import { db } from "../firebase/firebaseConfig";
import { generateId } from "./generateId";

export const addNewCarBrand = async (
  additionalFields: additionalFieldsType[],
  productID: string
) => {
  if (additionalFields.length > 0) {
    const id = productID ? productID : generateId();
    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/carBrands/${id}`), {
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};

export const addNewCar = async (
  additionalFields: additionalFieldsType[],
  productID: string
) => {
  if (additionalFields.length > 0) {
    const id = productID ? productID : generateId();
    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/cars/${id}`), {
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};

export const addNewRetailer = async (
  additionalFields: additionalFieldsType[],
  productID: string
) => {
  if (additionalFields.length > 0) {
    const id = productID ? productID : generateId();

    let additionalFieldsObject: any = {};

    additionalFields.forEach((field) => {
      additionalFieldsObject[field.key] = field.value;
    });

    await setDoc(doc(db, `/retailers/${id}`), {
      id: id,
      ...additionalFieldsObject,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};
