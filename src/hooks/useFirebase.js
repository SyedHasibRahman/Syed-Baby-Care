import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Auth/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);

    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    // setAdmin for Make Admin 
    useEffect(() => {
        fetch(`http://localhost:5000/users/${users?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [users?.email])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
        // .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then();
    }
    return {
        users,
        admin,
        isLoading,
        signInUsingGoogle,
        logOut,
        createUserWithEmailAndPassword,
        saveUser
    }
}

export default useFirebase;