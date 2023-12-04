import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // register with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Log in with email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // alert("Log out successful")
            setUser(null)
        }).catch((error) => {
            // An error happened.
            console.log(error.message)
        });
    }
    /// Auth Observer
    useEffect(() => {
        const unsubscrive = onAuthStateChanged(auth, (currentUser) => {
            // console.log('Auth state change', currentUser)
            setUser(currentUser);
        })
        return () => {
            return unsubscrive()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;