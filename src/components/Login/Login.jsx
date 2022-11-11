import React, { useEffect, useState } from 'react'
import './Login.scss'
import logo from './../../assets/img/circle b.svg'
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

function Login() {
  const storage = window.localStorage;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setEmailPassword, error] = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailPassword(email, password);
  };

  useEffect(() => {
    const { token } = auth
    console.log(auth);
    storage.setItem("token", token);
    token && navigate('/tenetur')
    setEmail('')
    setPassword('')
  }, [auth, navigate, storage])

  return (
    <section className="site-login">
      <div className="container">
        <header className="login_header">
          <img src={logo} alt="Bobur logo" width={58} height={58} />
          <strong>BoburBlog</strong>
        </header>
        <div className="form">
          <h3>
            Sahifamga xush kelibsiz! Pulli kontentni o’qish uchun tizimga kiring.
          </h3>
          <form className={error.message && "err"}>
            <span>Login</span>
            {error.message && <h5 className={"err"}>Error: {error.message}</h5>}
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