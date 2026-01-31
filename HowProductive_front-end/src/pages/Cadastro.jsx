import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";

export const Cadastro = () => {
  return (
    <div className="LoginContainer">
      <form className="LoginForm" action="">
        <h1>HowProductive</h1>

        <div className="formItem">
          <input type="text" name="name" id="name" required />
          <label htmlFor="name">Nome</label>
        </div>

        <div className="formItem">
          <input type="email" name="email" id="email" required />
          <label htmlFor="email">Email</label>
        </div>

        <div className="formItem">
          <input type="password" name="password" id="password" required />
          <label htmlFor="password">Senha</label>
        </div>

        <div className="formItem">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />
          <label htmlFor="confirmPassword">Confirmar senha</label>
        </div>

        <div className="formItem">
          <button>Cadastrar</button>
        </div>

        <div>
          <p>
            Já possui conta? <a href="/login">Faça o login aqui</a>
          </p>
        </div>

        <div className="LogginGoogle">
          <span className="line">.</span>
          <p>Ou</p>
          <span className="line">.</span>
        </div>

        <div className="GoogleLogo">
          <FcGoogle />
        </div>
      </form>

      <div className="LoginImage"></div>
    </div>
  );
};
