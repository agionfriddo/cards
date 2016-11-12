const START_GAME = 'START_GAME';
const SAVE_GAME = 'SAVE_GAME';
const ADD_TO_MY_POINTS = 'ADD_TO_MY_POINTS';
const SET_OPPONENT_POINTS = 'SET_OPPONENT_POINTS';
const RESET_POINTS = 'RESET_POINTS'

export const startGame = () => ({ type: START_GAME });
export const saveGame = (game) => ({ type: SAVE_GAME, game });
export const addToMyPoints = () => ({ type: ADD_TO_MY_POINTS });
export const setOpponentPoints = (points) => ({ type: SET_OPPONENT_POINTS });
export const resetPoints = () => ({ type: RESET_POINTS })

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

export const callResetPoints = dispatch => {
  console.log("YO WADDUP")
  dispatch(resetPoints());
};

const initialState = {
  myPoints: 0,
  opponentPoints: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_GAME: return state;
    case SAVE_GAME: return state;
    case ADD_TO_MY_POINTS:
      return { myPoints: state.myPoints + 1, opponentPoints: state.opponentPoints };
    case SET_OPPONENT_POINTS:
      return { myPoints: state.myPoints, opponentPoints: state.opponentPoints + 1 };
    case RESET_POINTS:
      return initialState;
    default: return state;
  }
};

export default reducer;
