const Model = require("./model.js");

const get = (req, res) => {
  const urlTail = req.url
  Model.getProductData(urlTail)
  .then((success) => {
    // console.log('test 2', success.data)
    res.status(200).send(success.data)
  })
  .catch((error) => {
    // console.log('error test);
    res.status(500).send(error);
  })
}

const post = (req, res) => {
  console.log("posting");
  const urlTail = req.url
  // console.log(req.body);
  Model.postProductData(urlTail,req.body)
  .then((success) => {
    res.status(201).send(success.data)
  })
  .catch((error) => {
    console.log(error.message)
    res.status(500).send(error);
  })
}

const put = (req, res) => {
  console.log("putting");
  const urlTail = req.url
  // console.log(urlTail);
  Model.putProductData(urlTail)
  .then((success) => {
    console.log(success.status);
    res.status(204).send(success.data)
  })
  .catch((error) => {
    res.status(500).send(error.message);
  })
}

module.exports = {
  get,
  post,
  put,
}