import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext();

export default function Context ({ children }) {

    const [userObject, setUserObject] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    

    useEffect(() => {
        
        axios.get("/api/user/getuser", { withCredentials: true })
            .then((res) => {
                if (res.data) {
                    console.log(res.data.user);
                    setUserObject(res.data.user);
                    setIsAuthenticated(res.data.isAuthenticated);
                }
            })
    }, [])

    return (
        <>
            <userContext.Provider value={{ userObject, setUserObject, isAuthenticated, setIsAuthenticated }}>
                {children}
            </userContext.Provider>
        </>
    );
}