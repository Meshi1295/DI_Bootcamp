import React from 'react';
import SearchBox from './components/SearchBox'
import './App.css';
import CardList from './components/CardList';

class App extends React.Component  {
 

  render() {
    return (
      <div>
        <h1>Robots</h1>
        <SearchBox />
        <CardList />
      </div>
    );
  }
}


export default App;