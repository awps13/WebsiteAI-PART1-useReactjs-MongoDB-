import React from 'react';
import Sidebar from '../components/Sidebar';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <header>
        <h1>Selamat Datang di Dashboard Carteran PickUp</h1>
      </header>
      
      <div className="content">
        <div className="card">
          <h3>Ringkasan Pesanan</h3>
          <div className="statistics">
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Total Pesanan</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18</div>
              <div className="stat-label">Selesai</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">7</div>
              <div className="stat-label">Proses</div>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default MainContent;
