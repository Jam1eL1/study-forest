import BrowseCardList from './BrowseCardList';
import styles from './Home.module.css';
import RecentlyCardList from './RecentlyCardList';

const Home = () => {
  return (
    <section className={styles.home}>
      <RecentlyCardList />
      <BrowseCardList />
    </section>
  );
};

export default Home;
