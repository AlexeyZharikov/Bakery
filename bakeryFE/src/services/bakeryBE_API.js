import axios from "axios";

// const getProducts = async () => {
//   return await axios.get('http://localhost:4050/products?id=');
// }
const getProducts = async () => {
  return await axios.get('https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products?id=');
}


const getProduct = async (id) => {
  return await axios.get(`https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products?id=${id}`);
}

const postProduct = async (product) => {
  return await axios.post('https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products', product);
}

const putProduct = async (product) => {
  return await axios.put(`https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products?id=${product._id}`, product);
}

const deleteProduct = async (id) => {
  return await axios.delete(`https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products?id=${id}`);
}


// =====================

const getOrders = async () => {
  return await axios.get('https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/orders/?id');
}

const createOrder = async (order) => {
  return await axios.post('https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/orders', order);
}


export { getProducts, getProduct, postProduct, putProduct, deleteProduct, getOrders, createOrder };