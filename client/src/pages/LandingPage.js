import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import API from '../utils/API'
import ListItem from '../components/ListItem'

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
            .then(res => { console.log(res.data); setState({projects: [res.data]})})
            .catch(err => console.log(err));
    };
    return (
        <div className={landing}>
            {state.projects.map((project) => {return <ListItem key= {project._id} title= {project.title} description= {project.description} 
            materials={project.materials} photos={project.photos} docs={project.docs}></ListItem>})}
        </div>
        // <p className={landing}>welcome to the projects page. Soon, it will only be accessible by logged in users. If logged in users do not have any saved projects, they will see a project start component. If logged in users do have saved projects, they will see a similar component, but with active projects highlighted in blue.</p>
        
    )
}

export default Landing;