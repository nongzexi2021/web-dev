import PostSummaryItem from "./PostSummaryItem.js"
import post from "./posts.js"

const PostSummaryList = () => {

    return (`
            <ul class="list-group">
            
            <!-- continue here -->
                ${
        post.map(posts=>{
            return(PostSummaryItem(posts));
        }).join("")
    }
            </ul>
`);
}
export default PostSummaryList;
