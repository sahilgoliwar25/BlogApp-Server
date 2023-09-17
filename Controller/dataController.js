const dataCol = require("../Data/allData");
const data = (req, res) => {
  //logic
  res.send(dataCol);
};
module.exports = { data };
