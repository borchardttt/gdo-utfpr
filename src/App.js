import React, { useState } from 'react';
import './assets/css/App.css'; 
import Sidebar from "./components/layouts/SystemSidebar";
import Navbar from "./components/layouts/SystemNavbar";
import AnalisesEntidade from "./components/entidades/AnalisesEntidades";
import MovimentacoesRecentes from "./components/movimentacoes/MovimentacoesRecentes";
import ListaLembretes from "./components/lembretes/ListaLembretes";
import ListaMovimentacoes from "./components/movimentacoes/ListaMovimentacoes";
import ListaEntidades from './components/entidades/ListaEntidades';
import ListaUsuarios from './components/usuarios/ListaUsuarios';

const App = () => {
  const [showListaMovimentacoes, setShowListaMovimentacoes] = useState(false);
  const [showDashboard, setShowDashboard] = useState(true);
  const [showListaEntidades, setShowListaEntidades] = useState(false); 
  const [showListaUsuarios, setShowListaUsuarios] = useState(false); 

  const onMovimentacoesClick = () => {
    setShowDashboard(false);
    setShowListaMovimentacoes(true);
    setShowListaEntidades(false); 
    setShowListaUsuarios(false);

  };

  const onUsuariosClick = () => {
    setShowDashboard(false);
    setShowListaEntidades(false);
    setShowListaMovimentacoes(false);
    setShowListaUsuarios(true);
  }

  const onEntidadesClick = () => {
    setShowDashboard(false);
    setShowListaMovimentacoes(false); 
    setShowListaEntidades(true); 
    setShowListaUsuarios(false);

  };

  const onDashboardClick = () => {
    setShowDashboard(true);
    setShowListaMovimentacoes(false);
    setShowListaEntidades(false); 
    setShowListaUsuarios(false);

  };

  return (
    <div className="app">
      <Sidebar
        onMovimentacoesClick={onMovimentacoesClick}
        onDashboardClick={onDashboardClick}
        onEntidadesClick={onEntidadesClick}
        onUsuariosClick={onUsuariosClick}
      />
      <div className="content">
        <Navbar />
        <transition name="fade">
          {showDashboard && (
            <main>
              <div className="header">
                <div className="left">
                  <h1>Movimentação Orçamentária</h1>
                  <br />
                  <h2>Bem vindo novamente, Usuário!</h2>
                  <ul className="breadcrumb">
                    <li><a href="#">Análise</a></li>
                    <li>/</li>
                    <li><a href="#" className="active">Entidade (Nome da Entidade)</a></li>
                  </ul>
                </div>
                <a href="#" className="report">
                  <i className='bx bx-plus'></i>
                  <span>Realizar Movimentação</span>
                </a>
              </div>
              <AnalisesEntidade />
              <div className="bottom-data">
                <MovimentacoesRecentes />
                <ListaLembretes />
              </div>
            </main>
          )}
        </transition>
        <transition name="fade">
          {showListaMovimentacoes && <ListaMovimentacoes />}
          {showListaEntidades && <ListaEntidades />}
          {showListaUsuarios && <ListaUsuarios />}
        </transition>
      </div>
    </div>
  );
};

export default App;
