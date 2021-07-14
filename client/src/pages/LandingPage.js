import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '../components/ListItem'
import API from '../utils/API'

const useStyles = makeStyles(() => ({
    landing: {
        marginTop: "300px",
        color: "#000000",
    },
}))

function Landing() {
    const { landing } = useStyles();

    const [state, setState] = useState({
        projects: []
    });

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.getProjects()
            .then(res => { console.log(res.data); setState({projects: res.data})})
            .catch(err => console.log(err));
    };
    return (
        <div className={landing}>
            title
            {/* {state.projects.map((project) => {return <ListItem key= {project._id} title= {project.title} description= {project.description} 
            materials={project.materials} photos={project.photos} docs={project.docs}></ListItem>})} */}
        </div>        
    )
}

export default Landing;