// src/services/memoService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/memos";

export const getMemos = () => axios.get(API_URL);
export const createMemo = (memo) => axios.post(API_URL, memo);
export const updateMemo = (id, memo) => axios.put(`${API_URL}/${id}`, memo);
export const deleteMemo = (id) => axios.delete(`${API_URL}/${id}`);
