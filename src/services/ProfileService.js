// const PROFILE_API = 'https://node-on-heroku-zexi.herokuapp.com/api/profile';
const PROFILE_API = 'http://localhost:4000/api/profile';

export const getCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(information =>
            dispatch({
                type: 'fetch-all-profile',
                information
            })
        );

export const updateCurrentProfile = (dispatch, newOwner) => {
    console.log(newOwner);

    fetch(PROFILE_API, {
        method: 'POST',
        body: JSON.stringify(newOwner),
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        }
    })
        .then(response => {
            return response.clone().json()
        })
        .then(information =>
            dispatch({
                type: 'save1',
                information
            }))
};