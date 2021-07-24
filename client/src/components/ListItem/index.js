import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";
import './styles.css'

const useStyles = makeStyles((theme) => ({
  projectLink: {
    fontSize: "25px",
    textAlign: "center",
    paddingTop: "15px",
    marginLeft: "20px",
    marginRight: "20px",
    color: "black",
    fontFamily: "Heebo"
  },
  deleteButton: {
    backgroundColor: '#d84c42',
    margin: '10px',
    '&:hover': {
      cursor: 'default'
    }
  },
  noLink: {
    textDecoration: 'none',
    color: 'black'
  }
}))


function ListItem({title,description,id, handleProjectDelete, color, editMode}) {

  const {projectLink, deleteButton, noLink} = useStyles();
    return (
      <Link className= {noLink} to={"/landing/" + id}>
        <div className="list-item-div" style={{background: color}}>
          <div className="fold-top-left"></div>
          <Grid container spacing={2}>
            <Grid item xs zeroMinWidth>             
                        <h1 className="project-title">
                          <Typography spacing={2} className={projectLink}>
                            {title}
                          </Typography>
                        </h1 >
            </Grid>
            
          </Grid>
          
            
            <h3 className="project-description">{description}</h3>
            <Button className={deleteButton} variant="contained"
            color="secondary" 
            disabled={!editMode}
            onClick= {handleProjectDelete}>X</Button>
        </div>
        </Link>
    )
}

export default ListItem;