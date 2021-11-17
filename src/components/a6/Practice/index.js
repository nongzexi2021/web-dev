import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList"
import {Link} from "react-router-dom";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

            <Link to="/a6/practice">
                Practice
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>



        </div>
    )
};


export default Practice;

