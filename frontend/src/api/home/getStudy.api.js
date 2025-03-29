import axiosInstance from '@api/axiosInstance';

export const getStudies = async ({
  offset = 0,
  limit = 6,
  sort = 'desc',
  search = '',
  orderBy = 'createAt',
} = {}) => {
  try {
    const response = await axiosInstance.get('/api/study', {
      params: {
        offset,
        limit,
        sort,
        search,
        orderBy,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch studies:', error);
    throw error;
  }
};

// 정렬 옵션 매핑
export const SORT_OPTIONS = {
  '포인트 많은순': { orderBy: 'point', sort: 'desc' },
  '포인트 적은순': { orderBy: 'point', sort: 'asc' },
  최신순: { orderBy: 'createAt', sort: 'desc' },
  오래된순: { orderBy: 'createAt', sort: 'asc' },
};
