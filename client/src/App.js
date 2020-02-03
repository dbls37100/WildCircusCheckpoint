import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Structur from './Structur';
import './App.css';
import Booking from './Booking';
import history from './img/ourHIstory.jpg';
import elephant from './img/elephant.jpg';


export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="menu-disposition">
          <div className="Row-First">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/"><h2 className="margin-leftStyle text-shadow-pop-top responsive-menu">Home</h2></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/ourhistory"><h2 className="text-shadow-pop-top responsive-menu">Our history</h2></Link>
          </div>
          <div className="Row-Second">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/reservation"><h2 className="margin-leftStyle text-shadow-pop-top responsive-menu">Booking</h2></Link>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/tickets"><h2 className="text-shadow-pop-top responsive-menu">My tickets</h2></Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Structur />
          </Route>
          <Route path="/ourhistory">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/reservation">
            {<Booking />}
          </Route>
          <Route path="/tickets">
            <Tickets />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="Fond--homePage_style">
        <div className="header--main">
          <h2 className="title--header">The Circus</h2>
        </div>
      <h2>Our history</h2>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
         e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
         odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
         ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img className="Our_history-image" src={history} alt="circus history" />
      <div>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
         e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
         odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
         ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
         e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
         odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
         ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
      <img className="Our_history-image" src={elephant} alt="elephant history" />
      <div>
      <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
         e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
         odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
         ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor
         e magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm
         odo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla p
         ariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
    <div className="header--main">
      <h2 className="title--header">The Circus</h2>
    </div>
    <div>
      <h2>About</h2>
    </div>
    </div>
  );
}


function Tickets() {
  return (
    <div>
      <div className="header--main">
        <h2 className="title--header">The Circus</h2>
      </div>
      <h2>Tickets</h2>
      <h3>Here you will find the tickets you bought.</h3>
    </div>
  );
}

