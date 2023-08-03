import React from 'react';

const AnaliseEntidade = () => {
  return (
    <ul className="insights">
      <li>
        <i className='bx bx-calendar-check'></i>
        <span className="info">
          <h3>R$1,074</h3>
          <p>Usado em "MêsAtual"</p>
        </span>
      </li>
      <li>
        <i className='bx bx-show-alt'></i>
        <span className="info">
          <h3>3,944</h3>
          <p>Empenhado até Dezembro</p>
        </span>
      </li>
      <li>
        <i className='bx bx-line-chart'></i>
        <span className="info">
          <h3>R$14,721</h3>
          <p>Orçado para 2023</p>
        </span>
      </li>
      <li>
        <i className='bx bx-dollar-circle'></i>
        <span className="info">
          <h3>R$6,742</h3>
          <p>Saldo Restante</p>
        </span>
      </li>
    </ul>
  );
};

export default AnaliseEntidade;
