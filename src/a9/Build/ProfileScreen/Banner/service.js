const PROFILE_API = 'http://localhost:4000/rest/profile';

export const fetchCurrentProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile => {
                console.log("打她:" , profile,typeof(profile));
                return dispatch({
                    type: 'fetch-all-profile',
                    profile
                })
            }
        );
export const updateCurrentProfile = (dispatch, newOwner) => {
    console.log('newOwner: ',newOwner);
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(newOwner),
        headers: {
            'content-type': 'application/json',
        }
    })
        .then(response =>
            response.json()

        )
};