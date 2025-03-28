import { ClipLoader } from "react-spinners";
import { getRandomStudies } from "./api/home.api";
import styles from "./BrowseCardList.module.css";
import HomeCard from "./HomeCard";
import searchIcon from "/images/icon/ic_search.svg";
import { useEffect, useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { saveAndNavigateToStudy } from "../../utils/study";
import axiosInstance from "../../api/axiosInstance";

const BrowseCardList = () => {
  const navigate = useNavigate();

  const [studies, setStudies] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최근순");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const options = ["포인트 많은순", "포인트 적은순", "최신순", "오래된순"];

  // TODO : 서버 api 개발 후 연동 쓰로틀링 적용해보기
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clickDetailStudy = (id) => {
    const currentStudy = studies.find((study) => study.id === id);
    saveAndNavigateToStudy(currentStudy, navigate);
  };

  const clickMoreStudy = async () => {
    // TODO: 서버 api 개발후 offset 기반 불러오기 방식으로 수정
    // loadMoreStudies(studies, setStudies, setIsLoading);

    try {
      const response = await axiosInstance.get(`/api/study?offset=0&limit=6`);

      const data = response.data;

      console.log(data);
    } catch (err) {
      console.log(err);
    }

    console.log("clickMoreStudy");
  };

  useEffect(() => {
    const fetchStudies = async () => {
      setIsLoading(true);
      const data = await getRandomStudies(6);
      setStudies(data);
      setIsLoading(false);
    };
    fetchStudies();
  }, []);

  return (
    <div className={styles.browseStudyContainer}>
      <div className={styles.title}>스터디 둘러보기</div>

      <div className={styles.topContainer}>
        <div className={styles.searchContainer}>
          <img className={styles.searchIcon} src={searchIcon} alt="검색" />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className={styles.filterContainer}>
          <div className={styles.dropdown} onClick={() => setIsOpen(!isOpen)}>
            <span className={styles.selected}>{selected}</span>

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
                    onClick={() => {
                      setSelected(option);
                      setIsOpen(false);
                    }}
                    className={styles.dropdownItem}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardListContainer}>
        {isLoading && studies.length === 0 ? (
          <div className={styles.skeletonContainer}>
            {[1, 2, 3].map((index) => (
              <Skeleton
                key={index}
                width={350}
                height={200}
                enableAnimation={true}
                style={{
                  backgroundColor: "#e5e7eb",
                  backgroundImage:
                    "linear-gradient(90deg, #e5e7eb, #f3f4f6, #e5e7eb)",
                }}
              />
            ))}
          </div>
        ) : studies.length === 0 ? (
          <div className={styles.noData}>아직 둘러 볼 스터디가 없어요</div>
        ) : (
          <ul className={styles.cardList}>
            {studies.map((data) => (
              <div key={data.id} className={styles.cardWrapper}>
                <HomeCard data={data} onClick={clickDetailStudy} />
              </div>
            ))}
          </ul>
        )}
      </div>
      {studies.length > 0 && (
        <div className={styles.moreButtonContainer}>
          <button
            onClick={clickMoreStudy}
            className={styles.moreButton}
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader size={20} color="#578246" loading={true} />
            ) : (
              "더보기"
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default BrowseCardList;
