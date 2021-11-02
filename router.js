import express from 'express';
const CreateAdviceController = require('./src/controllers/createAdviceController');

const router = express.Router();

console.log('route');

router.get('/', (req, res) => res.send('API IS UP!'));

// Get advice
router.get('/advice', CreateAdviceController.createAdvice);

export default router;
