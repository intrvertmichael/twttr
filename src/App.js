import React from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

function App() {
  axios.get('http://localhost:3001/api/posts')
  .then( res => res.data )
  .then( data => data.map(post=> console.log(`${post.name} says: ${post.payload}`)))
  .catch( err => console.log(err) )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
