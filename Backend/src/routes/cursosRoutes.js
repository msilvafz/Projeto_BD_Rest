const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.post('/', cursosController.createCursos);
router.post('/many', cursosController.createManyCursos);
router.get('/', cursosController.getAllCursos);
router.put('/:id', cursosController.updateCursos);
router.delete('/:id', cursosController.deleteCursos);


module.exports = router;