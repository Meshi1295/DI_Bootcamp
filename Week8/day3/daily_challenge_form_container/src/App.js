import React from 'react';
import './App.css';
import FormComponent from './componenets/FormComponent'

class App extends React.Component {
  constructor(){
    super();
    this.state = { 
      firstName:'',
      lastName:'',
      age: '',
      gender: '',
      destination: '',
      nutsFree: false,
      lactoseFree: false,
      isVegan: false
    }
    this.handleChange =this.handleChange.bind(this)
  };

  handleChange = (e) => {
    const {value,checked,name,type} = e.target
  


    if(type === "checkbox"){
      this.setState({[name] : checked})
    }
    else {
      this.setState({[name] : value})
    }
   
  }

  render(){
    return (
        <FormComponent handleChange={this.handleChange} {...this.state}/>
    );
  }
}

export default App;
