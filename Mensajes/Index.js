const express = require('express');
const Message = require('./src/models/message');

const app = express();

const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.MONGO_URL;

//Conectar con MongoDB
mongoose.connect(uri).then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar:', err));

app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//Endpoint para crear un nuevo mensaje
app.post('/api/mensajes', async (req, res) => {
    try {
        const { content, author } = req.body;

        //Validación rápida
        if (!content || !author) {
            return res.status(400).json({ error: 'Se requiere content y author' });
        }

        const nuevoMensaje = new Message({ content, author });
        await nuevoMensaje.save();

        res.status(201).json({ mensaje: 'Mensaje guardado con éxito', data: nuevoMensaje });
    } catch (err) {
        console.error('Error al guardar el mensaje:', err);
        res.status(500).json({ error: 'Error al guardar el mensaje' });
    }
});


app.get('/api/mensajes', async (req, res) => {
    try {
        const mensajes = await Message.find();
        res.json(mensajes);
    } catch (err) {
        console.error('Error al obtener mensajes:', error);
        res.status(500).json({ error: 'Error al obtener mensajes' });
    }
});

app.get('/api/mensajes/autor/11sistemas', async (req, res) => {
    try {
        const { author } = req.params;
        const mensajes = await Message.find({ author });
        res.json(mensajes);
    } catch (err) {
        console.error('Error al obtener mensajes por autor:', err);
        res.status(500).json({ error: 'Error al obtener mensajes' });
    }
});

//Servidor escuchando
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor escuchando');
});

