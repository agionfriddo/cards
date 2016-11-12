import axios from 'axios';

// ------------- CONSTANTS
const SET_GROUPS = 'SET_GROUPS';


// ------------- SYNC ACTION CREATORS
export const setGroups = groupList => ({ type: SET_GROUPS, groupList });


// ------------- ASYNC ACTION CREATORS
export const fetchAllGroups = dispatch => {
    axios.get('/api/groups')
    .then(res => dispatch(setGroups(res.data)));
};

// ------------- REDUCER

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return action.groupList;
    default: return state;
    }
};

export default reducer;
