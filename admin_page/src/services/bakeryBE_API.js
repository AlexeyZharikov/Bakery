import axios from "axios";

// const postProduct = async (product) => {
//   return await axios.post('http://localhost:4050/products', product);
// }
// const getProducts = async () => {
//   return await axios.get('http://localhost:4050/products?id=');
// }
// const getProduct = async (id) => {
//   return await axios.get(`http://localhost:4050/products?id=${id}`);
// }
// const deleteProduct = async (id) => {
//   return await axios.delete(`http://localhost:4050/products?id=${id}`);
// }
// const putProduct = async (product) => {
//   return await axios.put(`http://localhost:4050/products?id=${product._id}`, product);
// }
// const getOrders = async () => {
//   return await axios.get('http://localhost:4050/orders/?id');
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

const deleteOrder = async (id) => {
  return await axios.delete(`https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/orders?id=${id}`);
}

export { getProducts, getProduct, postProduct, putProduct, deleteProduct, getOrders, deleteOrder };