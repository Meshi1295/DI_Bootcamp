import React, { Component } from 'react';
import {Navbar} from './components/Navbar'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import Post from './components/Post'
import './style.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/:post_id' element={ <Post/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;