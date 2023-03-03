import axios from "axios";

const getProducts = async () => {
  return await axios.get('http://localhost:4050/products?id=');
}

const getProduct = async (id) => {
  return await axios.get(`http://localhost:4050/products?id=${id}`);
}

const postProduct = async (product) => {
  return await axios.post('http://localhost:4050/products', product);
}

const putProduct = async (product) => {
  return await axios.put(`http://localhost:4050/products?id=${product._id}`, product);
}

const deleteProduct = async (id) => {
  return await axios.delete(`http://localhost:4050/products?id=${id}`);
}


// =====================

const getOrders = async () => {
  return await axios.get('http://localhost:4050/orders/?id');
}

export { getProducts, getProduct, postProduct, putProduct, deleteProduct, getOrders };