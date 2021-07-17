import React from "react";
import { Link } from "react-router-dom";
import './styles.css'
function ListItem({title,description,id}) {
    return (
        <div class="list-item-div">
            <Link class="project-link" to={"/landing/" + id}>
                      <h1>
                        {title}
                      </h1>
                    </Link>
            <h3 class="project-description">{description}</h3>
        </div>
    )
}

export default ListItem;