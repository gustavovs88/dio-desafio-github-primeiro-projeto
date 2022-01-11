import React from "react";

const ComponenteA = (props) => {
    return (
        <h1>
            Meu nome é Gustavo
            {props.children}
        </h1>
    )
}

export default ComponenteA