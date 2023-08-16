import React, { useState } from 'react';
import logoUTFPR from './utfpr.png';

const LoginBox = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-box">
      <img src={logoUTFPR} alt="Login" style={{ width: '100%', marginBottom: '20px' }} />
      <form>
        <label htmlFor="username">Usuario</label>
        <input type="text" id="username" />

        <label htmlFor="password">Senha</label>
        <div className="password-input">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
          />
          <div className="eye-icon" onClick={handleTogglePassword}>
            {showPassword ? (
              <i className="bx bx-show"></i>
            ) : (
              <i className="bx bx-hide"></i>
            )}
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Não tem uma conta? <a target="_blank" href="" rel="noreferrer">Abra uma solicitação</a>
      </p>
    </div>
  );
};

export default LoginBox;
