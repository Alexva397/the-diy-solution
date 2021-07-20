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
        userId: '',
        projects: [],
        username: '',
        isLoggedIn: false,

    });

    useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
        
        if (isAuthenticated) {
            
            setState({ ...state, 
                projects: userObject.projects,
=======
=======
        console.log(isAuthenticated);
>>>>>>> 841d998473a20b1314c6308bcabbd19a3d6abd78
        if (isAuthenticated) {
            setState({ ...state, 
>>>>>>> 727dd1e131cfd3ce081822395fc9ef2a43956f35
                userId: userObject._id,
                username: userObject.username,
                isLoggedIn: true,
<<<<<<< HEAD
            })
<<<<<<< HEAD
            loadProjects();
        }
=======
        loadProjects()
        }        
>>>>>>> 727dd1e131cfd3ce081822395fc9ef2a43956f35
    }, [])
=======
            });
            loadProjects();
        }        
    }, [isAuthenticated])
>>>>>>> 841d998473a20b1314c6308bcabbd19a3d6abd78

    function loadProjects() {
        API.getProjects()
            .then(res => { console.log(res.data); setState({...state, projects: res.data})})
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