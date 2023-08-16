import React, { useState } from 'react';

const ListaUsuarios = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const dados = [
    {
      id: 1,
      nome: "Gabriel Borchardt",
      usuario: "gabrielb",
      email: "gabriel.borchardt@utfpr.com"
    },
    {
      id: 2,
      nome: "Roni FABIO",
      usuario: "ronif",
      email: "roni.fabio@utfpr.com"
    },
  ];

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const usuarios = dados.slice(indicePrimeiroItem, indiceUltimoItem);

  const navegarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className="styleMain" id="styleMain">
      <div className="orders">
        <div className="header">
          <h1 className="text-center">Usuários</h1>
          <i className='bx bx-search'></i>
        </div>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr className="th">
                <th>Nome</th>
                <th>Usuário</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.nome}
                  </td>
                  <td>{item.usuario}</td>
                  <td>{item.email}</td>
                  <td>
										<button>
											<i className='bx bx-show' style={{ color: '#ffffff' }}></i>
										</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(dados.length / itensPorPagina) }).map((_, index) => (
          <button
            key={index + 1}
            className={index + 1 === paginaAtual ? "active" : ""}
            onClick={() => navegarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
export default ListaUsuarios;