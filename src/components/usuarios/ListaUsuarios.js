import React, { useState } from 'react';

const ListaUsuarios = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const dados = [
    {
      id: 1,
      nome: "Gabriel Borchardt",
      usuario: "gabrielb",
      email: "gabriel.borchardt@millpar.com",
      matricula: "14687",
    },
    {
      id: 2,
      nome: "Felipe Moura",
      usuario: "felipem",
      email: "felipe.moura@millpar.com",
      matricula: "13909"
    },
    {
      id: 3,
      nome: "Johan",
      usuario: "johan",
      email: "johansson.oliveira@millpar.com",
      matricula: "1234"
    },
    {
      id: 4,
      nome: "João Arthur",
      usuario: "joaoabm",
      email: "joao.moraes@millpar.com",
      matricula: "1234"
    },
    {
      id: 5,
      nome: "Aurélio Muller",
      usuario: "aurelio",
      email: "aurelio.muller@millpar.com",
      matricula: "1234"
    },    {
      id: 6,
      nome: "Gabriel Fiuza",
      usuario: "gabriel",
      email: "gabriel.fiuza@millpar.com",
      matricula: "1234"
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
                <th>Matricula</th>
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
                  <td>{item.matricula}</td>
                  <td>
										<button className="btn-millpar-primary">
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