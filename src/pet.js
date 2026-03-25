//mock de dados de pets 

import express from 'express';
import petRoutes from './routes/petRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('uhhhhul');
});

app.use('/pets', petRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//BD > Services > Routes > pet.js