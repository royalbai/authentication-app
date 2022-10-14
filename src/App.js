import { Route, Routes } from 'react-router-dom';

import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Account from './components/Account';
import app from "./firebase";


function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Routes>
        <Route path="/" element="SignIn" />
        <Route path="/signup" element="SignUp" />
        <Route path="/account" element="Account" />
      </Routes>
    </div>
  );
};

export default App;
