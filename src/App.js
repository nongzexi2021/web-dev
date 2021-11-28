
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import Assignment6 from "./components/a6/Assignment6";
import A7 from "./components/a7/A7"
import HelloWorld from "./components/a7/HelloWorld";
import Practice from "./components/a8/Practice/index";
import Build from "./components/a7/Build/index";
import {BrowserRouter, Link, Route} from "react-router-dom";

import './App.css';
import {combineReducers, createStore} from "redux";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile"
import who from "./reducers/who";
import {Provider} from "react-redux";
import APIExamples from "./components/a8/Practice/APIExamples";
import A8 from "./components/a8/A8";


const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <li>
                <Link to = "/a6">A6</Link>
            </li>
            <li>
                <Link to = "/a7/practice">A7</Link>
            </li>

            <li>
                <Link to = "/a8"> A8 </Link>
            </li>

            <div className="container">
                <Route path="/a6/">
                    <Assignment6/>
                </Route>

                <Route path = "/a7">
                    <A7/>
                </Route>

                <Route path = "/a8">
                    <A8/>
                </Route>

            </div>


        </BrowserRouter>
        </Provider>
    );
}



export default App;
