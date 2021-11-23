import React from 'react';
import './App.css';

class App extends React.Component {
 
  constructor(){
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaScript", votes: 0},
          {name: "Java", votes: 0}
      ]
    }
  } 
  
  updateVote = ({ target }) => {
    const index = target.getAttribute("data-index");

    const copy = [...this.state.languages];
    const copyOfItem = { ...copy[index] }
    copyOfItem.votes++;
    copy[index] = copyOfItem
    this.setState({ languages: copy })
  }

  render(){
    const {languages} = this.state
    return(
      <>
        {
           languages.map((item,index) => {
           return  <div key={item.name} className="lang">
           <p>{item.name}</p>
           <p>{item.votes}</p>
           <button data-index={index} onClick={this.updateVote}>Click</button>
           </div>            
          })
        }       
      </>
    )
  }
}

export default App;
