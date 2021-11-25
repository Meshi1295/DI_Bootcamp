import "./App.css";
import React from "react";
import Form from "./Form";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isToggleOn : 'OFF',
      btnTxt: "ON",
      username: "",
      age: null,
      errorMessage: "",
      txtArea: "Please add your comment bellow",
    };
  }

   clickHandler = () => {
    alert("I was clicked");
  };

  handleKeyPress = (e) => {
    if (e.target.value == "React") {
      alert(`Enter key’ was pressed and will alert a message with the input text value:
       ${e.target.value}`);
    }
  };

  toggle = ()=>{
    if(this.state.isToggleOn === 'ON' ){
      this.setState({isToggleOn : 'OFF'})
    } else{
      this.setState({isToggleOn : 'ON'})
    }
  }

    changeUser = (e) => {
      // e.preventDefault(); 
    if (e.which == 13) {
      this.setState({ username: e.target.value });
      console.log(e);
    }
  };

  mySubmitHandler = (e) => {
    e.preventDefault();
    // alert(`You are submitting ${e.target.value}`);

    if (e.target.children[5].value == parseInt(e.target.children[5].value)) {
      this.setState({
        username: e.target.children[2].value,
        age: e.target.children[5].value,
        errorMessage: "",
      });
      alert(`You are submitting ${e.target.children[2].value}`);
    } else {
      this.setState({ errorMessage: "must be numbers" });
    }
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>Click Me!</button> 
        <hr />
        
        <input type="text" onKeyPress={this.handleKeyPress} placeholder="Enter key"/>
        <hr />

        <h3>Toggle</h3>
        <button onClick={this.toggle}>{this.state.isToggleOn}</button>
        <hr />

        <Form
          errMsg={this.state.errorMessage}
          age={this.state.age}
          submitAlert={this.mySubmitHandler}
          changeUserName={this.changeUser}
          username={this.state.username}
          alertIt={this.mySubmitHandler}
          txtArea={this.state.txtArea}
        />
      </>
    );
  }
}
export default App;