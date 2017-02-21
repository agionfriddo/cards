'use strict';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App';
import Game from './components/Game';
import TopicPicker from './components/TopicPicker';
import Form from './components/Form';
import store from './store';
import { fetchQuestionsByGroup, callClearQuestions } from './reducers/questions';
import { fetchAllGroups, fetchGroupById } from './reducers/groups';
import { createSocket } from './reducers/socket';
import { callReset } from './reducers/currentQuestion';
import { callResetPoints, callSetGameStatus } from './reducers/currentGame'

injectTapEventPlugin();

const onGameEnter = (data) => {
  const socket = io.connect();
  console.log(data);
  store.dispatch(fetchGroupById({ groupId: data.params.groupId }));
  store.dispatch(fetchQuestionsByGroup({ groupId: data.params.groupId }));
  socket.emit('setUpRoom', { groupId: data.params.groupId });
  store.dispatch(callReset);
  store.dispatch(callResetPoints);
  store.dispatch(createSocket(socket));
  store.dispatch(callSetGameStatus);
};
const onTopicsEnter = () => {
  store.dispatch(callClearQuestions);
  store.dispatch(fetchAllGroups);
};

const onFormEnter = () => {
  store.dispatch(fetchAllGroups);
  store.dispatch(callClearQuestions)
};

render (
  <Provider store={store}>
    <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={TopicPicker} onEnter={onTopicsEnter} />
            <Route path="/home" component={TopicPicker} onEnter={onTopicsEnter} />
            <Route path="/game" component={Game} onEnter={onGameEnter} />
            <Route path="/game/:groupId" component={Game} onEnter={onGameEnter} />
            <Route path="/form" component={Form} onEnter={onFormEnter} />
          </Route>
        </Router>
      </MuiThemeProvider>
    </Provider>,
  document.getElementById('main')
);
