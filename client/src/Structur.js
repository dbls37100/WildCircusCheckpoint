import React from 'react';
import './Structur.css';
import placeHolder from './img/150.png';
import placeHolder2 from './img/350x150.png';

function Structur() {
  return (
    <div className="App">
      <main className="main-style">
        <div className="header--main">
          <h2 className="title--header">The Circus</h2>
        </div>
        <div>
          <h2>Presentation</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h2>Photos</h2>
          <div className="Img--structure">
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
          </div>
        </div>
        <div>
          <h2>About Us</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h2 id="ancre">event</h2>
          <div className="FavEvent-style">
            <h3>Our favorite act</h3>
            <img className="Img--FavEvent" src={placeHolder2} alt="funny images"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
          <div className="Img--structure">
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
            <img src={placeHolder} alt="funny images"></img>
          </div>
          </div>
      </main>
    </div>
  );
}

export default Structur;
