import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import './styles.css'

function ListItem({title,description,id, handleProjectDelete}) {

    return (
        <div class="list-item-div">
            <Link class="project-link" to={"/landing/" + id}>
                      <h1>
                        {title}
                      </h1>
                    </Link>
            <h3 class="project-description">{description}</h3>
            <button class="delete-button" onClick= {handleProjectDelete}>Delete Project</button>
        </div>
    )
}

export default ListItem;