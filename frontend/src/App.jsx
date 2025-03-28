import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Header from './layout/Header';
import Home from './pages/home/Home';
import CreateStudy from './pages/create-study/CreateStudy';
import TodayFocus from './pages/today-focus/TodayFocus';
import TodayHabit from './pages/today-habit/TodayHabit';
import StudyDetail from './pages/study-detail/StudyDetail';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-study' element={<CreateStudy />} />
          <Route path='/study-detail' element={<StudyDetail />} />
          <Route path='/today-focus' element={<TodayFocus />} />
          <Route path='/today-habit' element={<TodayHabit />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
