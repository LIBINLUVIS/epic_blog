import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route element={<PrivateRoutes/>} >
       
        </Route>
        <Route  element={<Home/>} path="/" exact />
        <Route element={<Login/>} path="/signin" />
        <Route  element={<Signup/>} path="/signup"/>   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
