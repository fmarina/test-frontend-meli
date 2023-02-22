const axios = require("axios");
const {
  getProductsResponse,
  getProductByIdResponse,
  getProductDetailCategories,
} = require("../helper/product");
const API_URL = process.env.API_URL;

const PRODUCT_LIMIT = 4;

const getProducts = (req, res) => {
  const { search } = req.query;
  if (!search)
    res.status(400).send({
      error: "No se ha ingresado ningun criterio de busqueda",
    });

  const url = `${API_URL}/sites/MLA/search?q=${search}&limit=${PRODUCT_LIMIT}`;
  axios
    .get(url)
    .then(({ data }) => {
      res.json(getProductsResponse(data));
    })
    .catch((error) => res.status(400).send(error));
};

const getProductById = (req, res) => {
  const { id } = req.params;
  if (!id)
    res.status(400).send({
      error: "No se ha ingresado ningun Id del producto",
    });

  const url_product = `${API_URL}/items/${id}`;
  const url_product_description = `${url_product}/description`;

  const arrRequests = [
    axios.get(url_product),
    axios.get(url_product_description),
  ];

  axios
    .all(arrRequests)
    .then(
      axios.spread((item, description) => {
        const categoryId = item.data.category_id;
        const response = getProductByIdResponse(item.data, description.data);

        axios.get(`${API_URL}/categories/${categoryId}`).then(({ data }) => {
          response.categories = getProductDetailCategories(data.path_from_root);
          res.json(response);
        });
      })
    )
    .catch((error) => res.status(400).send(error));
};

module.exports = {
  getProducts,
  getProductById,
};
