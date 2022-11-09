import React, { useEffect, useState } from 'react'
import './Login.scss'
import logo from './../../assets/img/circle b.svg'
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

//      eve.holt@reqres.in
//      cityslicka
// https://reqres.in/api/login

function Login() {
  const storage = window.localStorage;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setEmailPassword, error] = useLogin();
  const [loading, setLoading] = useState(false);
  // console.log(error.response.data.error);

  // const { message } = error
  // console.log(response.data.error);

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailPassword(email, password);
    setLoading(true);
  };

  console.log(error);

  useEffect(() => {
    const { token } = auth
    console.log(auth);
    storage.setItem("token", token);
    token && navigate('/tenetur')
    setEmail('')
    setPassword('')
  }, [auth, navigate, storage])

  // useEffect(() => {
  //   const { status, message, token } = auth;

  //   if (status === 200) {
  //     setLoading(false);

  //     if (error.state) {
  //       setError({
  //         state: false,
  //         msg: "",
  //       });
  //     }


  //   }

  //   if (status === 404) {
  //     setLoading(false);
  //     setError({
  //       state: true,
  //       msg: message,
  //     });
  //     console.log('staus');
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [auth]);

  return (
    <section className="site-login">
      <div className="container">
        {loading && <h3>Loading...</h3>}
        {error.message && <h3 className={"err"}>Error: {error.message}</h3>}
        <header className="login_header">
          <img src={logo} alt="Bobur logo" width={58} height={58} />
          <strong>BoburBlog</strong>
        </header>
        <div className="form">
          <h3>
            Sahifamga xush kelibsiz! Pulli kontentni o’qish uchun tizimga kiring.
          </h3>
          <form>
            <span>Login</span>
            <input
              type="email"
              placeholder="login"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
              required
            />
            <button
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login