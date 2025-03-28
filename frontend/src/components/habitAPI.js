<<<<<<< HEAD
<<<<<<< Updated upstream
=======
>>>>>>> ad86d1b (feat: 습관 create 생성제한x &habitCreateAPI)
import axios from "axios";
import SERVER_URL from "../server.js";

const instance = axios.create({
  // baseURL: `${SERVER_URL}/api/habits`, //백엔드 배포 시 사용
  baseURL: `http://localhost:5090/api/habits/`,
});

const handleError = (e) => {
  if (e.response) {
    console.error(`${e.response.status}: ${e.response.statusText}`);
  } else {
    console.error("Request failed");
  }
};

export const getHabits = async (studyId) => {
  try {
    const res = await instance.get(`/gethabit/${studyId}`);
    return res.data;
  } catch (e) {
    handleError(e);
  }
};

export const patchHabits = async (habitId, data) => {
  try {
    const res = await instance.patch(`/patchhabit/${habitId}`, data);
    return res.data;
  } catch (e) {
    handleError(e);
  }
};
<<<<<<< HEAD
=======
import axios from "axios";
import SERVER_URL from "../server.js";

const instance = axios.create({
  // baseURL: `${SERVER_URL}/api/habits`, //백엔드 배포 시 사용
  baseURL: `http://localhost:5090/api/habits/`,
});

const handleError = (e) => {
  if (e.response) {
    console.error(`${e.response.status}: ${e.response.statusText}`);
  } else {
    console.error("Request failed");
  }
};

export const getHabits = async (studyId) => {
  try {
    const res = await instance.get(`/gethabit/${studyId}`);
    return res.data;
  } catch (e) {
    handleError(e);
  }
};

export const patchHabits = async (habitId, data) => {
  try {
    const res = await instance.patch(`/patchhabit/${habitId}`, data);
    return res.data;
  } catch (e) {
    handleError(e);
  }
};
>>>>>>> Stashed changes
=======
>>>>>>> ad86d1b (feat: 습관 create 생성제한x &habitCreateAPI)
