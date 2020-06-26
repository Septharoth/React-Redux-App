import React from 'react';
import List from './components/List'
import Fetch from './components/Fetch'
import "./App.css"

function App() {
  return (
    <div className="charList">
      <h2> Mortydex </h2>
      <Fetch />
      <hr />
      {
        /*
          <div className="mortydex">
            <div className="char-img">
            </div>
            <div className="char-details">
            </div>
          </div>
        */
      }
      <List />
      <hr />
      <p>Add pagination for fun?</p>
    </div>
  )
}

export default App