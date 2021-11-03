import express from 'express';
const AdviceSlipController = require('./app/advice/src/controllers/adviceSlipController');
const knex = require('./db/knex');

const router = express.Router();

console.log('route');

router.get('/', (req, res) => res.send('API IS UP!'));

// Get advice
router.get('/advice', AdviceSlipController.randomAdvice);

// Query advice
router.post('/query', AdviceSlipController.createAdviceByQuery);

router.get('/get', (req, res, next) => {
  knex('advices')
    .select()
    .then((results) => {
      res.status(200).json({
        status: 'success',
        data: results,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

router.post('/create', (req, res, next) => {
  knex('advices')
    .insert(req.body)
    .then((results) => {
      res.status(200).json({
        status: 'success',
        message: 'Registrado correctamente',
      });
    })
    .catch((err) => {
      return next(err);
    });
});

//router.get('/select', CreateAdviceController.select);

export default router;
