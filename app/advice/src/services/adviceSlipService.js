const axios = require('axios');

const getRamdonAdvice = async function (req) {
  console.log('AdviceSlipService', req.body);
  const url = 'https://api.adviceslip.com/advice';
  // const body = req.body;

  const response = await axios.get(url);

  console.log('response:', response);

  return response.data;
};

const getSearchAdvice = async function (req) {
  console.log('AdviceSlipService', req.body);
  const url = 'https://api.adviceslip.com/advice/search/' + req.body.keyword;
  // const body = req.body;

  const response = await axios.get(url);

  console.log('response:', response.data);

  return response.data;
};

const getAdviceById = async function (req) {
  console.log('AdviceSlipService', req.body);
  const url = 'https://api.adviceslip.com/advice';
  // const body = req.body;

  const response = await axios.get(url);

  console.log('response:', response);

  return response.data;
};

module.exports = { getRamdonAdvice, getSearchAdvice, getAdviceById };
