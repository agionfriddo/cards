const START_GAME = 'START_GAME';
const SAVE_GAME = 'SAVE_GAME';
const ADD_TO_MY_POINTS = 'ADD_TO_MY_POINTS';
const SET_OPPONENT_POINTS = 'SET_OPPONENT_POINTS';
const RESET_POINTS = 'RESET_POINTS';
const SET_OPPONENT_TEXT = 'SET_OPPONENT_TEXT';
const SET_GAME_STATUS = 'SET_GAME_STATUS';

export const startGame = () => ({ type: START_GAME });
export const saveGame = (game) => ({ type: SAVE_GAME, game });
export const addToMyPoints = () => ({ type: ADD_TO_MY_POINTS });
export const setOpponentPoints = (points) => ({ type: SET_OPPONENT_POINTS, points });
export const setOpponentText = (opponentText) => ({ type: SET_OPPONENT_TEXT, opponentText });
export const resetPoints = () => ({ type: RESET_POINTS });
export const setGameStatus = status => ({ type: SET_GAME_STATUS, status });

export const callStartGame = dispatch => {
  return () => dispatch(startGame());
};

export const callSaveGame = dispatch => {
  return () => dispatch(saveGame());
};

export const callAddToMyPoints = dispatch => {
  return () => dispatch(addToMyPoints());
};

export const callSetOpponentPoints = points => dispatch => {
  dispatch(setOpponentPoints(points));
};

export const callSetOpponentText = ({ opponentText }) => dispatch => {
  dispatch(setOpponentText(opponentText));
};

export const callResetPoints = dispatch => {
  dispatch(resetPoints());
};

export const callSetGameStatus = (dispatch) => {
  return (status) => {
    dispatch(setGameStatus(status))
  };
};


const initialState = {
  myPoints: 0,
  opponentPoints: 0,
  opponentText: '',
  status: 'Go!'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: return state;
    case SAVE_GAME: return state;
    case ADD_TO_MY_POINTS:
      return Object.assign({}, state, { myPoints: state.myPoints + 1 });
    case SET_OPPONENT_POINTS:
      return Object.assign({}, state, { opponentPoints: action.points + 1 });
    case RESET_POINTS:
      return initialState;
    case SET_OPPONENT_TEXT:
      return Object.assign({}, state, { opponentText: action.opponentText });
    case SET_GAME_STATUS:
      return Object.assign({}, state, { status: action.status });
    default: return state;
  }
};

export default reducer;
