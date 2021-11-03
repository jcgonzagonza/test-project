const AdviceSlipService = require('../services/adviceSlipService');
const { Advice } = require('../../model');

const createAdviceByQuery = async function (req, res) {
  let output;

  try {
    console.log('adviceSlipController', req.body);
    const advice = await AdviceSlipService.getSearchAdvice(req);

    output = advice;
  } catch (err) {
    output = err.response;
  }

  res.send(output);
};

const randomAdvice = async function (req, res) {
  let output;

  try {
    console.log('adviceSlipController', req.body);
    const advice = await AdviceSlipService.getRamdonAdvice(req);

    output = advice.slip.advice;
  } catch (err) {
    output = err.response;
  }

  res.send(output);
};

const select = async function (req, res) {
  let output;

  try {
    const advice = await Advice.query();
    console.log('advices: ', advice);
    output = advice;
  } catch (err) {
    output = err.response;
  }

  res.send(output);
};

module.exports = { createAdviceByQuery, randomAdvice, select };
