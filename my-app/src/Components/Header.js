import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

const Header = () => (
  <Router>
    <div>
      <div className="title">
        <h1>Let's Talk</h1>
        <h3>Think you have what it takes? Show us.</h3>
      </div>
      <ul>
        <li className="navTabs">
          <NavLink exact activeStyle={{ color: 'white' }} to="/">
            Personal
          </NavLink>
        </li>
        <li className="navTabs">
          <NavLink exact activeStyle={{ color: 'white' }} to="/SectionTwo">
            Skills
          </NavLink>
        </li>
        <li className="navTabs">
          <NavLink exact activeStyle={{ color: 'white' }} to="/SectionThree">
            Portfolio
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={SectionOne} />
        <Route exact path="/SectionTwo" component={SectionTwo} />
        <Route exact path="/SectionThree" component={SectionThree} />
      </Switch>
    </div>
  </Router>
);

export default Header;
