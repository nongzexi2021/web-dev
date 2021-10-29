const postItem = (postList)=>{

    return (`
            
                <div class = "row">
                <div class = "col-3">
                       <img class = "figure" src = "${postList.icon}">     
                </div>
                
                <div class = "col-6">
                        <div class="row">
                        <span>
                        <p class = "u-text">
                            ${postList.poster}
                            <span class = "time">${postList.time}</span>
                        </p>
                        </span>

                        </div>
                        <div class="row">
                            <p class = "tittle">${postList.text}</p>
                        </div>
                </div>
            
             <div class = "row">
             <div class = "col-3"></div>
             <div class = "col-6">
                <ul class="list-group">
                    <list-group-item>
                        
                        <img class = "pictureContent img-fluid" src="${postList.picture}">
                    </list-group-item>    
                    <list-group-item>   
                        <div class = "tittle">
                            ${postList.title}
                    </list-group-item>    
                        </div>
                    <list-group-item> 
                        <div>
                            ${postList.content}
                        </div>
                    </list-group-item>  
                        
                    </list-group-item>      
                    
                </ul>
            
            <div >
            
            <div class="row">

                <div class="col-3">
                    <i class="fas fa-comment-dots"></i>
                    ${postList.reply}
                </div>
                <div class="col-3">
                <i class="fas fa-reply"></i>
                    ${postList.forwardTo}
                </div>    
                <div class="col-3">
                <i class="fas fa-heart"></i>
                    ${postList.like}
                </div>   
                <div class="col-3">    
                <i class="fas fa-download"></i>
                    ${postList.download}
                </div>     
            </div>
            </div>
            </div>
            </div>
            </div>
            
            
    
    
    
    `);
}

export default  postItem;