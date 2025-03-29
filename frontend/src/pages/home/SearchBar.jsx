import searchIcon from '/images/icon/ic_search.svg';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchInput, handleSearch }) => {
  return (
    <div className={styles.searchContainer}>
      <img className={styles.searchIcon} src={searchIcon} alt='검색' />
      <input
        className={styles.searchInput}
        type='text'
        placeholder='검색'
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
