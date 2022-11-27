import { collection, getDocs, getDoc, doc, query, where, writeBatch, increment, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const productsRef = collection(db, "items");


export const getProducts = async (categoria) => {
    const products = [];

    const q = categoria ? query(productsRef, where("categoria", "==", categoria)) : productsRef;

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
        products.push({...doc.data(), id: doc.id });
    });

    return products
};


export const getProduct = async (itemId) => {

    const document = doc(db, "items", itemId)

    const docSnap = await getDoc(document);

    if(docSnap.exists()){
        return {id : docSnap.id, ...docSnap.data()};
    }
    return null;
};

export const updateProduct = async (id, item) => {
    const productDoc = await updateDoc(doc(db, "items", id), item)
    return;
}

export const updateManyProducts = async (items) => {
    const batch = writeBatch(db);

    items.forEach(({id, qty})=>{
        const docRef = doc(db, "items", id);
        batch.update(docRef, {stock: increment(-qty)})
    })
    /* const items = {
        "6XaZgcARV9yqBwV0NEVD" : 10,
        "RIAFWFG3hpJTipvbXOmF" : 20,
        "RVHHlp5E96I2LLbp4vri" : 50,
        "ZV7NWVBz11mFV9tw0D2U" : 30,
        "bs2WQHARfupJEGuy0oxN" : 15,
        "dfVC0VhomZN77u222lG0" : 25,
        "vPjHVgXXOC06v3KVfp2k" : 80,
        "yTGOq5m3Kw3jzKSY1eKD" : 10
    };
    for (let id in items){
        const docRef = doc(dv, "items", id);
        batch.update(docRef, {stock: increment(-items[id])})
    } */
    batch.commit()
}