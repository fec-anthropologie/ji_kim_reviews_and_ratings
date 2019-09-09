const Products = require('../database/index.js');

const getOne = (req, res) => {
  let { productId } = req.params;
  Products.find({product_id: productId.toString()})
    .then((data)=> {res.status(200).send(data)})
    .catch(err => console.log(`error: ${err}`))
}
module.exports = {
  getOne
};
// const { 
//   getReviews,
//   getAllReviews } = require('../database/dbhelpers.js');


// const controller = {
//   // get: (req, res) => {
//   //   const productId = req.data.config.params.productId;
//   //   getReviews(productId)
//   //     .then((data) => {
//   //       res.status(200).send(data);
//   //     })
//   //     .catch((err) => {console.log(err)})
//   // },
//   getAll: (req, res) => {
//     getAllReviews()
//       .then((data) => {
//         res.status(200).send(data);
//       })
//       .catch((err) => {console.log(err)})
//   }
// }
