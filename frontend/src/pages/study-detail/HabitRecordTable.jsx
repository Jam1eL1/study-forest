import React from "react";
import styles from "./HabitRecordTable.module.css";
import stickerWhite from "/images/stickers/sticker-white.svg";
import stickerBlue100 from "/images/stickers/sticker-blue-100.svg";
import stickerBlue200 from "/images/stickers/sticker-blue-200.svg";
import stickerBlue300 from "/images/stickers/sticker-blue-300.svg";
import stickerBlue400 from "/images/stickers/sticker-blue-400.svg";
import stickerBlue500 from "/images/stickers/sticker-blue-500.svg";
import stickerGreen100 from "/images/stickers/sticker-green-100.svg";
import stickerGreen200 from "/images/stickers/sticker-green-200.svg";
import stickerGreen300 from "/images/stickers/sticker-green-300.svg";
import stickerGreen400 from "/images/stickers/sticker-green-400.svg";
import stickerOrange100 from "/images/stickers/sticker-orange-100.svg";
import stickerOrange200 from "/images/stickers/sticker-orange-200.svg";
import stickerOrange300 from "/images/stickers/sticker-orange-300.svg";
import stickerPink100 from "/images/stickers/sticker-pink-100.svg";
import stickerPink200 from "/images/stickers/sticker-pink-200.svg";
import stickerPink300 from "/images/stickers/sticker-pink-300.svg";
import stickerPink400 from "/images/stickers/sticker-pink-400.svg";
import stickerPurple100 from "/images/stickers/sticker-purple-100.svg";
import stickerPurple200 from "/images/stickers/sticker-purple-200.svg";

function HabitRecordTable() {
  // Mock data - 나중에 DB 불러와서 수정
  const habits = [
    "미라클모닝 6시 기상",
    "30분 유산소",
    "5분 아침 명상",
    "건강하게 먹기",
    "1시간 수영",
    "찬물샤워",
    "코딩 8시간하기",
    "웨이트 트레이닝",
    "5키로 걷기",
    "스트레칭 20분 하기",
    "물 최소 5잔 마시기",
    "취침 1시간 전 스마트폰 사용하지말기",
    "눈에 휴식 취하기",
    "책 읽기",
    "습관 1",
    "습관 2",
    "습관 3",
    "습관 4",
    "습관 5",
  ];

  const days = ["월", "화", "수", "목", "금", "토", "일"];

  const stickerThemes = [
    [
      stickerBlue100,
      stickerBlue200,
      stickerBlue300,
      stickerBlue400,
      stickerBlue500,
    ],
    [stickerGreen100, stickerGreen200, stickerGreen300, stickerGreen400],
    [stickerOrange100, stickerOrange200, stickerOrange300],
    [stickerPink100, stickerPink200, stickerPink300, stickerPink400],
    [stickerPurple100, stickerPurple200],
    [stickerBlue300, stickerGreen300, stickerPink300],
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>습관 기록표</h1>

      <div className={styles.gridContainer}>
        {/* 요일 헤더 */}
        <div className={styles.headerRow}>
          <div className={styles.emptyHeaderCell}></div>
          <div className={styles.daysHeader}>
            {days.map((day, index) => (
              <div key={`day-${index}`} className={styles.dayCell}>
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* 습관 행열 모음 */}
        {habits.map((habit, rowIndex) => (
          <div key={`habit-${rowIndex}`} className={styles.habitRow}>
            <div className={styles.habitNameCell}>{habit}</div>
            <div className={styles.statusCells}>
              {days.map((_, dayIndex) => (
                <div
                  key={`status-${rowIndex}-${dayIndex}`}
                  className={styles.statusCell}
                >
                  <div className={styles.stickerWrapper}>
                    <img
                      src={stickerWhite}
                      alt="Sticker"
                      className={styles.sticker}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabitRecordTable;
