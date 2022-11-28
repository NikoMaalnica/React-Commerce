import { collection, getDocs, getDoc, doc, query, where, writeBatch, increment} from "firebase/firestore";
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

export const updateManyProducts = async (items) => {
    const batch = writeBatch(db);

    items.forEach(({id, qty})=>{
        const docRef = doc(db, "items", id);
        batch.update(docRef, {stock: increment(-qty)})
    })
    batch.commit()
}