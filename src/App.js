import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component'
import ShopPage from './pages/shop/shop.component'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </switch>
      
    </div>
  );
}

export default App;
