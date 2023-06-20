import React, { useEffect, useState } from 'react';
import Login from '../pages/login_register/login';
// import { useHistory } from 'react-router-dom';
// import { createBrowserHistory } from 'history';



const authHOC = (WrappedComponent: any) => {


  async function checkTokenValidity(token: any) {




    const api = await fetch('http://127.0.0.1:4000/token/checkvalid', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    const response = await api.json()
    return response

  }




  const AuthenticatedComponent = (props: any) => {

    const token = localStorage.getItem('token');
    
    const [isTokenValid, setIsTokenValid] = useState(false);
    // const history = createBrowserHistory();


    useEffect(() => {
      const checkValidity = async () => {
        const isValid = await checkTokenValidity(token);
        setIsTokenValid(isValid);
      };

      checkValidity();
    }, [token]);







    if (isTokenValid) {
      return <WrappedComponent {...props} />;
    } else {
      console.log("aan hna")

      // history.push("/login")


      return <Login />;
    }
  };

  return AuthenticatedComponent;
};

export default authHOC;