import styles from './HomeCard.module.css';
import pointIcon from '/images/icon/ic_point.svg';

const HomeCard = ({ data, onClick }) => {
  if (!data || !data.emoji) {
    return null;
  }

  return (
    <li
      className={styles.card}
      data-bg={data.bg}
      onClick={() => onClick && onClick(data.id)}
    >
      <div className={styles.cardHeaderContainer}>
        <div className={styles.headerTop}>
          <div className={styles.pointsContainer}>
            <img className={styles.pointIcon} src={pointIcon} alt='points' />
            <span className={styles.pointsText}>{data.points}P</span>
            <span className={styles.pointsText}>획득</span>
          </div>

          <div className={styles.cardTitleContainer}>
            <span className={styles.cardTitle}>
              <span className={styles.authorName}>{data.author}</span>
              <span> 의 {data.title}</span>
            </span>
          </div>
        </div>

        <div className={styles.cardDayContainer}>
          <span className={styles.cardDay}>{data.day}일째 진행 중</span>
        </div>
      </div>

      <div className={styles.cardContentContainer}>
        <span className={styles.cardContent}>{data.content}</span>
      </div>

      <ul className={styles.emojiContainer}>
        {data.emoji.map((emoji) => (
          <li key={emoji.id} className={styles.emoji}>
            <span>{emoji.icon}</span>
            <span>{emoji.count}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default HomeCard;
