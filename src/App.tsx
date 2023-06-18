import React from 'react';
import './App.css';
import Login from './pages/login_register/login';
import Register from './pages/login_register/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/profilepage';
import Friends from './pages/friends/friends';
import Groups from './pages/groups/groups';
import authHOC from './auth/auth';
 

const WrappedComponentHome = authHOC(HomePage)
const WrappedComponentsettings = authHOC(ProfilePage)
const WrappedComponentFriends = authHOC(Friends)
const WrappedComponentgroups = authHOC(Groups)


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<WrappedComponentHome />} />

          <Route path='/settings' element={<WrappedComponentsettings />}/>
          <Route path='/friends' element={<WrappedComponentFriends />}/>
          <Route path='/groups' element={<WrappedComponentgroups />}/>




          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
