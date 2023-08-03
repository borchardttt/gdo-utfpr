import React from 'react';
import logoMillpar from './logoMillpar.png';

const LoginBox = () => {
  return (
    <div className="login-box">
      <img src={logoMillpar} alt="Login" style={{ width: '100%', marginBottom: '20px' }} />
      <form>
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta? <a href="#">Abra uma solicitação</a>
      </p>
    </div>
  );
};

export default LoginBox;
