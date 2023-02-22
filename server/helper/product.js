const getAuthor = () => ({ name: "Marina", lastname: "Faenze" });

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const getCategories = (categories = []) => {
  if (categories.length) {
    if (categories[0].values.length) {
      return categories[0].values[0]?.path_from_root?.map(
        (category) => category.name
      );
    }
  }
  return categories;
};

const getProductDetailCategories = (categories = []) => {
  if (categories.length) {
    return categories.map((category) => category.name);
  }
  return categories;
};

const getItems = (items = []) => {
  return items.map((item) => ({
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: priceFormatter.format(item.price),
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item?.shipping?.free_shipping,
    address: item.address.state_name,
  }));
};

const getItem = (item, description) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    decimals: priceFormatter.format(item.price),
  },
  picture: item.pictures[0].url,
  condition: item.condition,
  free_shipping: item?.shipping?.free_shipping,
  sold_quantity: item.sold_quantity,
  description: description.plain_text,
});

const getProductsResponse = (data) => ({
  author: getAuthor(),
  categories: getCategories(data.filters),
  items: getItems(data.results),
});

const getProductByIdResponse = (item, description) => ({
  author: getAuthor(),
  item: getItem(item, description),
});

module.exports = {
  getProductsResponse,
  getProductByIdResponse,
  getProductDetailCategories,
};
