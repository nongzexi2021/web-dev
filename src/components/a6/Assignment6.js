import Practice from './Practice'
import {Link, Route} from 'react-router-dom'
import Build from './Build/index'

import React from 'react'
import HomeScreen from './Build/HomeScreen/HomeScreen'
import ExploreScreen from './Build/ExploreScreen/index'
import HelloWorld from './HelloWorld'

const Assignment6 = () => {
    return(
        <div>


            <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                <Practice/>
            </Route>

            <Route path="/a6/twitter">
                <Build/>
            </Route>
            <Route path="/a6/hello" exact={true}>
                <HelloWorld/>
            </Route>
            {/*<Route path="/a6/twitter/home">*/}
            {/*    <HomeScreen/>*/}
            {/*</Route>*/}
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>
            <Route path="/a6/twitter/home" component={HomeScreen}/>
            {/*<Route path={"/a6/practice"} component={Practice}/>*/}
        </div>
    )
}
export default Assignment6