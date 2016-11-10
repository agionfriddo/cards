import { combineReducers } from 'redux'



const example = (state=[], action) => {
  switch(action.type) {
    default: return state;
  }
}

const rootReducer = combineReducers({
  example: example
})

export default rootReducer;
