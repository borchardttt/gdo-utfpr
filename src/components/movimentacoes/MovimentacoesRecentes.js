import React from 'react';

const MovimentacoesRecentes = () => {
  return (
    <div className="orders">
      <div className="header">
        <i className='bx bx-receipt'></i>
        <h3>Movimentações Recentes</h3>
        <i className='bx bx-filter'></i>
        <i className='bx bx-search'></i>
      </div>
      <table>
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Data da Movimentação</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>Diego Marczal</p>
            </td>
            <td>14-08-2023</td>
            <td><span className="status completed">Aprovada</span></td>
          </tr>
          <tr>
            <td>
              <p>Sediane Carmen</p>
            </td>
            <td>14-08-2023</td>
            <td><span className="status pending">Pendente</span></td>
          </tr>
          <tr>
            <td>
              <p>Paulo Soares</p>
            </td>
            <td>14-08-2023</td>
            <td><span className="status process">Aguardando Aprovação</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovimentacoesRecentes;
