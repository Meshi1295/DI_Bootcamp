import React from 'react';
import './App.css';
import FirstName from './components/FirstName'
import SecondName from './components/SecondName'
import Click from './components/Click';
import Result from './components/Result';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      secondName: '',
      percentage: '',
      result:''
    }
  }


  handelClick =()=>{
    const {firstName,secondName} = this.state
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${secondName}&fname=${firstName}`, {
      "method": "GET",
      "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "8057569592mshd26b6e43330626dp1b95f7jsne653e2849c0d"
          }
        })
      .then(res => res.json())
      .then(data => {this.setState({result:data})})
      .catch(err =>  console.error(err))
  }

  handelChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    const {firstName,secondName,result} =this.state
    return (
      <div className="App">
        <header className="App-header">
         <h1>Love Calculator</h1>
         <FirstName fname={firstName} handelChange={this.handelChange}/>
         <SecondName sname={secondName} handelChange={this.handelChange}/>
         <Click handelClick={this.handelClick} />
         <Result result={result}/>
        </header>
      </div>
    );
  }
}

export default App;
