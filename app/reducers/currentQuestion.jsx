const NEXT_QUESTION = 'NEXT_QUESTION'
const RESET = 'RESET';

export const nextQuestion = () => ({ type: NEXT_QUESTION });
export const reset = () => ({ type: RESET })

export const setNextQuestion = dispatch => {
  return () => dispatch(nextQuestion());
};

export const callReset = dispatch => {
  dispatch(reset());
};

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      return state + 1;
    case RESET:
      return initialState;
    default: return state;
  }
};

export default reducer;
