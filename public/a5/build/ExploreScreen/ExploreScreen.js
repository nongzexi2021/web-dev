import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";


(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-3 col-md-3 col-lg-1 col-xl-2 col-xxl-2">
            ${NavigationSidebar()}
        </div>
        
        <div class="col-9 col-lg-8  col-xxl-6 col-xl-6">
            
              ${ExploreComponent()}
        </div>

        <div class = "col-2 d-none d-lg-block col-lg-3 col-xl-4 col-xxl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);

