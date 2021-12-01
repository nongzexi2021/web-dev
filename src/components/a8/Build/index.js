import React from "react";

import tweets from "../../../reducers/tweets";
import who from "../../../reducers/who";
import profile from "../../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen/index"
import EditBanner from "./ProfileScreen/Banner/EditBanner";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>






            </div>
        </Provider>
    );
};
export default Build;