import { getStudies } from '@api/home/getStudy.api';

const loadMoreStudies = async (currentStudies, setStudies, setIsLoading) => {
  try {
    setIsLoading(true);
    const data = await getStudies({
      offset: currentStudies.length,
      limit: 6,
    });
    setStudies([...currentStudies, ...data]);
  } catch (error) {
    console.error('Failed to load more studies:', error);
  } finally {
    setIsLoading(false);
  }
};

const saveAndNavigateToStudy = (study, navigate) => {
  const storedData = localStorage.getItem('studyForest');
  const parsedData = storedData ? JSON.parse(storedData) : [];

  const isDuplicate = parsedData.some((item) => item.id === study.id);

  if (!isDuplicate) {
    const newData = [study, ...parsedData];
    // 우선 최대 10개만
    const limitedData = newData.slice(0, 10);
    localStorage.setItem('studyForest', JSON.stringify(limitedData));
  }

  navigate(`/study-detail/${study.id}`);
};

export { loadMoreStudies, saveAndNavigateToStudy };
