import axios from 'axios';
import io from 'socket.io';
let socket = io.connect('http://localhost:3000');

// ------------- CONSTANTS
const SET_INPUT = 'SET_INPUT';


// ------------- SYNC ACTION CREATORS
export const setInput = input => ({ type: SET_INPUT, input })


// ------------- ASYNC ACTION CREATORS
export const emitInput = input => dispatch => {
  socket.emit('input', { input })
};

// ------------- REDUCER
