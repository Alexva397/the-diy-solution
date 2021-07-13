import React from "react";

function ListItem(title,description) {
    return (
        <div>
            <h1>{title}</h1>
            <br/>
            <h3>{description}</h3>
            <br/>
            {/* <img src={photos[0].before} alt={title}></img> */}

        </div>
    )
}

export default ListItem;