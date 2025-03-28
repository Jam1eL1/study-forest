import React from "react";
import styles from "./StudyCreate.module.css";
import bg1 from "/images/studyBg/Rectangle 1.svg";
import bg2 from "/images/studyBg/Rectangle 1249.svg";
import bg3 from "/images/studyBg/Rectangle 1250.svg";
import bg4 from "/images/studyBg/Frame 2609425.svg";
import bg5 from "/images/studyBg/Frame 2609426.svg";
import bg6 from "/images/studyBg/Frame 2609427.svg";
import bg7 from "/images/studyBg/Frame 2609428.svg";
import bg8 from "/images/studyBg/Frame 2609429.svg";
import btnCloseIcon from "/images/icon/btn_visibility_on_24px-1.svg";
import btnSeeIcon from "/images/icon/btn_visibility_on_24px.svg";

const backgroundImages = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

const CreateStudy = () => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.studyCreateTitle}>스터디 만들기</h2>
        <div className={styles.studyCreateTopInputBox}>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>닉네임</p>
            <input
              className={styles.input}
              type="text"
              placeholder="닉네임을 입력해 주세요"
            />
          </label>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>스터디 이름</p>
            <input
              className={styles.input}
              type="text"
              placeholder="스터디 이름을 입력해주세요"
            />
          </label>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>소개</p>
            <textarea
              className={styles.inputBox}
              placeholder="소개 멘트를 작성해 주세요"
            />
          </label>
        </div>
        <div className={styles.studyCreateMidBgBox}>
          <p className={styles.inputBoxTitle}>배경을 선택해주세요</p>
          <div className={styles.bgBox}>
            {backgroundImages.map((bgs) => (
              <img src={bgs} alt="bgImg" />
            ))}
          </div>
        </div>
        <div className={styles.studyCreateBottomBox}>
          <label className={styles.label}>
            <p className={styles.inputBoxTitle}>비밀번호</p>
            <div className={styles.pwInputBox}>
              <input
                className={styles.input}
                type="text"
                placeholder="비밀번호를 입력해주세요"
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
              type="text"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
            />
          </label>
        </div>
        <button className={styles.createBtn}>만들기</button>
      </article>
    </section>
  );
};

export default CreateStudy;
