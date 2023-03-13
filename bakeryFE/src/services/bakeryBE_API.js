import axios from "axios";

// const getProducts = async () => {
//   return await axios.get('http://localhost:4050/products?id=');
// }
// const getProduct = async (id) => {
//   return await axios.get(`http://localhost:4050/products?id=${id}`);
// }

// =====================


// const createOrder = async (order) => {
//   return await axios.post('http://localhost:4050/orders', order);
// }


const getProducts = async () => {
  return await axios.get('https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products?id=');
}

const getProduct = async (id) => {
  return await axios.get(`https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/products?id=${id}`);
}

// // =====================

const createOrder = async (order) => {
  return await axios.post('https://bakerybe-00001-luc-4jln4ogn4q-uc.a.run.app/orders', order);
}


export { getProducts, getProduct, createOrder };