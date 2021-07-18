import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '../components/ListItem'
import API from '../utils/API'
import { userContext } from "../Context";

const useStyles = makeStyles(() => ({
    landing: {
        marginTop: "74px",
        color: "#000000",
    },
}))

function Landing() {
    const { landing } = useStyles();

    const [state, setState] = useState({
        projects: []
    });

    const userObject = useContext(userContext);

    useEffect(() => {
        console.log("landingpage.js", userObject)
        if(!userObject) {
            // window.location = "/login";
        } else {
            loadProjects();
        }
    }, [])

    function loadProjects() {
        API.getProjects()
            .then(res => { console.log(res.data); setState({projects: res.data})})
            .catch(err => console.log(err));
    };
    return (
        <div className={landing}>
            <button className="add-project">
                <span>+</span> Create a New Project
            </button>
            {state.projects.map((project) => {return <ListItem key= {project._id} id={project._id} title= {project.title} description= {project.description} 
            materials={project.materials} photos={project.photos} docs={project.docs}></ListItem>})} 
        </div>        
    )
}

export default Landing;