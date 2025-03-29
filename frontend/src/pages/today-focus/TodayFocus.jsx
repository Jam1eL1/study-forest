import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodayFocus.module.css";

const TodayFocus = () => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [tempTime, setTempTime] = useState({ min: "00", sec: "00" });
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [countDown, setCountDown] = useState(false);
  const [timeover, setTimeover] = useState(false);
  const [point, setPoint] = useState(0);
  const [complete, setComplete] = useState(false);
  const [btnToggle, setBtnToggle] = useState(false);
  const [selectTimeToggle, setSelectTimeToggle] = useState(false);

  // 컴포넌트 화 시키기

  // 타이머 디폴트 값
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

  // 타이머 시간 설정
  const handleTimerValue = (e) => {
    if (e.target.value.length >= 3) return;
    if (e.target.id === "minute") {
      setMinute(e.target.value);
      setTempTime({ ...tempTime, min: e.target.value });
      if (e.target.value < 10) {
        setPoint(0);
      } else {
        setPoint(
          e.target.value <= 19 ? 3 : 3 + Math.floor((e.target.value - 10) / 10)
        );
      }
    } else {
      setSecond(e.target.value);
      setTempTime({ ...tempTime, sec: e.target.value });
    }
  };

  // 시작 버튼
  const handleClickStart = () => {
    if (start) {
      setStart(!start);
      setSelectTimeToggle(!selectTimeToggle);
      setCountDown(false);
      setTimeover(!timeover);
      setMinute(tempTime.min);
      setSecond(tempTime.sec);
      return;
    }
    setStart(!start);
    setBtnToggle(!btnToggle);
    setSelectTimeToggle(true);
  };

  // 초(sec) 변경
  useEffect(() => {
    if (!start) return;

    const secTimer = setInterval(() => {
      setSecond((prevSecond) => {
        if (minute === "00" && prevSecond === "00") {
          return (prevSecond = "01");
        } else if (timeover) {
          if (prevSecond < 9)
            return (prevSecond = "0" + (Number(prevSecond[1]) + 1));
          if (prevSecond <= 9) return (prevSecond = 10);
          if (prevSecond < 59) return prevSecond + 1;
          return (prevSecond = "00");
        } else if (prevSecond === "00") {
          setCountDown(false);
          return (prevSecond = 59);
        } else if (prevSecond <= 10) {
          return "0" + (prevSecond - 1);
        } else {
          return prevSecond - 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(secTimer);
    };
  }, [start, minute, timeover]);

  // 분(min) 변경, 10초 카운트다운 & 타임오버 색상 효과
  useEffect(() => {
    if (!start) return;

    // 분(min) 변경
    if (second === 59) {
      if (timeover) return;
      setMinute((prevMinute) => {
        if (prevMinute <= 10) {
          return "0" + (prevMinute - 1);
        }
        return prevMinute - 1;
      });
    }

    if (second === "00") {
      console.log(1);
      if (timeover) {
        console.log(2);
        setMinute((prevMinute) => {
          console.log(prevMinute);
          console.log(3);
          if (prevMinute < 9)
            return (prevMinute = "0" + (Number(prevMinute[1]) + 1));
          console.log(4);
          if (prevMinute <= 9) return (prevMinute = 10);
          console.log(5);
          if (prevMinute >= 10) return prevMinute + 1;
          console.log(6);
        });
      }
    }

    // 색상 효과
    if (minute === "00" && second === "00") {
      setCountDown(false);
    } else if (minute === "00" && second <= 10) {
      setCountDown(true);
    }

    // 타임오버 효과
    const minus = setTimeout(() => {
      if (timeover) return;
      if (minute !== "00" || second !== "00") {
        return;
      } else {
        setTimeover(!timeover);
        setBtnToggle(!btnToggle);
        setComplete(!complete);
        setTotalPoint((prevTotalPoint) => (prevTotalPoint += point));
      }
    }, 1000);

    // 타임오버 해제
    return () => {
      if (!timeover) return;
      if (minute !== "00" || second !== "00") return;
      clearTimeout(minus);
    };
  }, [start, second]);

  // 일시 정지 버튼
  const handleClickPause = () => {
    if (pause) return;
    setPause(!pause);
    setStart(!start);
    setCountDown(false);
    setBtnToggle(!btnToggle);
  };

  // toast 팝업 자동종료
  useEffect(() => {
    const toastOff = setTimeout(() => {
      if (!pause) {
        if (!timeover) {
          return;
        } else setComplete(!complete);
      } else setPause(!pause);
    }, 2000);

    return () => {
      if (complete) return;
      clearTimeout(toastOff);
    };
  }, [pause, timeover]);

  // 리셋 버튼
  const handleClickReset = () => {
    setStart(!start);
    setBtnToggle(!btnToggle);
    setSelectTimeToggle(!selectTimeToggle);
    setCountDown(false);
    setTimeover(false);
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
              <Link to="/today-habit" className={styles.navBtn}>
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
              {selectTimeToggle ? (
                <div className={styles.focusSelectTimeContainer}>
                  <img src="/images/icon/ic_timer.svg" alt="시계" />
                  <p>{tempTime.min + ":" + tempTime.sec}</p>
                </div>
              ) : null}
              <div
                className={`${styles.focusTimerContainer} 
                ${timeover ? styles.timeover : null}`}
              >
                {timeover ? <p>-</p> : null}
                <input
                  onBlur={handleTimerDefault}
                  onChange={handleTimerValue}
                  value={minute}
                  className={`${styles.focusMinTimer}
                  ${countDown ? styles.countDown : null}`}
                  id="minute"
                />
                <p className={countDown ? styles.countDown : null}>:</p>
                <input
                  onBlur={handleTimerDefault}
                  onChange={handleTimerValue}
                  value={second}
                  className={`${styles.focusSecTimer}
                  ${countDown ? styles.countDown : null}`}
                  id="second"
                />
              </div>
              <div className={styles.focusBtnContainer}>
                {btnToggle ? (
                  <buttons
                    onClick={handleClickPause}
                    className={styles.focusPauseBtn}
                  >
                    <img src="/images/icon/ic_pause.svg" alt="일시정지" />
                  </buttons>
                ) : null}
                <button
                  disabled={btnToggle ? true : false}
                  onClick={handleClickStart}
                  className={`${styles.focusStartBtn} ${
                    btnToggle ? styles.disable : null
                  }`}
                >
                  <img
                    src={
                      timeover
                        ? "/images/icon/ic_stop.svg"
                        : "/images/icon/ic_play.svg"
                    }
                    alt="시작"
                  />
                  <p>{timeover ? "Stop!" : "Start!"}</p>
                </button>
                {btnToggle ? (
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
