const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prueba123',
    password: 'root',
    port: 5432,    
});

app.get('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params; // Obtenemos el ID de la URL

        // 3. CONSULTA SQL A POSTGRES
        // $1 se sustituye por el id (evita inyección SQL)
        const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        // 4. DEVOLVER EL DATO AL FRONTEND (En formato JSON)
        res.json(result.rows[0]);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error en el servidor");
    }
});

// 5. ENCENDER EL SERVIDOR
app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});