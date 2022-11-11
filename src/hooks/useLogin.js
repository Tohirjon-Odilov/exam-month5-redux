import axios from "axios";
import { useState } from "react";

export const useLogin = () => {
  const [auth, setAuth] = useState({});
  const [error, setError] = useState({});

  const connectApi = (email, password) => {
    axios.post('https://reqres.in/api/login', {
      email,
      password
    })
      .then((result) => setAuth(result.data))
      .catch(err => {
        setError(err)
      })
  };
  return [auth, connectApi, error];
};


