import express from 'express';
import petServices from '../services/petServices.js';

const router = express.Router();

// GET /pets/ -> lista todos os pets

router.get('/', (req, res) => {
    try {
        const pets = petServices.getALL();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ error: 'erro ao buscar os pets' });
    }
});

// GET /pets/:id -> pega o pet pelo id

router.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);         
        const pet = petServices.getById(id);
        if (!pet) {
            return res.status(404).json({ error: 'pet não encontrado' });
        }
        res.json(pet);
    } catch (err) {
        res.status(500).json({ error: 'erro ao buscar o pet' });
    }
});

export default router;