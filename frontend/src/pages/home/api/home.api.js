import { v4 as uuidv4 } from 'uuid';

// 랜덤 제목 생성을 위한 데이터
const STUDY_TOPICS = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Algorithm',
  'CS 기초',
  'UX/UI',
  'AWS',
  'Docker',
  'Vue.js',
  'Angular',
  'Spring',
  'Java',
  'Kotlin',
  'iOS',
  'Android',
  'Flutter',
  'Go',
  'Rust',
];

const STUDY_TYPES = ['스터디', '프로젝트', '챌린지', '모각코'];

const CONTENT_LIST = [
  '함께 성장해요!',
  '초보자 환영!',
  '실전 프로젝트',
  'Step by Step',
  '기초부터 심화까지',
  '실무 능력 향상',
  '취업 준비',
  '포트폴리오 준비',
  '1일 1커밋',
  '주 3회 스터디',
];

const AUTHOR_SURNAMES = [
  '김',
  '이',
  '박',
  '최',
  '정',
  '강',
  '조',
  '윤',
  '장',
  '임',
];
const AUTHOR_NICKNAMES = [
  '개발자',
  '코더',
  '프로',
  '마스터',
  '고수',
  '러버',
  '킹',
  '챔프',
  '히어로',
  '메이커',
];

// 배경색 옵션 추가
const BG_COLORS = ['red', 'yellow', 'green', 'blue', 'img'];

// 랜덤 숫자 생성 함수
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 랜덤 이모지 데이터 생성
const generateEmojis = () => {
  return [
    {
      id: 1,
      count: getRandomNumber(10, 50),
      icon: '👍',
    },
    {
      id: 2,
      count: getRandomNumber(5, 40),
      icon: '🔥',
    },
    {
      id: 3,
      count: getRandomNumber(8, 45),
      icon: '💪',
    },
  ];
};

// 랜덤 스터디 데이터 생성
const generateRandomStudy = () => {
  const topic = STUDY_TOPICS[Math.floor(Math.random() * STUDY_TOPICS.length)];
  const type = STUDY_TYPES[Math.floor(Math.random() * STUDY_TYPES.length)];
  const surname =
    AUTHOR_SURNAMES[Math.floor(Math.random() * AUTHOR_SURNAMES.length)];
  const nickname =
    AUTHOR_NICKNAMES[Math.floor(Math.random() * AUTHOR_NICKNAMES.length)];
  const bg = BG_COLORS[Math.floor(Math.random() * BG_COLORS.length)]; // 배경색 랜덤 선택

  return {
    id: uuidv4(),
    title: `${topic} ${type}`,
    day: getRandomNumber(1, 100).toString(),
    points: getRandomNumber(100, 500),
    emoji: generateEmojis(),
    content: CONTENT_LIST[Math.floor(Math.random() * CONTENT_LIST.length)],
    author: `${surname}${nickname}`,
    bg: bg, // 배경색 속성 추가
  };
};

// API 함수
export const getRandomStudies = (count = 10) => {
  // 실제 API 호출을 시뮬레이션하기 위한 Promise 사용
  return new Promise((resolve) => {
    setTimeout(() => {
      const studies = Array.from({ length: count }, (_, index) =>
        generateRandomStudy()
      );
      resolve(studies);
    }, 300); // 0.5초 지연
  });
};

// 정렬 함수들
export const sortByRecent = (studies) => {
  return [...studies].sort((a, b) => parseInt(b.day) - parseInt(a.day));
};

export const sortByPopular = (studies) => {
  return [...studies].sort((a, b) => {
    const aTotal = a.emoji.reduce((sum, e) => sum + e.count, 0);
    const bTotal = b.emoji.reduce((sum, e) => sum + e.count, 0);
    return bTotal - aTotal;
  });
};

export const sortByPoints = (studies) => {
  return [...studies].sort((a, b) => b.points - a.points);
};
