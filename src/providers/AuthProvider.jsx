import React, { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import app from '../firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, LoggedUser => {
            setUser(LoggedUser)
            setLoading(false)
        });
        return unSubscribe;
    },[])

    const updateUser = (name, photo)=> {
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
    }

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;