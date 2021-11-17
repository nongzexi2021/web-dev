import React from "react";

const WhoToFollowListItem=({
                               who = {
                                   avatarIcon: '../../../images/nasa.png',
                                   userName: 'NASA',
                                   handle: 'NASA',
                               }

                           })=>{

    return (


                <li className="list-group-item">
                    <div className="row">
                        <div className="col-2">
                            <img className="follow" src={who.avatarIcon}/>
                        </div>
                            <div className = "col-7">
                            <div className="u-text"> {who.userName} <i className="fas fa-check-circle"/></div>
                            <div className="b-text">@{who.handle}</div>
                            </div>

                        <div className="col-3">
                            <span className="rounded-pill float-end btn bg-primary mt-1">Follow</span>
                        </div>
                    </div>
                </li>


    );
}

export default WhoToFollowListItem;