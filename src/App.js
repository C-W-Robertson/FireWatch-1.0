/* App wraps the various components that are to be rendered into the browser.
React Router is used to route the menu bar titles to their proper places, as well as pass the corresponding content. 
This will include the home page, 'NotFound' component for errors. */


import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./component/NotFound";
import menuBar from './component/menuBar';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import MenusAssigned from "./component/MenusAssigned";
import BasicMenus from "./component/BasicMenus";
import './App.css';

class App extends Component {
  state = {
    menus : menuBar.menus,
  };

  render() {
    return (
      <Router>
        <Navbar menus = {this.state.menus}/>      
          <div className = "App">
            <Routes>
              <Route path = "*" element = {<NotFound />} />
              <Route path = "/" element = {<MenusAssigned pages = {this.state.menus} />} />
              <Route path = "/menu/:slug" element = {<BasicMenus menus = {this.state.menus} />} />
            </Routes>
          </div>
        <Footer />
      </Router>
    );
  }
};

export default App;

