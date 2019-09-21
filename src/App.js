import React, { Component } from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.js';

import {HOME_PATH} from './components/constants.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

            <Router>
                <div className="AppWrap">
                    <Switch>
                        <Route path={HOME_PATH} component={Home} />
                    </Switch>
                </div>
            </Router>

      </Provider>
    );
  }
}

export default App;
