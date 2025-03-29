import { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import styles from './RecentlySection.module.css';

const RecentlySection = () => {
  const [studyForestLocalStorageData, setStudyForestLocalStorageData] =
    useState([]);

  useEffect(() => {
    const data = localStorage.getItem('studyForest');
    if (data) {
      const parsedData = JSON.parse(data);
      setStudyForestLocalStorageData(parsedData);
    }
  }, []);
  return (
    <div className={styles.recentStudyContainer}>
      <div className={styles.title}>최근 조회한 스터디</div>

      {studyForestLocalStorageData.length > 0 ? (
        <div className={styles.cardListContainer}>
          <ul className={styles.cardList}>
            {studyForestLocalStorageData.map((data) => (
              <div key={`recently-${data.id}`} className={styles.cardWrapper}>
                <HomeCard data={data} />
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.noData}>아직 조회한 스터디가 없습니다.</div>
      )}
    </div>
  );
};

export default RecentlySection;
