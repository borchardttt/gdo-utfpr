import React from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['T.I', 'Refeitório', 'Almoxarifado', 'Serviços Gerais', 'R.H '],
    datasets: [
      {
        label: 'Gastos',
        data: [47232, 32347, 25000, 2000, 15000],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(150, 212, 86, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='w-100'>
      <h2 className='text-center'>Dashboard de Gastos por Entidade</h2>
      <div style={{ width: '500px', height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
