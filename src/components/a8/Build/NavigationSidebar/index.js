import React from 'react';
import {Link} from "react-router-dom";
const NavigationSidebar = ({active}) => {

    return(
        <>
            <div className="list-group">
                <Link to = "/a8" className="list-group-item " >
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to = "/a8/twitter/home" className={`list-group-item ${active === 'home' ? 'active' :''}`} >
                    <div className="row">
                        <div className="col-2">
                            <div>
                               <i className="fas fa-home"/>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>Home</div>
                        </div>
                    </div>
                </Link>
                <Link to = "/a8/twitter/explore" className={`list-group-item ${active === 'explore' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <i className="fas fa-hashtag"/>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>Explore</div>
                        </div>
                    </div>
                </Link>

                <a href="notifications.html" className={`list-group-item ${active === 'notifications' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                               <i className="fas fa-bell"></i>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>Notifications</div>
                        </div>
                    </div>
                </a>
                <a href="messages.html" className={`list-group-item ${active === 'message' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>Message</div>
                        </div>
                    </div>
                </a>
                <a href="bookmarks.html" className={`list-group-item ${active === 'bookmarks' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                               <i className="fas fa-bookmark"></i>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>BookMarks</div>
                        </div>
                    </div>
                </a>

                <a href="lists.html" className={`list-group-item ${active === 'lists' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <i className="fas fa-list"></i>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>Lists</div>
                        </div>
                    </div>
                </a>

                <Link to = "/a8/twitter/profile" className={`list-group-item ${active === 'profile' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <i className="fas fa-user-alt"></i>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>Profile</div>
                        </div>
                    </div>
                </Link>

                <a href="more.html" className={`list-group-item ${active === 'more' ? 'active' :''}`}>
                    <div className="row">
                        <div className="col-2">
                            <div>
                                <i className="fas fa-circle"></i>
                            </div>
                        </div>
                        <div className="col-10 d-none d-lg-block">
                            <div>More</div>
                        </div>
                    </div>
                </a>
                
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill list-group-item d-grid mt-2 " id = "tweet">
                    Tweet</a>
            
            </div>
            </>
    );
}
export default NavigationSidebar;
