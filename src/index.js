import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './HomeScreen.css';
import './explore.css';
import App from './App';
import NavigationSidebar from "./components/a6/Build/NavigationSidebar";
import WhoToFollowListItem from "./components/a6/Build/WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./components/a6/Build/WhoToFollowList";
import ExploreScreen from "./components/a6/Build/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';


ReactDOM.render(

    <App />,
    // <NavigationSidebar active={"home"}/>,
    // <WhoToFollowList/>,
    // <ExploreScreen/>,
    // <HomeScreen/>,
    document.getElementById('root')
);


