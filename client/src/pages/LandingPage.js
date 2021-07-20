import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ListItem from '../components/ListItem';
import ProjectModal from '../components/ProjectModal'
import API from '../utils/API'
import { userContext } from "../Context";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginTop: theme.spacing(8),
    }
}))

function Landing() {
    const { root } = useStyles();

    const { userObject, isAuthenticated } = useContext(userContext);

    const [state, setState] = useState({
        // userId: '',
        projects: [],
        // username: '',
        // isLoggedIn: false,
    });
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            // setState({ ...state, 
            //     userId: userObject._id,
            //     username: userObject.username,
            //     isLoggedIn: true,
            // });
            setUsername(userObject.username);
            setUserId(userObject._id);
            setIsLoggedIn(true);
            loadProjects();
        }        
    }, [isAuthenticated])

    function deleteProject(id){
		API.deleteProject(id)
		.then(res => loadProjects())
		.catch(err => console.log(err));
	  };

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
            materials={project.materials} photos={project.photos} docs={project.docs} handleProjectDelete={() => deleteProject(project._id)}></ListItem>})} 
        </div>        
    )
}

export default Landing;