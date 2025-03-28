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
