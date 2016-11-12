'use strict';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

import App from './components/App';
import Game from './components/Game';
import TopicPicker from './components/TopicPicker'
import Form from './components/Form'
import { store } from './store';
import { fetchQuestionsByGroup, callClearQuestions } from './reducers/questions';
import { fetchAllGroups, fetchGroupById } from './reducers/groups';
import { createSocket } from './reducers/socket'
import { callReset } from './reducers/currentQuestion'

const onGameEnter = (data) => {
  console.log(data)
  store.dispatch(callReset);
  store.dispatch(fetchQuestionsByGroup({ groupId: data.params.groupId }));
  store.dispatch(fetchGroupById({ groupId: data.params.groupId }));
  store.dispatch(createSocket(socket));
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
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={TopicPicker} onEnter={onTopicsEnter} />
          <Route path="/home" component={TopicPicker} onEnter={onTopicsEnter} />
          <Route path="/game" component={Game} onEnter={onGameEnter} />
          <Route path="/game/:groupId" component={Game} onEnter={onGameEnter} />
          <Route path="/form" component={Form} onEnter={onFormEnter} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('main')
);
