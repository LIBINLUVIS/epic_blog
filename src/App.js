import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import {UserProvider} from './Context/UserContext.js';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Signup1 from './Pages/Signup1';
import PrivateRoutes from './utils/PrivateRoutes';
import Authhome from './Pages/authhome';
import Dashboard from './Pages/dashboard'
import Write from './Pages/Write';

function App() {
  return (
    <div>
      <Router>
        <UserProvider>
        <Routes>
        <Route element={<PrivateRoutes/>} >
       
        </Route>
        <Route  element={<Home/>} path="/" exact />
        <Route element={<Login/>} path="/signin" />
        <Route  element={<Signup/>} path="/signup"/>  
        <Route element={<Signup1/>} path="/signup1"/>
        <Route element={<Authhome/>} path="/authhome"/>
        <Route element={<Dashboard/>} path="/dashboard"/>
        <Route element={<Write/>} path="/write" />
        </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}

export default App;
