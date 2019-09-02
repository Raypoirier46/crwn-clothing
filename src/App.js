import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component'
import { Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </switch>
      
    </div>
  );
}

export default App;
