import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Nenhum usuário cadastrado.");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("userLogged", "true");
      navigate("/home");
    } else {
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="LoginContainer">
      <form className="LoginForm" onSubmit={handleLogin}>
        <h1>HowProductive</h1>

        <div className="formItem">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>

        <div className="formItem">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>

        <div className="formItem">
          <button type="submit">Entrar</button>
        </div>

        <div>
          <p>
            Não possui conta? <Link to="/">Cadastre-se aqui</Link>
          </p>
        </div>

        <div className="LogginGoogle">
          <span className="line"></span>
          <p>Ou</p>
          <span className="line"></span>
        </div>

        <div className="GoogleLogo">
          <FcGoogle />
        </div>
      </form>

      <div className="LoginImage"></div>
    </div>
  );
};