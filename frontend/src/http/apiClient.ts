import { SERVER_URL } from '../common/constants';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: `${SERVER_URL}/api`,
  withCredentials: true, // 쿠키사용
});
