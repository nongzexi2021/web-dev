import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList"
import {Link, Route} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import HomeScreen from "../Build/HomeScreen/HomeScreen";
import ExploreScreen from "../Build/ExploreScreen";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <ReduxExamples/>
            {/*<TodoList/>*/}
            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}


            <Link to="/a7/twitter/home">Build</Link>



        </div>
    )
};


export default Practice;

