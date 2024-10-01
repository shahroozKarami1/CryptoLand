import axios from 'axios';

// تنظیم پایه‌ای axios (Base URL)
const API_BASE_URL = 'http://localhost:5000'; // آدرس سرور json-server یا هر API

// تابعی برای ارسال درخواست GET
export const getData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};

// // تابعی برای ارسال درخواست POST
// export const postData = async (endpoint: string, data: any) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
//     return response.data;
//   } catch (error) {
//     console.error('Error posting data', error);
//     throw error;
//   }
// };
