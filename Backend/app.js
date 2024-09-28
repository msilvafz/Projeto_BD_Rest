const express = require('express');
const dotenv = require('dotenv');
const cursosRoutes = require('./src/routes/cursosRoutes');
const userRoutes = require('./src/routes/userRoutes');
require('./src/config/database');
dotenv.config();
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/user', userRoutes);
app.use('/cursos', cursosRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});