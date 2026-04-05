import axios from "axios";

const API = axios.create({
  baseURL: "https://finance-backend-3jen.onrender.com/api/"
});

export default API;

// ✅ GET
export const getTransactions = () =>
  API.get("transactions/");

// ✅ POST
export const addTransaction = (data) =>
  API.post("transactions/", data);

// ✅ PUT
export const updateTransaction = (id, data) =>
  API.put(`transactions/${id}/`, data);

// ✅ DELETE
export const deleteTransaction = (id) =>
  API.delete(`transactions/${id}/`);