import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const userContext = createContext({});

// export { userContext };

export default function Context(props) {

    const [userObject, setUserObject] = useState();

    useEffect(() => {
        
        axios.get("/api/user/getuser", { withCredentials: true })
            .then((res) => {
                if (res.data) {
                    // console.log(res.data);
                    setUserObject(res.data);
                    console.log(userObject);
                }
                // else {
                //     window.location = "/login";
                // }
            })
    }, [])

    return (
        <>
            <userContext.Provider value={userObject}>{props.children}</userContext.Provider>
        </>
    );
}



// const [userObject, setUserObject] = useState();

// useEffect(() => {
//     console.log(userObject);
//     if(userObject === undefined) {
//         axios.get("/api/user/getuser", { withCredentials: true })
//         .then((res) => {
//             if (res.data) {
//                 console.log(res.data);
//                 setUserObject(res.data);
//                 console.log("here", userObject);
//             }
//             // else {
//             //     window.location = "/login";
//             // }
//          })
//     }
// }, [userObject])