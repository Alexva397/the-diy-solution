import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '../components/ListItem';
import ProjectModal from '../components/ProjectModal'
import API from '../utils/API'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing(8),
    }
}))

function Landing() {
    const { root } = useStyles();

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
        <div className={root}>
            <div class= "button-bar">
                <ProjectModal></ProjectModal>   
            </div>
            
            {state.projects.map((project) => {return <ListItem key= {project._id} id={project._id} title= {project.title} description= {project.description} 
            materials={project.materials} photos={project.photos} docs={project.docs}></ListItem>})} 
        </div>        
    )
}

export default Landing;