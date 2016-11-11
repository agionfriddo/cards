'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';

import App from './components/App';
import { store } from './store';
import { fetchAllQuestions } from './reducers/questions';

const onAppEnter = () => store.dispatch(fetchAllQuestions);

render (
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter} />
      </Router>
    </Provider>,
  document.getElementById('main')
);
