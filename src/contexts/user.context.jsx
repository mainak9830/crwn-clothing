import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
//actual Value you want to access
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        console.log(currentUser)
        const unsubscribe = onAuthStateChangedListner((user) => {
            
            console.log("User", user);
            if(user)
                createUserDocumentFromAuth(user);
            setCurrentUser(user);
        })
        
        return unsubscribe;
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}