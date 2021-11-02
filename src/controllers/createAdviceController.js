const CreateAdviceService = require('../services/createAdviceService');

const createAdvice = async function (req, res) {
  let output;

  try {
    console.log('CreateAdviceController', req.body);
    const advice = await CreateAdviceService.getAdvice(req);

    output = advice.slip.advice;
  } catch (err) {
    output = err.response;
  }

  res.send(output);
};

module.exports = { createAdvice };
