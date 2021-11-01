
import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item"> <div className="u-text">Who to follow</div></li>
                {

                    who.map(whos=>{
                        return(<WhoToFollowListItem who={whos}/>);
                    })
                }
            </ul>
);
}
export default WhoToFollowList;
