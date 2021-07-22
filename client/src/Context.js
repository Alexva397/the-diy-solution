import React, { createContext, useEffect, useState } from "react";
import Loading from "./components/Loading";
import axios from "axios";

export const userContext = createContext();

export default function Context({ children }) {

    const [userObject, setUserObject] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isAuthenticated) {

            axios.get("/api/user/getuser", { withCredentials: true })
                .then((res) => {
                    // const { username } = JSON.parse(localStorage.getItem("user"))
                    const { user, isAuthenticated } = res.data;
                    if (res.data) {
                        setUserObject(user);
                        setIsAuthenticated(isAuthenticated);
                        setIsLoaded(true);
                    }
            })
        }
        // setIsLoaded(true);
    }, [])

    return (
        <>
            {!isLoaded ? <Loading /> :
            <userContext.Provider value={{ userObject, setUserObject, isAuthenticated, setIsAuthenticated }}>
                {children}
            </userContext.Provider>}
        </>
    );
}