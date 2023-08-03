import React from 'react';

const ListaLembretes = () => {
  const tasks = [
    { id: 1, title: "Bom dia Pessoal! Movimentar a entidade X até dia 31!", user: "Johan", completed: true },
    { id: 2, title: "Movimentação da entidade Y no mês 7 não realizada", user: "João Arthur", completed: false },
  ];
  return (
<div className="reminders">
  <div className="header">
    <i className='bx bx-note'></i>
    <h3>Lembretes</h3>
    <i className='bx bx-filter'></i>
    <i className='bx bx-plus'></i>
  </div>
  <ul className="task-list">
    {tasks.map(task => (
      <li key={task.id} className={task.completed ? 'completed' : 'not-completed'}>
        <div className="task-info">
          <div className="task-title">
            <i className={`bx ${task.completed ? 'bx-check-circle' : 'bx-x-circle'}`}></i>
            <p>"{task.title}"</p>
          </div>
          <br />
          <div className="author-info">
            <b>Autor: {task.user}</b>
          </div>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default ListaLembretes;
