import React, { useState, useEffect } from 'react';

const AnaliseEntidade = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orcamentos_entidade')
      .then(response => response.json())
      .then(data => setDados(data))
      .catch(error => console.error('Error fetching orçamentos:', error));
  }, []);

  const orcamentoEntidade = dados[0] || {};
  const valorUsado = parseInt(orcamentoEntidade.dinheiro_gasto) || 0;
  const valorOrcamento = parseInt(orcamentoEntidade.orcamento) || 0;
  const saldoRestante = valorOrcamento - valorUsado;

  return (
    <ul className="insights">
      <li>
        <i className='bx bx-line-chart'></i>
        <span className="info" id='valorOrcamento'>
          <h3>{`R$${valorOrcamento.toLocaleString('pt-BR')}`}</h3>
          <p>Orçado para 2023</p>
        </span>
      </li>
      <li>
        <i className='bx bx-calendar-check'></i>
        <span className="info" id='usadoOrcamento'>
          <h3>{`R$${valorUsado.toLocaleString('pt-BR')}`}</h3>
          <p>Utilizado do Orçamento</p>
        </span>
      </li>
      <li>
        <i className='bx bx-dollar-circle'></i>
        <span className="info" id='saltoRestante'>
          <h3>{`R$${saldoRestante.toLocaleString('pt-BR')}`}</h3>
          <p>Saldo Restante</p>
        </span>
      </li>
    </ul>
  );
};

export default AnaliseEntidade;
