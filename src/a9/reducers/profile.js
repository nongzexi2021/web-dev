import information from "./data/profile"

const profile = (state = information, action) => {
    switch (action.type){
        case 'fetch-all-profile':

        //     console.log("fetch-who reducer",action.profile)
        //     return(
        //         {information: action.profile}
        // )
            return action.profile[0];



        case  'save':


            return action.profile[0];

        case  'save1':

            return  action.profile[0]

        default:
            return state;
    }



}
export default profile