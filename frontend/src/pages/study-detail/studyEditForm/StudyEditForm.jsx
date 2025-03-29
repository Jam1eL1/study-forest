import React, { useState } from "react";
import styles from "./StudyEditForm.module.css";
import NicknameInput from "../../../components/createStudyInput/NicknameInput";
import StudyNameInput from "../../../components/createStudyInput/StudyNameInput";
import DescriptionInput from "../../../components/createStudyInput/DescriptionInput";
import PasswordInput from "../../../components/createStudyInput/PasswordInput";
import PasswordCheck from "../../../components/createStudyInput/PasswordCheck";
import Background from "../../../components/createStudyInput/Background";

const StudyEditForm = () => {
  const [nickname, setNickname] = useState("");
  const [studyName, setStudyName] = useState("");
  const [description, setDescription] = useState("");
  const [bg, setBg] = useState("bg1");
  const [password, setPassword] = useState("");

  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.studyCreateTitle}>스터디 만들기</h2>
        <div className={styles.studyCreateTopInputBox}>
          <NicknameInput setNickname={setNickname} />
          <StudyNameInput setStudyName={setStudyName} />
          <DescriptionInput setDescription={setDescription} />
        </div>
        <Background setBg={setBg} bg={bg} />
        <div className={styles.studyCreateBottomBox}>
          <PasswordInput setPassword={setPassword} />
          <PasswordCheck password={password} />
        </div>
        <button className={styles.createBtn}>만들기</button>
      </article>
    </section>
  );
};

export default StudyEditForm;
