import './App.css';
import React from 'react'
// import HeaderToo from './headerToo';
// import Header from './header';


//Exercise 1: First React App

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }


//Exercise 2: No JSX
// const App= () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "I dont use JSX!!!")
//   );
// };


//Exercise 3: JSX Introduction
// function App() {
//   const myElement = <h1>I Love JSX!</h1>;
//   const sum = 5+5
//   return (
//     <div className="App">
//       {myElement}
//       {
//           <h3> React is ${sum} times better with JSX </h3>     
//       }
//     </div>
//   )
// }


//Exercise 4 : JSX And HTML
// class App extends React.Component {
//  render(){
//   const listItems = ['Appels','Banana', 'Cherries'];
//    return(
//     <>
//       <Header/>
//       <HeaderToo />
//       {
//         listItems.map(item => {
//           return <ul>
//             <li> {item} </li> 
//           </ul>
//         })
//       }
//     </>
//     ) 
//   }
// }

// Exercise 5: JSX And Form
// const App = () => {
//   return(
//     <>
//        <form>
//        <label> 
//         <input type="text" />
//       </label>
//     </form>
//     </>
//   );
// }

// Exercise 6 : Object
// const App = () => {

//   const object = {
//     first_name: 'Bob',
//     last_name: 'Dylan'
//   };

//   return(
//     <>
//       <h1>My name is {object.first_name}</h1>
//       <h2>My last name is: {object.last_name}</h2>
//     </>
//   );
// }

//Exercise 7 : Array & Map
// const App = () => {

//   // const animals = ['Horse','Turtle','Elephant','Monkey'];
//   const animals = [{label: 'Horse'},{label: 'Turtle'},{label: 'Elephant'},{label: 'Monkey'}];
//   return(
//     <>
//     {
//       animals.map(item => {
//         return <ul key={item.label}>
//           <li>{item.label}</li>
//         </ul>
//       })
//     }
//     </>
//     );

//   }

export default App;
