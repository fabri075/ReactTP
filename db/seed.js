import { addDoc, collection } from "firebase/firestore";
import db from "./firebase-config.js";
import products from "../public/data/products.json" assert { type: "json"};

const itemsCollection = collection(db, "items");

const promises = products.map((product) => addDoc(itemsCollection, product));

Promise.all(promises).then(() => {
  console.log("Terminado");
  process.exit(0);
});
