import React, { useState } from 'react';

const ListaEntidades = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const dados = [
    {
      id: 1,
      entidade: "530000 - Financeiro",
      centroDeCusto: "530001 - GERENCIA DE TI - SOFTWARE",
      gestor: "Roni Fabio",
    },
    {
      id: 2,
      entidade: "550000 - Tecnologia da Informação",
      centroDeCusto: "550004 - Tecnologia da Informação",
      gestor: "Diego Marczal",
    },
  ];

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const entidades = dados.slice(indicePrimeiroItem, indiceUltimoItem);
  const navegarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className="styleMain" id="styleMain">
      <div className="orders">
        <div className="header">
          <h1 className="text-center">Entidades</h1>
          <i className='bx bx-search'></i>
        </div>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr className="th">
                <th>Entidade</th>
                <th>Centro de Custo</th>
                <th>Gestor</th>
              </tr>
            </thead>
            <tbody>
              {entidades.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.entidade}
                  </td>
                  <td>{item.centroDeCusto}</td>
                  <td>{item.gestor}</td>
                  <td>
										<button className='btn-primary'>
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
export default ListaEntidades;