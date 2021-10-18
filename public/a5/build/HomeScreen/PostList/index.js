import postItem from "./PostItem.js"
import postList from "./postList.js"

const postItemList = () =>{
    return (`
            ${postList.map(lists=>{
                return (postItem(lists));
    }).join("")
    }
    `);
}

export default postItemList;