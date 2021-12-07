
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentProfile} from "./service";

const Banner = () => {
    const information = useSelector(state => state.profile)
    const x = information.information;
    console.log("Banner information: ",information, typeof (information));
    console.log('x:', x, typeof (x));
    const dispatch = useDispatch();
    useEffect(() => fetchCurrentProfile(dispatch), [])


    return (
        <>

            <div className="row">
                <div className="col-1">
                    <div style={{marginTop:'13px'}}>
                    <i className="fas fa-arrow-left"></i>
                    </div>
                </div>
                <div className="col-11">
                    <div style={{ fontSize: '30px',color:'white'}}>
                        {information.name}
                    </div>

                    <div style={{color: 'darkgray'}}>
                        5,169 Tweets
                    </div>
                </div>
            </div>
            <div>
                <img
                    src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    height="400px" width="100%" style={{ objectFit: 'cover' }}/>

            </div>
            <div className="row">
                <div className="col ms-2" style={{position:'relative'}}>

                    <img
                        src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        className="rounded-circle"
                        height="160px"
                        width="180px"
                        style={{ position: 'relative',  border: 'black  solid 2px', marginTop: "-55px"}}
                    />


                    <div >
                        <span style={{ fontSize: '24px', fontWeight: "bold", color:"white"}}>
                            {information.name}
                        </span>
                        <br/>
                        <span style={{color: 'gray'}}>
                            @{information.handle}
                        </span>
                    </div>


                </div>

                <div className="col">
                    <Link to="/a9/twitter/editBanner">
                        <button className="btn btn-dar rounded-pill border-dark float-end mt-2 text-white float-right">
                            Edit Profile
                        </button>
                    </Link>

                </div>
            </div>
            <div className="ms-2" style={{color: 'white'}}>
                <div>
                    {information.bio}
                </div>
                <div className="row" style={{color: 'darkgray'}}>
                    <div className="col-3 ">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="p-2">{information.location}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-birthday-cake"></i>
                        <span className="p-2">Born {information.dateOfBirth}</span>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-calendar-alt"></i>
                        <span className="p-2">Joined {information.dateJoined}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <span style={{color: 'red', fontWeight:'bold'}} className="p-1"> {information.followingCount} <i
                            className="fas fa-arrow-up"></i> </span>

                        <span style={{color: 'darkgray'}} className="p-1">Following</span>
                    </div>
                    <div className="col-5">
                        <span style={{color: 'red',fontWeight:'bold'}} className="p-1"> {information.followersCount} <i
                            className="fas fa-arrow-up"></i> </span>
                        <span style={{color: 'darkgray'}} className="p-1">Followers</span>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Banner;