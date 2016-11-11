const NEXT_QUESTION = 'NEXT_QUESTION'

export const nextQuestion = () => ({ type: NEXT_QUESTION });

export const setNextQuestion = dispatch => {
  return () => dispatch(nextQuestion());
};

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_QUESTION:
      console.log(state)
      return state + 1;
    default: return state;
  }
};

export default reducer;
