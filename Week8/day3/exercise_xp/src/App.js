import React from 'react';
import './App.css';
import Color from './components/Color'

class App extends React.Component {
  render(){
    return (
      <div>
        <Color alert={this.shoot} />
      </div>
    )
  }
  

  shoot = () => {
    alert(' Great Shot!')
  }
}

export default App;
