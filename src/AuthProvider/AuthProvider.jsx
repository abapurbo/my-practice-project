import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import auth from "../Config/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

// user login in google provider
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user)
    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // update profile
    const userUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    // user sign in 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // sign in google provider
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };

    // user observe
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // user auth information
    const authInfo = {
        user,
        loading,
        createUser,
        userUpdate,
        loginUser,
        logOut,
        signInGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
