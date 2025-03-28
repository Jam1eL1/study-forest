import { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import styles from './RecentlyCardList.module.css';
import { saveAndNavigateToStudy } from '../../utils/study';
import { useNavigate } from 'react-router-dom';

const RecentlyCardList = () => {
  const navigate = useNavigate();

  const [studyForestLocalStorageData, setStudyForestLocalStorageData] =
    useState([]);

  const clickDetailStudy = (id) => {
    const currentStudy = studyForestLocalStorageData.find(
      (study) => study.id === id
    );
    saveAndNavigateToStudy(currentStudy, navigate);
  };

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
              <div key={data.id} className={styles.cardWrapper}>
                <HomeCard data={data} onClick={clickDetailStudy} />
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

export default RecentlyCardList;
