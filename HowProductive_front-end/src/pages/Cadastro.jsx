import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ email, password })
    );

    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="LoginContainer">
      <form className="LoginForm" onSubmit={handleRegister}>
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
          <label>Senha</label>
        </div>

        <div className="formItem">
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label>Confirmar senha</label>
        </div>

        <div className="formItem">
          <button type="submit">Cadastrar</button>
        </div>

        <div>
          <p>
            Já possui conta? <Link to="/login">Faça o login aqui</Link>
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

      <div className="CadastroImage"></div>
    </div>
  );
};