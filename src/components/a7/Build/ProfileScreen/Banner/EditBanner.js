import NavigationSideBar from '../NavigationSidebar/index'
import information from '../../../../../reducers/data/profile'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const EditBanner = () => {
    let [name, setName] = useState({newName: information.name})
    let [info, setInfo] = useState({bio: information.bio})
    let [loca, setLoca] = useState({loca: information.location})
    let [personalURL, setPersonalURL] = useState({web : information.website})
    let [birth, setBirth] = useState({birthday: information.dateOfBirth});
    const dispatch = useDispatch()
    const nameChangeHandler = (e) => {
        const name = e.target.value;
        const newName = {newName : name};
        setName(newName);
    }
    const bioChangeHandler = (e) => {
        const bio = e.target.value;
        const newInfo = {
            bio : bio
        };
        setInfo(newInfo);
    }

    const locationChangeHandler = (e) => {
        const location = e.target.value;
        const newLoca = {loca : location}
        setLoca(newLoca);
    }

    const websiteChangeHandler = (e) => {
        const web = e.target.value;
        const newWeb = {web : web}
        setPersonalURL(newWeb);
    }

    const birthChangeHandler = (e) => {
        const birthday = e.target.value;
        const newBirth = {birthday : birthday}
        setBirth(newBirth);
    }

    const saveClickHandler = () => {
        dispatch({type: 'save', info, loca, personalURL, name, birth})
    }
    return (

        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2" style={{ 'position': 'relative' }}>
                    <NavigationSideBar active={'profile'}/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10">
                    <div className="row">
                        <div className="col-1 d-flex align-items-center justify-content-center">

                            <Link to="/a7/twitter/profile">
                                <i className="fas fa-times"></i>
                            </Link>

                        </div>
                        <div className="col-10">
                            <div style={{ fontSize: '20px' }}>
                                Edit Profile
                            </div>

                        </div>
                        <div className="col-1">
                            <Link to="/a7/twitter/profile">
                                <button className="btn btn-light rounded-pill bg-white me-2 float-end"
                                        onClick={saveClickHandler}>
                                    <span className="fw-bold text-black">Save</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            height="400px" width="100%" style={{ objectFit: 'cover' }}/>

                    </div>
                    <div className="ms-2">
                        <div>
                            <img
                                src="https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                className="rounded-circle"
                                height="160px"
                                width="180px"
                                style={{ position: 'relative', border: 'black solid 2px', marginTop: '-55px' }}
                                alt="profile picture"
                            />
                        </div>

                        <div className="mt-2">
                            <label for="name">Name</label>
                            <textarea className="bg-black text-white " id="name" style={{width:"100%"}}
                                      value = {name.newName} onChange={nameChangeHandler}>
                                {information.name}
                            </textarea>
                        </div>
                        <div className="mt-2 ">
                            <label for="bio">Bio</label>
                            <textarea className="bg-black text-white" name='bio' style={{width:"100%"}}
                                      value={info.bio} onChange={bioChangeHandler}>
                                {information.bio}
                            </textarea>
                        </div>
                        <div className="mt-2">
                            <label for="location">Location</label>
                            <textarea className="bg-black text-white"  name="location" style={{width:"100%"}}
                                      value={loca.loca} onChange={locationChangeHandler}>
                                {information.location}
                            </textarea>
                        </div>
                        <div className="mt-2">
                            <label for="website">Website</label>
                            <textarea className="bg-black text-white" name="website" style={{width:"100%"}}
                                      value={personalURL.page} onChange={websiteChangeHandler}>
                                {information.website}
                            </textarea>
                        </div>
                        <div>
                            <div>
                                <span>Birth date - </span>
                                <label for="birthday" className="text-primary">Edit</label>
                            </div>
                            <div>

                                <input id="birthday" type="date" className="bg-light text-white"
                                       value={birth.birthday}  onChange = {birthChangeHandler}

                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
export default EditBanner