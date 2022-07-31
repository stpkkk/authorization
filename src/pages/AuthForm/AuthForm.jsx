import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./AuthForm.module.scss";
import AuthContext from "../../context/AuthContext";

const AuthForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  //   const [error, setError] = useState("");

  const { isAuth, setIsAuth } = useContext(AuthContext);
  const authHandler = () => {
    if (login && password) {
      if (login !== "admin") {
        return alert("Не верный логин");
      }
      if (password !== "qwerty") {
        return alert("Не верный пароль");
      }
      alert("Вы авторизовались");
      setIsAuth(true);
      console.log(isAuth);
    } else {
      alert("Заполните все поля!");
    }
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <div>
          <p>login</p>
          <input
            type="text"
            placeholder=""
            maxLength="25"
            onChange={(event) => setLogin(event.target.value)}
            value={login}
          />
        </div>
        <div>
          <p>password</p>
          <input
            type="password"
            placeholder=""
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div>
          <button onClick={authHandler}>Log In</button>
        </div>
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </div>
    </>
  );
};

export default AuthForm;
