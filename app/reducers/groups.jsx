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

export const fetchGroupById = ({ groupId }) => dispatch => {
  axios.get(`/api/groups/${groupId}`)
  .then(group => dispatch(setGroups([group.data])));
};

// ------------- REDUCER

const initialState = [{
  id: 0,
  name: '',
  category: '',
  user_id: 0
}];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GROUPS:
            return action.groupList;
    default: return state;
    }
};

export default reducer;
