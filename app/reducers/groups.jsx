import axios from 'axios';

// ------------- CONSTANTS
const SET_GROUPS = 'SET_GROUPS';
const ADD_TO_GROUP = 'ADD_TO_GROUP';


// ------------- SYNC ACTION CREATORS
export const setGroups = groupList => ({ type: SET_GROUPS, groupList });
export const addToGroup = group => ({ type: ADD_TO_GROUP, group });


// ------------- ASYNC ACTION CREATORS
export const fetchAllGroups = dispatch => {
  axios.get('/api/groups')
  .then(res => dispatch(setGroups(res.data)));
};

export const fetchGroupById = ({ groupId }) => dispatch => {
  axios.get(`/api/groups/${groupId}`)
  .then(group => dispatch(setGroups([group.data])));
};

export const createGroup = ({ name, category, user_id }) => dispatch => {
  axios.post('/api/groups', { name, category, user_id })
  .then(group => dispatch(addToGroup(group.data)));
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
        case ADD_TO_GROUP:
          return state.concat(action.group);
    default: return state;
    }
};

export default reducer;
