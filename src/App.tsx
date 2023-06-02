import React from 'react';
import './App.css';
import Login from './pages/login_register/login';
import Register from './pages/login_register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/profilepage';
 


function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path='/' element={<HomePage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile' element={<ProfilePage />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
