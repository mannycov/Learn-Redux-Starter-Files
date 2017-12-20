import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main.jsx';
import PhotoGrid from './components/PhotoGrid.jsx';
import Single from './components/Single.jsx';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

const Root = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </div>
);

render(<Root />, document.getElementById('root'));
