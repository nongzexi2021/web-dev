
const WhoToFollowListItem=(who)=>{

    return (`
    <ul class="list-group">
        <li class="list-group-item"> <div class="u-text">Who to follow</div></li>
                <li class="list-group-item">
                    <div class="row">
                        <div class="col-2">
                            <img class="follow" src="${who.avatarIcon}"> 
                        </div>
                            <div class = "col-7">
                            <div class="u-text"> ${who.userName} <i class="fas fa-check-circle"></i></div>
                            <div class="b-text">@${who.handle}</div>
                            </div>

                        <div class="col-3">
                    <button type="button" class="btn btn-primary btn-sm">Follow</button>
                        </div>
                    </div>
                </li>
    </ul>

    `);
}

export default WhoToFollowListItem;