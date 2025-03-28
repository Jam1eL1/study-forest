import React, { useState } from "react";
import styles from "./TodayHabitCreate.module.css";
import trashIcon from "../../public/images/icon/ic_trash.svg";
import plusIcon from "../../public/images/icon/ic_plus.svg";

const TodayHabitCreate = ({ onClose }) => {
  //habits 설정
  const [habits, setHabits] = useState([
    "미라클모닝 6시 기상",
    "새벽 운동",
    "저녁 운동",
    "저녁 운동",
    "저녁 운동",
    "저녁 운동",
    "저녁 운동",
  ]);
  const handleInputChange = (index, updatingHabit) => {
    const updatedHabits = habits.map((habit, idx) =>
      idx === index ? updatingHabit : habit
    );
    setHabits(updatedHabits);
  };

  //습관 추가
  const handleAddHabit = () => {
    setHabits([...habits, "                   "]); // 추가
  };
  //습관 삭제 habits 필터링
  const handleDeleteHabit = (index) => {
    const updatedHabits = habits.filter((_, idx) => idx !== index);
    setHabits(updatedHabits);
  };

  return (
    <div className={styles.habitCreateModal}>
      <p className={styles.headline}>습관 목록</p>
      <div className={styles.wholeHabitsBox}>
        {habits.map((habit, index) => (
          <div className={styles.singleHabitBoxWithTrashIc} key={index}>
            <div className={styles.singleHabitBox}>
              <input
                type="text"
                className={styles.singleHabit}
                value={habit}
                onClick={() => {
                  if (habit === "                   ") {
                    handleInputChange(index, "");
                  }
                }}
                onChange={(e) => handleInputChange(index, e.target.value)} //map에서 주는 index
                size={habit.length || 10}
              />
            </div>
            <img
              src={trashIcon}
              className={styles.trashIcon}
              onClick={() => handleDeleteHabit(index)}
              alt="삭제 아이콘"
            />
          </div>
        ))}
        <div className={styles.createBox} onClick={handleAddHabit}>
          <img src={plusIcon} alt="추가 아이콘" />
        </div>
      </div>
      <div className={styles.btns}>
        <button className={styles.close} onClick={onClose}>
          취소
        </button>
        <button className={styles.confirmRevision}>수정 완료</button>
      </div>
    </div>
  );
};

export default TodayHabitCreate;
