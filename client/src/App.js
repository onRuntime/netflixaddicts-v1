import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import Search from './components/pages/Search';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './css/style.css';
import 'remixicon/fonts/remixicon.css';
const App = (props) => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path="*">
          {/* TODO: Error 404 */}
          <p>404</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
