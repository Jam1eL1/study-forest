import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodayFocus.module.css";

const TodayFocus = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [countDown, setCountDown] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [complete, setComplete] = useState(false);
  const [tempTime, setTempTime] = useState({ min: "00", sec: "00" });

  /**
   * const [point, setPoint] = 3 + 10분당 1 point
   * 예상 수식 : (3 + tempTime.min / 10)
   *
   * 해당 내용을 데이터 베이스에 저장하는 것만 백엔드네? 워매..
   */

  const handleTimerDefault = (e) => {
    if (e.target.value.length >= 2) return;
    if (e.target.id === "minute" && (!minute || minute === "0")) {
      setMinute("00");
      setTempTime({ ...tempTime, min: "00" });
    } else if (!second || second === "0") {
      setSecond("00");
      setTempTime({ ...tempTime, sec: "00" });
    } else if (e.target.id === "minute" && Number(e.target.value) <= 10) {
      setMinute("0" + e.target.value);
      setTempTime({ ...tempTime, min: "0" + e.target.value });
    } else {
      setSecond("0" + e.target.value);
      setTempTime({ ...tempTime, sec: "0" + e.target.value });
    }
  };

  const handleTimerValue = (e) => {
    if (e.target.value.length >= 3) return;
    if (e.target.id === "minute") {
      setMinute(e.target.value);
      setTempTime({ ...tempTime, min: e.target.value });
    } else {
      setSecond(e.target.value);
      setTempTime({ ...tempTime, sec: e.target.value });
    }
  };

  const handleClickStart = () => {
    if (start) return;
    setStart(!start);
  };

  useEffect(() => {
    if (!start) return;

    // 초 변경
    const secTimer = setInterval(() => {
      console.log("초 시작");
      setSecond((prevSecond) => {
        if (prevSecond === "00") {
          setCountDown(false);
          return (prevSecond = 59);
        } else if (prevSecond <= 10) {
          return "0" + (prevSecond - 1);
        }
        return prevSecond - 1;
      });
    }, 1000);

    // 타이머 해제
    return () => {
      clearInterval(secTimer);
      console.log("타이머 해제");
    };
  }, [start, minute]);

  useEffect(() => {
    if (!start) return;
    // 카운트 다운 색상 효과
    if (minute === "00" && second <= 10) {
      setCountDown(true);
    }

    // 분 변경
    if (second === 59) {
      if (minute === "00") return;
      setMinute((prevMinute) => {
        if (prevMinute <= 10) {
          return "0" + (prevMinute - 1);
        }
        prevMinute - 1;
      });
    }
  }, [start, second]);

  const handleClickPause = () => {
    if (pause) return;
    setPause(!pause);
    setStart(!start);
  };

  useEffect(() => {
    const toastOff = setTimeout(() => {
      if (!pause) return;
      setPause(!pause);
    }, 2000);

    return () => clearTimeout(toastOff);
  }, [pause]);

  const handleClickReset = () => {
    setStart(!start);
    setCountDown(false);
    setMinute(tempTime.min);
    setSecond(tempTime.sec);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <nav className={styles.navBar}>
            <h1 className={styles.navTxt}>연우의 개발공장</h1>
            <div className={styles.navBtnContainer}>
              <Link to="/study-create" className={styles.navBtn}>
                오늘의 습관
                <img
                  src="/images/icon/ic_arrow_right.svg"
                  alt="오른쪽 화살표"
                />
              </Link>
              <Link to="/" className={styles.navBtn}>
                <p>홈</p>
                <img
                  src="/images/icon/ic_arrow_right.svg"
                  alt="오른쪽 화살표"
                />
              </Link>
            </div>
          </nav>
          <div className={styles.pointContainer}>
            <p className={styles.pointTxt}>현재까지 획득한 포인트</p>
            <div className={styles.point}>
              <img src="/images/icon/ic_point.svg" alt="포인트" />
              <p className={styles.pointTotalTxt}>{totalPoint}P 획득</p>
            </div>
          </div>
          <div className={styles.focusContainer}>
            <div className={styles.focus}>
              <h2 className={styles.focusTxt}>오늘의 집중</h2>
              {start ? (
                <div className={styles.focusSelectTimeContainer}>
                  <img src="/public/images/icon/ic_timer.svg" alt="시계" />
                  <p>{tempTime.min + ":" + tempTime.sec}</p>
                </div>
              ) : null}
              <div className={styles.focusTimerContainer}>
                {timeOver ? <p>-</p> : null}
                <input
                  onBlur={handleTimerDefault}
                  onChange={handleTimerValue}
                  value={minute}
                  className={`${styles.focusMinTimer} ${
                    countDown ? styles.countDown : null
                  }`}
                  id="minute"
                />
                <p className={countDown ? styles.countDown : null}>:</p>
                <input
                  onBlur={handleTimerDefault}
                  onChange={handleTimerValue}
                  value={second}
                  className={`${styles.focusSecTimer} ${
                    countDown ? styles.countDown : null
                  }`}
                  id="second"
                />
              </div>
              <div className={styles.focusBtnContainer}>
                {start ? (
                  <buttons
                    onClick={handleClickPause}
                    className={styles.focusPauseBtn}
                  >
                    <img src="/images/icon/ic_pause.svg" alt="일시정지" />
                  </buttons>
                ) : null}
                <button
                  onClick={handleClickStart}
                  className={`${styles.focusStartBtn} ${
                    start ? styles.disable : null
                  }`}
                >
                  <img
                    src={
                      timeOver
                        ? "/images/icon/ic_stop.svg"
                        : "/images/icon/ic_play.svg"
                    }
                    alt="시작"
                  />
                  <p>{timeOver ? "Stop!" : "Start!"}</p>
                </button>
                {start ? (
                  <button
                    onClick={handleClickReset}
                    className={styles.focusResetBtn}
                  >
                    <img src="/images/icon/ic_restart.svg" alt="초기화" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.toastContainer}>
          {pause ? (
            <p className={styles.toastWarning}>🚨 집중이 중단되었습니다.</p>
          ) : null}
          {/* 숫자로 들어간 부분 동적으로 변경 */}
          {complete ? (
            <p className={styles.toastPoint}>
              🎉 {point}포인트를 획득했습니다!
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TodayFocus;
