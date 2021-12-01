import information from "./data/profile"

const profile = (state = information, action) => {
    switch (action.type){
        case 'fetch-all-profile':


            return(
                action.information

            )



        case  'save':
            const newState = {
                name: action.name.newName,
                handle: "Zexi",
                profilePicture: "jose.png",
                bannerPicture: "https://www.tuxedo-cat.co.uk/wp-content/uploads/2016/12/shutterstock_529826206-1.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
                bio: action.info.bio,
                website: action.personalURL.web,
                location: action.loca.loca,
                dateOfBirth: action.birth.birthday,
                dateJoined: "11/2021",
                followingCount: 66666,
                followersCount: 168168,
                editSwitch : false
            }

            return newState;

        case  'save1':

            return action.information;



        default:
            return state;
    }



}
export default profile