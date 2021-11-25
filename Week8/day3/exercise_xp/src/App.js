import React from 'react';
import './App.css';
import Color from './components/Color'

// class App extends React.Component {
//   constructor(){
//     super();
   
//     this.shootRegular = this.shootRegular.bind(this)

//   }
//   render(){
//     return (
//       <div>
//         <Color alert={this.shoot} />
//         <button onClick={()=> this.shootRegular(this)}>Keep Shooting!</button>
//         <button onClick={()=>this.shootRegularWithParameter()}> text Shooting!</button>
//       </div>
//     )
//   }
  

//   shoot = () => {
//     alert(' Great Shot!')
//   }

//   shootRegular ()  {
//     alert(this)
//   }


//   shootRegularWithParameter(){
//     alert('Goal')
//   }
// }


class shootTwo extends React.Component {
   
  render(){
   return(
       <>
       <button onClick={()=> this.shootTwo(this)}>Keep Shooting! - ex5</button>
       </>
   )
  }

  shootTwo(){ alert(this) }
  
}
export default shootTwo
// export default App;
