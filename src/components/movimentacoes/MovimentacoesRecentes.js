import React from 'react';

const MovimentacoesRecentes = () => {
  return (
    <div className="orders">
      <div className="header">
        <i className='bx bx-receipt'></i>
        <h3 className='text-center'>Movimentações Recentes</h3>

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
            <td><span className="status process">Aprovação Pendente</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MovimentacoesRecentes;
