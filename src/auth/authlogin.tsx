import React, { useEffect, useState } from 'react';
import Login from '../pages/login_register/login';
import HomePage from '../pages/home/HomePage';
import Register from '../pages/login_register/register';



const authHOCLogin = (WrappedComponent: any) => {


  async function checkTokenValidity(token: any) {
    



    const api = await fetch('http://127.0.0.1:4000/token/checkvalid', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    const response = await api.json()
    return response
    
  }




  const AuthenticatedComponent = (props:any) => {

    const token = localStorage.getItem('token');
    
    const [isTokenValid, setIsTokenValid] = useState(false);
    
    useEffect(() => {
      const checkValidity = async () => {
        const isValid = await checkTokenValidity(token);
        setIsTokenValid(isValid);
      };
      
      checkValidity();
    }, [token]);






    console.log(isTokenValid)


    if (isTokenValid) { 
        window.location.href = "/";
        return <HomePage {...props} />;
    } else {
        if (WrappedComponent === Register)
            return <Register />;
        else
            return <Login />;

    }
  };

  return AuthenticatedComponent;
};

export default authHOCLogin;