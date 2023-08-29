import React, { useState, useEffect } from 'react';
import CadastroUsuarios from './CadastroUsuarios';
import Modal from '../modal/Modal';
const ListaUsuarios = ({ setShowListaUsuarios }) => {
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 5;
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(response => response.json())
      .then(data => setDados(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const indiceUltimoItem = paginaAtual * itensPorPagina;
  const indicePrimeiroItem = indiceUltimoItem - itensPorPagina;
  const usuarios = dados.length > 0 ? dados.slice(indicePrimeiroItem, indiceUltimoItem) : [];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navegarPagina = (numeroPagina) => {
    setPaginaAtual(numeroPagina);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setShowListaUsuarios(true);
  };
  
  

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="styleMain" id="styleMain">
      <div className="orders">
        <div className="header">
          <h1 className="text-center">Usuários</h1>
          <i
            className='bx bx-plus'
            data-toggle="tooltip"
            data-placement="top"
            title="Adicionar Usuário"
            onClick={handleModalOpen}
          ></i>        </div>
        <div className='table-responsive'>
          <table>
            <thead>
              <tr className="th">
                <th>Nome</th>
                <th>Entidade</th>
                <th>Gestor de Entidade</th>
              </tr>
            </thead>
            <tbody>
              {dados.length > 0 ? (
                usuarios.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nome}</td>
                    <td>{item.entidade}</td>
                    <td>{item.gestor_entidade === 1 ? "Sim" : "Não"}</td>
                    <td>
                      <button className='btn-primary'>
                        <i className='bx bx-show' style={{ color: '#ffffff' }}></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr style={{ margin: '0 auto' }}>
                  <td colSpan="3" style={{ textAlign: 'center' }}>
                    <i className='bx bx-stats bx-spin'></i>
                  </td>
                </tr>
              )}
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
      {/* <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <CadastroUsuarios />
      </Modal> */}
    </div>
  );
};

export default ListaUsuarios;
