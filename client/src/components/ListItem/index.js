import React from "react";
import { Link } from "react-router-dom";

function ListItem({title,description,id}) {
    return (
        <div>
            <Link to={"/landing/" + id}>
                      <h1>
                        {title}
                      </h1>
                    </Link>
            <br/>
            <h3>{description}</h3>
            <br/>
        </div>
    )
}

export default ListItem;