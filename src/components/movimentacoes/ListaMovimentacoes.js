import React, { useState } from 'react';

const ListaMovimentacoes = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;

  const dados = [
    {
      id: 1,
      usuario: "Roni Fabio",
      data: "8/2023",
      contaContabil: "41110123",
      rubrica: "Consultoria de Sistemas",
      valor: "9.000",
      categoria: "Mover",
      status: "Aprovada",
      statusClass: "completed",
    },
  ];

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const itensAtuais = dados.slice(indicePrimeiroItem, indiceUltimoItem);

  const navegarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  return (
    <div className="styleMain" id="styleMain">
      <div className="orders">
        <div className="header">
          <h1 className="text-center">Movimentações de Orçamento</h1>
          <i className='bx bx-search'></i>
        </div>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr className="th">
                <th>Usuário</th>
                <th>Mês/Ano</th>
                <th>Conta Contábil</th>
                <th>Rubrica</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Status</th>
                <th>Aprovar</th>
              </tr>
            </thead>
            <tbody>
              {itensAtuais.map((item) => (
                <tr key={item.id}>
                  <td>
                    <p>{item.usuario}</p>
                  </td>
                  <td>{item.data}</td>
                  <td>{item.contaContabil}</td>
                  <td>{item.rubrica}</td>
                  <td>{item.valor}</td>
                  <td>{item.categoria}</td>
                  <td><span className={`status ${item.statusClass}`}>{item.status}</span></td>
                  <td>
                    {item.statusClass === "pending" && (
                      <button>
                        <i className='bx bx-check' style={{ color: '#ffffff' }}></i>
                      </button>
                    )}
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

export default ListaMovimentacoes;
