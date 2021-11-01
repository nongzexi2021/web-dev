import NavigationSidebar from "./NavigationSidebar/index.js";
import HomeScreenComponent from "./HomeScreenComponent.js";
import PostItemList from "./PostList/index.js";


const HomeScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-3 col-md-3 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar/>
                </div>

                <div className="col-9 col-lg-8  col-xxl-6 col-xl-6">
                    <div className="container">
                        <PostItemList/>
                    </div>
                </div>

                <div className="col-2 d-none d-lg-block col-lg-3 col-xl-4 col-xxl-4">
                    <ul>

                        <HomeScreenComponent/>

                    </ul>

                </div>
            </div>
        </>
    );
}

export default HomeScreen