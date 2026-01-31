import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  return (
    <div className="LoginContainer">
      <form className="LoginForm" action="">
        <h1>HowProductive</h1>
        <div className="formItem">
          <input type="text" name="login" id="login" required />
          <label htmlFor="login">Login</label>
        </div>

        <div className="formItem">
          <input type="password" name="password" id="password" required />
          <label htmlFor="password">Password</label>
        </div>

        <div className="formItem">
          <button>Entrar</button>
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
