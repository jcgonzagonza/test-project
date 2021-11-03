const { insertAdvice } = require('./model');
const CreateAdviceService = require('./src/services/adviceSlipService');

const createAdvice = async function (req, res) {
  let output;

  try {
    const advice = await CreateAdviceService.getAdvice(req);

    //    const body = advice.slip.advice;

    //    const idea = await insertAdvice(advice.slip.advice);

    output = advice.slip.advice;

    //    const createRow = await Insert
  } catch (err) {
    output = err.response;
  }

  res.send(output);
};

module.exports = { createAdvice };
