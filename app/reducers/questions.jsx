import axios from 'axios';

// ------------- CONSTANTS
const SET_QUESTIONS = 'SET_QUESTIONS';


// ------------- SYNC ACTION CREATORS
export const setQuestions = questionList => ({ type: SET_QUESTIONS, questionList });


// ------------- ASYNC ACTION CREATORS
export const fetchAllQuestions = dispatch => {
    axios.get('/api/questions')
    .then(res => dispatch(setQuestions(res.data)));
};

// ------------- REDUCER

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questionList;
    default: return state;
    }
};

export default reducer;
