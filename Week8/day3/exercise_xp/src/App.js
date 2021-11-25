import React from 'react';
import './App.css';
import Color from './components/Color'

class App extends React.Component {
  constructor(){
    super();
   
    this.shootRegular = this.shootRegular.bind(this)

  }
  render(){
    return (
      <div>
        <Color alert={this.shoot} />
        <button onClick={this.shootRegular}>Keep Shooting!</button>
      </div>
    )
  }
  

  shoot = () => {
    alert(' Great Shot!')
  }

  shootRegular ()  {
    alert(this)
  }
}

export default App;
