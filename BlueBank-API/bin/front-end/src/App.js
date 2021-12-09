
import React from 'react';
import { Route , Routes} from 'react-router-dom';
import './App.css';
import UserHomePage from './pages/homepage-user/homepage-user-component';
import LoginPage from './pages/login/login-component';
import ErrorPage from './pages/error/error-component';


function App() {
  return (
    <div>
        <Routes>
          <Route  exact path = '/error' element = {<ErrorPage/>}/>
          <Route  exact path = '/home' element = {<UserHomePage/>} /> 
          <Route  exact path = '/login' element = {<LoginPage/>}/>
        </Routes>       
    </div>
  );
}

export default App;