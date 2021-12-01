import PostItem from "./PostItem.js"
import postList from "./postList.json"
import React from 'react';

const PostItemList = () => {
    return (
        <div className="container">
            <ul className="list-group">
        {
            postList.map(postList => {
                return (<PostItem postList={postList}/>);
            })
        }
            </ul>
        </div>
    );

}


export default PostItemList;