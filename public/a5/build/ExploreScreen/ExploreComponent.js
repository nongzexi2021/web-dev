import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="container">
            <div class="row">
                       <!-- search field and cog -->
                <div class = "col-10">
                    <div class="search">
                    <i class="fas fa-search"></i>
                    <label for="searchbar"></label><input type = "text" placeholder="Search Twitter"  id = "searchbar" />
        
                    </div>
                </div>
                <div class="col-1">
                    <a href="explore-settings.htm">

                      <div class = "icon1"><i class="fa fa-cog fa-2x"></i></div>
                    </a>
                </div>
            </div>
           
           
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
              <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html,">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html,">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-sm-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
           </ul>
           <!-- image with overlaid text -->
           
           <img class = "img-fluid" src = "https://cdn.mos.cms.futurecdn.net/J2NTP9Er4Ad3kRsms7XRoD.jpeg">
           <ul class="list-group">
           ${PostSummaryList()}
           </ul>
   
           </div>
           
    `);
}
export default ExploreComponent;
