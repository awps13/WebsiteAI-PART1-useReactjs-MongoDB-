// src/components/PesananForm.js

import React, { useState } from "react";
import "../style/PesananForm.css";
import Sidebar from '../components/Sidebar'

function PesananForm() {
    const [pickupLocation, setPickupLocation] = useState("");
    const [destination, setDestination] = useState("");
    const [vehicleType, setVehicleType] = useState("mobil");
    const [pickupTime, setPickupTime] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            pickupLocation,
            destination,
            vehicleType,
            pickupTime,
            notes,
        });
    };

    return (
        <div className="main-content">
            <Sidebar/>
            <header>
                <h1>Form Pemesanan Pickup</h1>
            </header>

            <div className="form-container">
                <h3>Isi Data Pemesanan Anda</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="pickup-location">Lokasi Penjemputan</label>
                        <input
                            type="text"
                            id="pickup-location"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            placeholder="Masukkan lokasi penjemputan"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="destination">Lokasi Tujuan</label>
                        <input
                            type="text"
                            id="destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            placeholder="Masukkan lokasi tujuan"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="vehicle-type">Jenis Kendaraan</label>
                        <select
                            id="vehicle-type"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value="mobil">Mobil</option>
                            <option value="motor">Motor</option>
                            <option value="bus">Bus</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pickup-time">Waktu Penjemputan</label>
                        <input
                            type="datetime-local"
                            id="pickup-time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="notes">Catatan Tambahan</label>
                        <textarea
                            id="notes"
                            rows="4"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Tambahkan catatan jika ada"
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <button type="submit">Pesan Sekarang</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PesananForm;
