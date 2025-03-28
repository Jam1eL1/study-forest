import React, { useState } from "react";
import styles from "./EditStudyForm.module.css";
import bg1 from "/images/studyBg/Rectangle 1.svg";
import bg2 from "/images/studyBg/Rectangle 1249.svg";
import bg3 from "/images/studyBg/Rectangle 1250.svg";
import bg4 from "/images/studyBg/Frame 2609425.svg";
import bg5 from "/images/studyBg/Frame 2609426.svg";
import bg6 from "/images/studyBg/Frame 2609427.svg";
import bg7 from "/images/studyBg/Frame 2609428.svg";
import bg8 from "/images/studyBg/Frame 2609429.svg";
import btnCloseIcon from "/images/icon/btn_visibility_on_24px-1.svg";
import axios from "axios";

const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

const EditStudyForm = ({ studyId }) => {
  const [nickname, setNickname] = useState("");
  const [studyName, setStudyName] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedBackground, setSelectedBackground] = useState(
    backgroundImages[0]
  );

  const handleUpdateStudy = async () => {
    if (
      nickname &&
      studyName &&
      description &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      try {
        const response = await axios.put(
          `http://localhost:5090/api/study/${studyId}/update`,
          {
            nickname,
            studyName,
            description,
            password,
            background: selectedBackground,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("스터디가 성공적으로 업데이트되었습니다!", response.data);
        alert("업데이트 성공!");
        // 성공 처리 (예: 리디렉션, 메시지 표시)
      } catch (error) {
        console.error("스터디 업데이트 중 오류 발생:", error);
        alert("업데이트 실패... 오류...");
        // 오류 처리 (예: 오류 메시지 표시)
        if (error.response) {
          console.error("서버 응답:", error.response.data);
          console.error("서버 상태:", error.response.status);
          console.error("서버 헤더:", error.response.headers);
        } else if (error.request) {
          console.error("요청 오류:", error.request);
        } else {
          console.error("오류 메시지:", error.message);
        }
      }
    } else {
      alert("모든 필드를 채우고 비밀번호를 확인해주세요.");
    }
  };

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.studyCreateTitle}>스터디 수정하기</h2>
        <div className={styles.studyCreateTopInputBox}>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>닉네임</p>
            <input
              className={styles.input}
              type="text"
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>스터디 이름</p>
            <input
              className={styles.input}
              type="text"
              placeholder="스터디 이름을 입력해주세요"
              value={studyName}
              onChange={(e) => setStudyName(e.target.value)}
            />
          </label>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>소개</p>
            <textarea
              className={styles.inputBox}
              placeholder="소개 멘트를 작성해 주세요"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className={styles.studyCreateMidBgBox}>
          <p className={styles.inputBoxTitle}>배경을 선택해주세요</p>
          <div className={styles.bgBox}>
            {backgroundImages.map((bgs) => (
              <img
                key={bgs}
                src={bgs}
                alt="bgImg"
                onClick={() => setSelectedBackground(bgs)}
                style={{
                  border:
                    selectedBackground === bgs ? "2px solid blue" : "none",
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.studyCreateBottomBox}>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>비밀번호</p>
            <div className={styles.pwInputBox}>
              <input
                className={styles.input}
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className={styles.btnIcon}
                src={btnCloseIcon}
                alt="btnSeeIcon"
              />
            </div>
          </label>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>비밀번호 확인</p>
            <input
              className={styles.input}
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </div>
        <button className={styles.createBtn} onClick={handleUpdateStudy}>
          수정하기
        </button>
      </article>
    </section>
  );
};

export default EditStudyForm;
