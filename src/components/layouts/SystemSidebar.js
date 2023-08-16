import React, { useEffect } from 'react';

const SystemSidebar = ({ onMovimentacoesClick, onDashboardClick, onUsuariosClick, onEntidadesClick }) => {
  useEffect(() => {
    const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
    sideLinks.forEach(item => {
      const li = item.parentElement;
      item.addEventListener('click', () => {
        sideLinks.forEach(i => {
          i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
      });
    });


    const menuBar = document.querySelector('.content nav .bx.bx-menu');
    const sideBar = document.querySelector('.sidebar');
    menuBar.addEventListener('click', () => {
      if (sideBar.classList.contains('close')) {
        sideBar.classList.remove('close');
      } else {
        sideBar.classList.add('close');
      }
    });

    const searchBtn = document.querySelector('.content nav form .form-input button');
    const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
    const searchForm = document.querySelector('.content nav form');

    searchBtn.addEventListener('click', function (e) {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
          searchBtnIcon.classList.replace('bx-search', 'bx-x');
        } else {
          searchBtnIcon.classList.replace('bx-x', 'bx-search');
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) {
        sideBar.classList.add('close');
      } else {
        sideBar.classList.remove('close');
      }
      if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
      }
    });

    const toggler = document.getElementById('theme-toggle');

    toggler.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }, []);

  return (
    <div className="sidebar close">
      <a href="#" className="logo">
        <div className="logo-name">UTFpr</div>
      </a>
      <ul className="side-menu">
        <li onClick={onDashboardClick}>
          <a href="#"><i className="bx bxs-dashboard" title="Dashboard"></i>Dashboard</a>
        </li>
        <li onClick={onMovimentacoesClick}>
          <a href="#"><i className="bx bx-analyse" title='Movimentações'></i>Movimentações</a>
        </li>
        <li onClick={onEntidadesClick}><a href="#" title='Entidades'><i className="bx bxs-building-house"></i>Entidades</a></li>
        <li onClick={onUsuariosClick}><a href="#" title='Usuários'><i className="bx bx-group"></i>Usuários</a></li>
        <li><a href="#" title='Parâmetros'><i className="bx bx-cog"></i>Parâmetros</a></li>
      </ul>
      <ul className="side-menu">
        <li>
          <a title='Logout' href="#" className="logout">
            <i className="bx bx-log-out-circle"></i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SystemSidebar;
