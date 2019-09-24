import React, { Component } from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home.js';
import Notexist from "./components/404.js"
import Header from './components/Header.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';

import {HOME_PATH} from './components/constants.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

            <Router>
                <div className="AppWrap">
                    <Header></Header>
                    <Menu></Menu>
                    <Switch>
                        <Route path={HOME_PATH} component={Home} />
                        <Route component={Notexist} />
                    </Switch>
                    <Footer></Footer>
                </div>
            </Router>

      </Provider>
    );
  }
}

export default App;
