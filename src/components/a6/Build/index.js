import React from "react";
import {Link} from "react-router-dom";

const Index = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello ||
            </Link>

            <Link to="/a6/practice">
                Practice ||
            </Link>

            <Link to = "/a6/twitter/home">
                Home
            </Link>

        </>
    )
};

export default Index;

