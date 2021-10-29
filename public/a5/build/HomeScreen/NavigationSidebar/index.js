const NavigationSidebar = (active) => {
    let flag1 = '';
    let flag2 = '';
    let flag3 = '';
    let flag4 = '';
    let flag5 = '';
    let flag6 = '';
    let flag7 = '';
    let flag8 = '';
    if(active === 'home'){
        flag1 = 'active';
    }
    else if(active === 'explore'){
        flag2 = 'active';
    }
    else if(active === 'explore'){
        flag3 = 'active';
    }
    else if(active === 'explore'){
        flag4 = 'active';
    }
    else if(active === 'explore'){
        flag5 = 'active';
    }
    else if(active === 'explore'){
        flag6 = 'active';
    }
    else if(active === 'explore'){
        flag7 = 'active';
    }
    else if(active === 'explore'){
        flag8 = 'active';
    }
    return(`
            <div class="list-group">
                <a class="list-group-item " href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
            
            

                <a href="#" class="list-group-item ${flag1} list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <div>
                               <i class="fas fa-home"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>Home</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item ${flag2}  list-group-item-action ">
                    <div class="row">
                        <div class="col-2">
                            <div>
                                <i class="fas fa-hashtag"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>Explore</div>
                        </div>
                    </div>
                </a>

                <a href="#" class="list-group-item ${flag3} list-group-item-action " aria-current="true">
                    <div class="row">
                        <div class="col-2">
                            <div>
                               <i class="fas fa-bell"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>Notification</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item ${flag4} list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <div>
                                <i class="fas fa-envelope"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>Message</div>
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item ${flag5} list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <div>
                               <i class="fas fa-bookmark"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>BookMarks</div>
                        </div>
                    </div>
                </a>

                <a href="#" class="list-group-item ${flag6} list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <div>
                                <i class="fas fa-list"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>Lists</div>
                        </div>
                    </div>
                </a>

                <a href="#" class="list-group-item ${flag7} list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <div>
                                <i class="fas fa-user-alt"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>Profile</div>
                        </div>
                    </div>
                </a>

                <a href="#" class="list-group-item ${flag8} list-group-item-action">
                    <div class="row">
                        <div class="col-2">
                            <div>
                                <i class="fas fa-circle"></i>
                            </div>
                        </div>
                        <div class="col-10 d-none d-lg-block">
                            <div>More</div>
                        </div>
                    </div>
                </a>
                
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill list-group-item d-grid mt-2 " id = "tweet">
                    Tweet</a>
            
            </div>
    `);
}
export default NavigationSidebar;
