import React from "react";
import {Route} from "react-router-dom";
import Build from "./Build";
import ExploreScreen from "./Build/ExploreScreen";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ProfileScreen from "./Build/ProfileScreen";
import EditBanner from "./Build/ProfileScreen/Banner/EditBanner";
import Practice from "./Practice";
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import profile from "../a9/reducers/profile";
import tweets from "../a9/reducers/tweets";
import who from "../a9/reducers/who";


const reducer = combineReducers({tweets: tweets, profile, who})
const store = createStore(reducer);

const A9 = () => {
    return(
        <Provider store={store}>
        <div>
            <Route path={["/a9", "/a9/twitter"]} exact={true}>
                <Practice/>
            </Route>
            <Route path="/a9/twitter/home">
                <Build/>
            </Route>
            <Route path="/a9/twitter/home" component={HomeScreen}/>
            <Route path="/a9/twitter/explore" component={ExploreScreen}/>
            <Route path="/a9/twitter/profile" component={ProfileScreen}/>
            <Route path="/a9/twitter/editBanner" component={EditBanner}/>
        </div>
        </Provider>
    )
}

export default A9;
