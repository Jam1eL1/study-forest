import BrowseSection from './BrowseSection';
import styles from './Home.module.css';
import RecentlySection from './RecentlySection';

const Home = () => {
  return (
    <section className={styles.home}>
      <RecentlySection />
      <BrowseSection />
    </section>
  );
};

export default Home;
