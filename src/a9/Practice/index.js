import React from "react";
import APIExamples from "./APIExamples";
import {Link, Route} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import HomeScreen from "../../a9/Build/HomeScreen/HomeScreen";
import Movies from "./Movies";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Route path="/a9/twitter/home" component={HomeScreen}/>
            <Link to="/a9/twitter/home">Build</Link>
            <Movies/>,





        </div>
    )
};


export default Practice;

