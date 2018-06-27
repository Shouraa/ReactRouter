import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect,
    Prompt,
    Switch
  } from 'react-router-dom';
  
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

const Header = () => {
    return(
        <Router>
          <div>
            <div className = "title">
            <h1>Let's Talk</h1>
            <h3>Think you have what it takes? Show us.</h3>
            </div>
            <ul className="navLinks">
                <li><NavLink exact activeStyle ={{color:'orange'}} to="/">SectionOne</NavLink></li>
                <li><NavLink exact activeStyle ={{color:'orange'}} to="/SectionTwo">SectionTwo</NavLink></li>
                <li><NavLink exact activeStyle ={{color:'orange'}} to="/SectionThree">SectionThree</NavLink></li>
            </ul>

          <Switch>
            <Route exact path = '/' component = {SectionOne} />
            <Route exact path = '/SectionTwo' component = {SectionTwo} />
            <Route exact path = '/SectionThree' component = {SectionThree} />    
          </Switch>

          </div>
        </Router>
    );
} 

export default Header;