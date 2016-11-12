import { combineReducers } from 'redux';
import questionReducer from './questions';
import currentQuestionReducer from './currentQuestion';
import gameReducer from './currentGame';
import socketReducer from './socket';
import groupReducer from './groups';

const rootReducer = combineReducers({
  questionList: questionReducer,
  currentQuestion: currentQuestionReducer,
  currentGame: gameReducer,
  socket: socketReducer,
  group: groupReducer
});

export default rootReducer;
