import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import Login from '../pages/login_register/login';

const authHOC = (WrappedComponent: any) => {


  async function checkTokenValidity(token: any) {
    
    return fetch('/users/me', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => {
      if (response.ok) {
        return true;
      } else {
        return false;
      }
    }).catch(error => {
      console.log(error);
      return false;
    });
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


    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('/api/data', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        });
        const jsonData = await response.json();
        setData(jsonData);
      };

      if (isTokenValid)
        fetchData();
    }, [token]);

    if (isTokenValid) {
      return <WrappedComponent {...props} data={data}/>;
    } else {
        window.location.href = "/login"
      return <Login />;
    }
  };

  return AuthenticatedComponent;
};

export default authHOC;