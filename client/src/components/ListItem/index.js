import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import './styles.css'

function ListItem({title,description,id, handleProjectDelete, color}) {

    return (
        <div className="list-item-div" style={{background: color}}>
            <Link className="project-link" to={"/landing/" + id}>
                      <h1>
                        {title}
                      </h1>
                    </Link>
            <h3 className="project-description">{description}</h3>
            <Button className="delete-button" variant="outlined" onClick= {handleProjectDelete}>Delete Project</Button>
        </div>
    )
}

export default ListItem;