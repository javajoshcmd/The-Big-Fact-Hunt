const fetch = require("node-fetch");

const getData = async () => {
  const url = `https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=multiple`;
  let data = await fetch(url);
  return await data.json();
};

module.exports = getData;
