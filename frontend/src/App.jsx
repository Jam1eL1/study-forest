<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../public/font/Pretendard-1.3.9/web/static/pretendard.css";
import Header from "./layout/Header";
import Home from "@home/Home";
import TodayFocus from "@today-focus/TodayFocus";
import TodayHabit from "@today-habit/TodayHabit";
import StudyDetail from "@study-detail/StudyDetail";
import StudyCreate from "@study-create/StudyCreate";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-create" element={<StudyCreate />} />
          <Route path="/study-detail/:id" element={<StudyDetail />} />
          <Route path="/today-focus" element={<TodayFocus />} />
          <Route path="/today-habit" element={<TodayHabit />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
=======
=======
>>>>>>> 1dc27b2 (feat: 스터디 업데이트 모듈 구현)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../public/font/Pretendard-1.3.9/web/static/pretendard.css';
import Header from './layout/Header';
import Home from '@home/Home';
import TodayFocus from '@today-focus/TodayFocus';
import TodayHabit from '@today-habit/TodayHabit';
import StudyDetail from '@study-detail/StudyDetail';
import StudyCreate from '@study-create/StudyCreate';
import StudyEditForm from '@study-detail/studyEditForm/StudyEditForm';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/study-create' element={<StudyCreate />} />
          <Route path='/study-detail/:id' element={<StudyDetail />} />
          <Route path='/today-focus' element={<TodayFocus />} />
          <Route path='/today-habit' element={<TodayHabit />} />
          <Route path='/study-edit-form' element={<StudyEditForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
<<<<<<< HEAD
>>>>>>> d706a09 (feat: 습관 create 생성제한x &habitCreateAPI)
=======
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import "../public/font/Pretendard-1.3.9/web/static/pretendard.css";
import Header from "./layout/Header";
import Home from "@home/Home";
import TodayFocus from "@today-focus/TodayFocus";
import TodayHabit from "@today-habit/TodayHabit";
import StudyDetail from "@study-detail/StudyDetail";
import StudyCreate from "@study-create/StudyCreate";
import EditStudyForm from "@study-detail/editStudyForm/EditStudyForm";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study-create" element={<StudyCreate />} />
          <Route path="/study-detail" element={<StudyDetail />} />
          <Route path="/today-focus" element={<TodayFocus />} />
          <Route path="/today-habit" element={<TodayHabit />} />
          <Route path="/edit-study-form" element={<EditStudyForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
>>>>>>> 83b45e2 (feat: 스터디 업데이트 모듈 구현)
>>>>>>> 1dc27b2 (feat: 스터디 업데이트 모듈 구현)
