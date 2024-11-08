import React from 'react';
import '../style/Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
      <h2><a href="dashboard.html" style={{ textDecoration: 'none', color: 'white' }}>Dashboard Carteran</a></h2>
      <ul>
        <li><a href="/pages/dashboard.html">🏠 <span>Beranda</span></a></li>
        <li><a href="pesanan.html">📦 <span>Pesanan</span></a></li>
        <li><a href="kendaraan.html">🚗 <span>Kendaraan</span></a></li>
        <li><a href="pelanggan.html">👥 <span>Pelanggan</span></a></li>
        <li><a href="driver.html">👨‍✈️ <span>Driver</span></a></li>
        <li><a href="laporan.html">📊 <span>Laporan</span></a></li>
        <li><a href="pengaturan.html">⚙️ <span>Pengaturan</span></a></li>
        <li><a href="/pages/login.html">🚪 <span>Keluar</span></a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
