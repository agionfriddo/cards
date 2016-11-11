import { combineReducers } from 'redux';
import questionReducer from './questions';
import currentQuestionReducer from './currentQuestion';
import gameReducer from './currentGame';

const rootReducer = combineReducers({
  questionList: questionReducer,
  currentQuestion: currentQuestionReducer,
  currentGame: gameReducer
});

export default rootReducer;
