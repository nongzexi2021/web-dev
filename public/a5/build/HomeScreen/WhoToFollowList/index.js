import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            
            <!-- continue here -->
                ${
                    who.map(whos=>{
                        return(WhoToFollowListItem(whos));
                    }).join("")
                }
            
`);
}
export default WhoToFollowList;
