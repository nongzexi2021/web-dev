import React from "react";

const PostItem = ({
                      postList = {


                          "poster": "Google Man", "time": "-2h","text": "I love google map","title": "I used it when I drive","content":"Very easy to use",
                          "reply":"445","forwardTo":"467","like":"77","download":"88",
                          "icon":"https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?cs=srgb&dl=pexels-photomix-company-218717.jpg&fm=jpg",
                          "picture": "https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?cs=srgb&dl=pexels-pixabay-38271.jpg&fm=jpg"


                      }
} )=>{

    return (

                <div className = "row">
                <div className = "col-3">
                       <img className = "figure" src = {postList.icon}/>
                </div>
                
                <div className = "col-6">
                        <div className="row">
                        <span>
                        <p className = "u-text">
                            {postList.poster}
                            <span className = "time">{postList.time}</span>
                        </p>
                        </span>

                        </div>
                        <div className="row">
                            <p className = "tittle">{postList.text}</p>
                        </div>
                </div>
            
             <div className = "row">
                 <div className="col-3"></div>
             <div className = "col-6">
                <ul className="list-group">
                    <list-group-item>
                        
                        <img className = "pictureContent img-fluid" src={postList.picture}/>
                    </list-group-item>    
                    <list-group-item>   
                        <div className = "tittle">
                            {postList.title}
                        </div>
                    </list-group-item>    

                    <list-group-item> 
                        <div>
                            {postList.content}
                        </div>
                    </list-group-item>  
                        

                    
                </ul>
            <div>

            
            <div className="row">

                <div className="col-3">
                    <i className="fas fa-comment-dots"/>
                    {postList.reply}
                </div>
                <div className="col-3">
                <i className="fas fa-reply"/>
                    {postList.forwardTo}
                </div>    
                <div className="col-3">
                <i className="fas fa-heart"/>
                    {postList.like}
                </div>   
                <div className="col-3">    
                <i className="fas fa-download"/>
                    {postList.download}
                </div>     
            </div>
            </div>
            </div>

            </div>
                </div>





    
    );
}

export default  PostItem;