import whoJson from './data/who.json';

const initialState = {
    who: whoJson
}

const who = (state = initialState,action) => {
    switch (action.type) {
        case 'fetch-who':
            return {who:action.who};

        default:
            return state;
    }
};

export default who;