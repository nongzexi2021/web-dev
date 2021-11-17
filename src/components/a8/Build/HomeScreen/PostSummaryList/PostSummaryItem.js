import React from "react";

const PostSummaryItem=({ post = {
    "topic": "Web Development",
    "userName": "ReactJS",
    "time": "2h",
    "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    "image": "../../../images/react-blue.png"
}})=>{


    // if(post.tweets == null){
    //     return 0;
    // }
    return (
          <li className="list-group-item middleBar">

                        <div className="row">
                        <div className="col-8">

                            <div className = "row">
                                <div className="b-text"> {post.topic}</div>
                                <div><text className="u-text">{post.userName}</text>
                                    <i className="fas fa-check-circle"/>
                                    <text className="b-text">{post.time}</text> </div>

                            </div>
                            <div className = "row">
                                <div className="u-text">
                                    {post.title}
                                </div>
                                <text className="b-text">{post.tweets}</text>
                            </div>



                        </div>
                        <div className = "col-4 col-s-6">

                            <img className = "news" src={post.image}/>
                            

                        </div>
                        </div>
           </li>
         
    

    );
}

export default PostSummaryItem;