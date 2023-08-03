import React from 'react';

const SystemNavbar = () => {
  return (
    <nav>
      <i className='bx bx-menu' style={{ marginLeft: '10px' }}></i>
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Pesquisar..." />
          <button className="search-btn" type="submit">
            <i className='bx bx-search'></i>
          </button>
        </div>
      </form>
      <input type="checkbox" id="theme-toggle" hidden />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>
      <a href="#" className="notif">
        <i className='bx bx-bell'></i>
        <span className="count">2</span>
      </a>
    </nav>
  );
};

export default SystemNavbar;
