// src/api/axiosInstance.js
import axios from 'axios';

console.log('[VITE_API_URL]', import.meta.env.VITE_API_URL); // ✅ 콘솔 확인용
console.log('[MODE]', import.meta.env.MODE); // ✅ 현재 모드 확인용

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true, 현재 캐쉬와 쿠키를 사용할껀지 묻는 속성 그러나 사용시 서버쪽에서 CORS 설정시 전체 허용이 불가능!!!
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
