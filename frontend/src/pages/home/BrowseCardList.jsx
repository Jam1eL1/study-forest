import { memo } from 'react';
import styles from './BrowseCardList.module.css';
import HomeCard from './HomeCard';
import { ClipLoader } from 'react-spinners';

const BrowseCardList = memo(({ isLoading, studies }) => {
  return (
    <div className={styles.cardListContainer}>
      {isLoading && studies.length === 0 ? (
        <div className={styles.skeletonContainer}>
          <ClipLoader size={100} color='#578246' loading={true} />
        </div>
      ) : studies.length === 0 ? (
        <div className={styles.noData}>아직 둘러 볼 스터디가 없어요</div>
      ) : (
        <ul className={styles.cardList}>
          {studies.map((data) => (
            <div key={`browse-${data.id}`} className={styles.cardWrapper}>
              <HomeCard data={data} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
});

export default BrowseCardList;
