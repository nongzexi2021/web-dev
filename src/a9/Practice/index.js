import React from "react";
import APIExamples from "./APIExamples";
import {Link, Route} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import HomeScreen from "../../a8/Build/HomeScreen/HomeScreen";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            {/*<ReduxExamples/>*/}
            <Route path="/a9/twitter/home" component={HomeScreen}/>
            <Link to="/a9/twitter/home">Build</Link>
            <APIExamples/>




        </div>
    )
};


export default Practice;

