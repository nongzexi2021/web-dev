const postItem = (postList)=>{

    return (`
            
                <div class = "row">
                <div class = "col-3">
                       <img class = "figure" src = "${postList.icon}">     
                </div>
                
                <div class = "col-6">
                        <div class="row">
                        <p class = "u-text">
                            ${postList.poster}
                            ${postList.time}
                        </p>    
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
                        
                        <img class = "pictureContent" src="${postList.picture}">
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
                    <i class="fab fa-adn"></i>
                    ${postList.reply}
                </div>
                <div class="col-3">
                <i class="fab fa-adn"></i>
                    ${postList.forwardTo}
                </div>    
                <div class="col-3">
                <i class="fab fa-adn"></i>
                    ${postList.like}
                </div>   
                <div class="col-3">    
                <i class="fab fa-adn"></i>
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