import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { generateId } from "./generateId";

export const addNewCarBrand = async (name: string, description: string) => {
  if (name && description) {
    const id = generateId();

    await setDoc(doc(db, `/carBrands/${id}`), {
      name: name,
      description: description,
      id: id,
    });

    console.log("done");
    window.location.href = "/admin-page";
  }
};

export const addCar = () => {};

export const addNewRetailer = () => {};
