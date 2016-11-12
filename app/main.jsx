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
import { store } from './store';
import { fetchQuestionsByGroup } from './reducers/questions';
import { fetchAllGroups } from './reducers/groups';
import { createSocket } from './reducers/socket'

const onGameEnter = (data) => {
  console.log(data)
  store.dispatch(fetchQuestionsByGroup({ groupId: data.params.groupId }));
  store.dispatch(createSocket(socket));
};
const onTopicsEnter = () => {
  store.dispatch(fetchAllGroups)
}

render (
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path="/topics" component={TopicPicker} onEnter={onTopicsEnter}/>
          <Route path="/game" component={Game} onEnter={onGameEnter} />
          <Route path="/game/:groupId" component={Game} onEnter={onGameEnter} />
        </Route>
      </Router>
    </Provider>,
  document.getElementById('main')
);
