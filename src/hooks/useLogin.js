import { useState } from "react";

export const useLogin = () => {
  const [auth, setAuth] = useState({});

  const connectApi = async (email, password) => {
    await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((result) => result.json())
      .then((data) => setAuth(data));
  };
  console.log(connectApi, auth)
  return [auth, connectApi];
};
