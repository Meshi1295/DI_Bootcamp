import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard'
import { Routes, Route } from "react-router-dom";
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      register_userName: '',
      register_email: '',
      register_password: '',
      register_submit: true,

    }
  }
  render() {
    return (
      <div>
        <Routes>
          <Route path="/"
            element={<Register
              register_userName={register_userName}
              register_email={register_email}
              register_password={register_password}
              register_submit={register_submit}
            />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
