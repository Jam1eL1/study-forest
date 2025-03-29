import { useEffect } from 'react';
import styles from './HomeCard.module.css';
import pointIcon from '/images/icon/ic_point.svg';
import { useState } from 'react';
import bg5 from '/images/study-bg/bg5.svg';
import bg6 from '/images/study-bg/bg6.svg';
import bg7 from '/images/study-bg/bg7.svg';
import bg8 from '/images/study-bg/bg8.svg';
import { saveAndNavigateToStudy } from '../../utils/study';
import { useNavigate } from 'react-router-dom';

const backgroundImages = {
  bg5,
  bg6,
  bg7,
  bg8,
};

const HomeCard = ({ data }) => {
  const navigate = useNavigate();

  const [background, setBackground] = useState('');

  // 날짜 차이 계산 함수
  const calculateDaysDifference = (createDate) => {
    const start = new Date(createDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const clickDetailStudy = () => {
    saveAndNavigateToStudy(data, navigate);
  };

  useEffect(() => {
    if (
      data.background !== 'bg1' &&
      data.background !== 'bg2' &&
      data.background !== 'bg3' &&
      data.background !== 'bg4'
    ) {
      setBackground(backgroundImages[data.background]);
    }
  }, [data.background]);

  return (
    <li
      className={styles.card}
      data-bg={data.background}
      onClick={clickDetailStudy}
      style={{
        backgroundImage: background ? `url(${background})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {background && <div className={styles.backgroundOverlay}></div>}

      <div className={styles.cardHeaderContainer}>
        <div className={styles.headerTop}>
          <div className={styles.pointsContainer}>
            <img className={styles.pointIcon} src={pointIcon} alt='points' />
            <span className={styles.pointsText}>{data.point}P</span>
            <span className={styles.pointsText}>획득</span>
          </div>

          <div className={styles.cardTitleContainer}>
            <span className={styles.cardTitle}>
              <span className={styles.authorName}>{data.nickName}</span>
              <span> 의 {data.title}</span>
            </span>
          </div>
        </div>

        <div className={styles.cardDayContainer}>
          <span className={styles.cardDay}>
            {calculateDaysDifference(data.createAt)}일째 진행 중
          </span>
        </div>
      </div>

      <div className={styles.cardContentContainer}>
        <span className={styles.cardContent}>{data.description}</span>
      </div>

      {data.emojis && (
        <ul className={styles.emojiContainer}>
          {data.emojis.map((emoji) => (
            <li key={emoji.id} className={styles.emoji}>
              <span>{emoji.emojiContent}</span>
              <span>{emoji.count}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default HomeCard;
