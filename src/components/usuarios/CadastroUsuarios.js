import React, { useState } from 'react';

const CadastroUsuarios = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [entities, setEntities] = useState('');
  const [isManager, setIsManager] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEntitiesChange = (e) => {
    setEntities(e.target.value);
  };

  const handleIsManagerChange = (e) => {
    setIsManager(e.target.value === 'yes');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    }
    setFullName('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEntities('');
    setIsManager(false);
    setPasswordMatch(true);
  };

  return (
    <div className="registration-form">
      <h2>Cadastro de Usuários</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome Completo:</label>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <label>Nome de Usuário:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label>Senha:</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <label>Confirmar Senha:</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />

        {!passwordMatch && <p className="password-mismatch">As senhas não coincidem.</p>}

        <label>Entidades:</label>
        <select value={entities} onChange={handleEntitiesChange}>
          <option value="">Selecione uma entidade</option>
          <option value="TI">T.I</option>
          <option value="Almoxarifado">Almoxarifado</option>
        </select>

        <label>É Gestor da Entidade:</label>
        <select value={isManager ? 'yes' : 'no'} onChange={handleIsManagerChange}>
          <option value="no">Não</option>
          <option value="yes">Sim</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroUsuarios;
