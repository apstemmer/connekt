import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <Router>
          <Route path="/" component={Main} history={browserHistory}>
              <IndexRoute component={Home} />
              <Route path="/cars" component={Car}/>
              <Route path="/about" component={About}/>
          </Route>
      </Router>
    );
  }
}
