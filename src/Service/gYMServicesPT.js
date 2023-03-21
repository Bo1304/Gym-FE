import axios from 'axios';
import { API_URL } from '../Service/configPT';

export const getListPT = async () => {
  const response = await axios.get(`${API_URL}/pts`);
  return response;
};

export const deletePT = async (id) => {
  const response = await axios.delete(`${API_URL}/pt/${id}`);
  return response;
};
