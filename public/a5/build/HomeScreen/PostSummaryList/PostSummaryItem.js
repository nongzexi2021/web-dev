const PostSummaryItem=(posts)=>{

    return (`
          <li class="list-group-item middleBar">
                        <div class="row">
                        <div class="col-8">

                            <div class = "row">
                                <div class="b-text"> ${posts.topic}</div>
                                <div><text class="u-text">${posts.userName}</text>
                                    <i class="fas fa-check-circle"></i>
                                    <text class="b-text">${posts.time}</text> </div>

                            </div>
                            <div class = "row">
                                <div class="u-text">
                                    ${posts.title}
                                </div>
                                <text class="b-text">${posts.tweets}</text>
                            </div>



                        </div>
                        <div class = "col-4 col-s-6">

                            <img class = "news" src="${posts.image}">
                            

                        </div>
                        </div>
           </li>
         
    

    `);
}

export default PostSummaryItem;