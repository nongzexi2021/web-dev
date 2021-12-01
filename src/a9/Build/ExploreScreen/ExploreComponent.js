import React from 'react'

const ExploreComponent = () => {
    return(

            <div className="container">
            <div className="row">

                <div className = "col-10">
                    <div className="search">
                    <i className="fas fa-search"/>
                    <label for="searchbar"/><input type = "text" placeholder="Search Twitter"  id = "searchbar" />
        
                    </div>
                </div>
                <div className="col-1">
                    <a href="explore-settings.htm">

                      <div className = "icon1"><i className="fa fa-cog fa-2x"/></div>
                    </a>
                </div>
            </div>
           
           
           <ul className="nav mb-2 nav-tabs">

              <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html,">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html,">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-sm-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
           </ul>

           
           <img className = "img-fluid" src = {'https://cdn.mos.cms.futurecdn.net/J2NTP9Er4Ad3kRsms7XRoD.jpeg'}/>

   
           </div>

           
    );
}

export default ExploreComponent;
