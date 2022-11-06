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

  const [auth, setEmailPassword] = useLogin();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    state: false,
    msg: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmailPassword(email, password);
    setLoading(true);
  };

  useEffect(() => {
    const { status, message, token } = auth;

    if (status === 200) {
      setLoading(false);

      if (error.state) {
        setError({
          state: false,
          msg: "",
        });
      }

      storage.setItem("token", token);
      navigate("/profile");
    }

    if (status === 404) {
      setLoading(false);
      setError({
        state: true,
        msg: message,
      });
      console.log('staus');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <section className="site-login">
      <div className="container">
        {loading && <h3>Loading...</h3>}
        {error.state && <h3 className={"err"}>Error: {error.msg}</h3>}
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
              // value={"eve.holt@reqres.in"}
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              // value={"cityslicka"}
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