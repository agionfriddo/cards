import axios from 'axios';

// ------------- CONSTANTS
const SET_QUESTIONS = 'SET_QUESTIONS';
const ADD_QUESTION = 'ADD_QUESTION'


// ------------- SYNC ACTION CREATORS
export const setQuestions = questionList => ({ type: SET_QUESTIONS, questionList });
export const addQuestion = question => ({ type: ADD_QUESTION, question })


// ------------- ASYNC ACTION CREATORS
export const fetchAllQuestions = dispatch => {
    axios.get('/api/questions')
    .then(res => dispatch(setQuestions(res.data)));
};

export const fetchQuestionsByGroup = ({ groupId }) => dispatch => {
  axios.get(`/api/questions/${groupId}`)
  .then(res => {
    dispatch(setQuestions(res.data));
  });
};

export const createQuestion = question => dispatch => {
  axios.post('/api/questions', { question })
  .then(res => {
    dispatch(addQuestion(res.data));
  });
};

// ------------- REDUCER

const initialState = [{
  id: 0,
  content: '',
  answer: '',
  points: 0,
  group_id: 0
}];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUESTIONS:
          return action.questionList;
        case ADD_QUESTION:
          return state.concat(action.question);
    default: return state;
    }
};

export default reducer;
