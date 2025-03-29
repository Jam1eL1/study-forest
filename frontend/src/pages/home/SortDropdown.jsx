import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import styles from './SortDropdown.module.css';
import { SORT_OPTIONS } from '@api/home/getStudy.api';
import { useState } from 'react';

const SortDropdown = ({ sortType, handleSort }) => {
  const options = Object.keys(SORT_OPTIONS);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.selected}>{sortType}</span>

        {isOpen ? (
          <span className={styles.arrow}>
            <RiArrowUpSFill />
          </span>
        ) : (
          <span className={styles.arrow}>
            <RiArrowDownSFill />
          </span>
        )}

        {isOpen && (
          <ul className={styles.dropdownMenu}>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSort(option)}
                className={styles.dropdownItem}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortDropdown;
