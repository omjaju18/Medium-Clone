import { createContext, useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const MediumContext = createContext();

const MediumProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.docs.map((doc) => console.log(doc));
    };
  }, []);

  return (
    <MediumContext.Provider value={(posts, users)}>
      {children}
    </MediumContext.Provider>
  );
};
