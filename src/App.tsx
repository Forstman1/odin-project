import React from 'react';
import './App.css';
import Login from './pages/login_register/login';
import Register from './pages/login_register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/profilepage';
import Friends from './pages/friends/friends';
import Findnewfriends from './pages/findnewfriends/findnewfriends';
import authHOC from './auth/auth';
import authHOCLogin from './auth/authlogin';
 

const WrappedComponentHome = authHOC(HomePage)
const WrappedComponentsettings = authHOC(ProfilePage)
const WrappedComponentFriends = authHOC(Friends)
const WrappedComponentFindnewfriends = authHOC(Findnewfriends)

const WrappedComponentLogin = authHOCLogin(Login)
const WrappedComponentRegister = authHOCLogin(Register)



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<WrappedComponentHome />} />

          <Route path='/settings' element={<WrappedComponentsettings />}/>
          <Route path='/friends' element={<WrappedComponentFriends />}/>
          <Route path='/Findnewfriends' element={<WrappedComponentFindnewfriends />}/>




          <Route path='/login' element={<WrappedComponentLogin />}/>
          <Route path='/register' element={<WrappedComponentRegister />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
