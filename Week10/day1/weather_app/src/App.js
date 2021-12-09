import React from 'react'
import './App.css';
import FavoritePage from './pages/FavoritePage'
import HomePage from './pages/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavbarNav from './components/NavbarNav';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarNav />
      <Switch>
        <Route exact path='/Home' component={() => <HomePage />} />
        <Route path='/Favorite' component={() => <FavoritePage />} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
