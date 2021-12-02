import React from 'react';
import SearchBox from './components/SearchBox'
import './App.css';
import CardList from './components/CardList';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      arr:[],
      search: ''
    }
  }

  onSearch = (e) => {
     this.setState({search:e.target.value})
  }

  render() {
    const filterRobots = this.state.arr.filter(item => {
      return item.name.toLowerCase().includes(this.state.search.toLowerCase())
    })
   
    return (
      <div>
        <h1>Robots</h1>
        <SearchBox searchChang={this.onSearch}/>
        <CardList robotsArr={filterRobots} />
      </div>
    );
  }

  componentDidMount(){
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>{
     
      this.setState({arr:users})
    })
    .catch(e => {console.log(e)})
  }
}


export default App;