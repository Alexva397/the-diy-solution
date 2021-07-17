import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext({});

export default function Context(props) {

    const [userObject, setUserObject] = useState();

    useEffect(() => {
        axios.get("/api/user/getuser", { withCredentials: true })
            .then((res) => {
                if (res.data) {
                    console.log(res.data);
                    setUserObject(res.data);
                }
            })
    }, [])

    return (
        <>
            <userContext.Provider value={userObject}>{props.children}</userContext.Provider>
        </>
    );
}