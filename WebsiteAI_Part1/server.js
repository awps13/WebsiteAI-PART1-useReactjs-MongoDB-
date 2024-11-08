const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost:27017/dashboardDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Connection error:', error));

// Model MongoDB (Contoh untuk tabel 'Orders')
const orderSchema = new mongoose.Schema({
    item: String,
    quantity: Number,
    price: Number,
    status: String
});

const Order = mongoose.model('Order', orderSchema);

// API Endpoint Contoh
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Mulai Server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
