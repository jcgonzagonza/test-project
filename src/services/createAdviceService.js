const axios = require('axios');

const getAdvice = async function (req) {
  console.log('CreateAdviceService', req.body);
  // const url = 'https://api.adviceslip.com/advice/' + body.id;
  // const body = req.body;

  const response = await axios.get(
    'https://api.adviceslip.com/advice/' + req.body.id,
  );

  console.log('response:', response);

  return response.data;
};
module.exports = { getAdvice };
