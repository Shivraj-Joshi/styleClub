import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { setDoc, deleteDoc } from "firebase/firestore";

import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/FirebaseConfig";

const myData = (props) => {
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-us", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // function to add a new product by admin
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("all fields are required");
    }
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, products);
      toast.success("products added successfully");
      setTimeout(() => {
        window.location.href = "/admindashboard";
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  // function for updating product

  const edithandle = (item) => {
    setProducts(item);
  };

  //update a product

  const updateProduct = async (item) => {
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product successfully updated");
      getProductData();
      window.location.href = "/admindashboard";
    } catch (error) {
      console.log(error);
    }
    // setProducts("")
  };

  //function for deleting a product

  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("product deleted successfully");
      getProductData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default myData;
