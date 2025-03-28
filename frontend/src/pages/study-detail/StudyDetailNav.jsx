import React from "react";
import styles from "./StudyDetailNav.module.css";
import smileIcon from "/images/icon/ic_smile.svg";

function StudyDetailNav() {
  return (
    <div className={styles.header}>
      {/* 이부분 나중에 이모지 기능 연동하면 src 변경해야함 */}
      <div className={styles.emojis}>
        <button className={styles.emoji}>
          <img src="/images/stickers/Subtract-1.svg" alt="emoji" />
        </button>
        <button className={styles.emoji}>
          <img src="/images/stickers/Subtract-2.svg" alt="emoji" />
        </button>
        <button className={styles.emoji}>
          <img src="/images/stickers/Subtract-3.svg" alt="emoji" />
        </button>
        <button className={styles.emoji}>
          <img src="/images/stickers/Subtract-4.svg" alt="emoji" />
        </button>
        <button className={styles.addBtn}>
          <img src={smileIcon} />
          <p>추가</p>
        </button>
      </div>

      <nav className={styles.nav}>
        {/* 이부분 Link 달아서 변경해야함 */}
        <a href="#" className={styles.shareLink}>
          공유하기
        </a>
        <span className={styles.divider}>|</span>
        <a href="#" className={styles.editLink}>
          수정하기
        </a>
        <span className={styles.divider}>|</span>
        <a href="#" className={styles.deleteLink}>
          스터디 삭제하기
        </a>
      </nav>
    </div>
  );
}

export default StudyDetailNav;
