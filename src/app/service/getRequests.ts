export const getFeedList = async (category?: string, userId?: number) => {
  let url = `${process.env.NEXT_PUBLIC_SERVER}/articles`;

  if (category || userId) {
    url += '?';
    if (category) url += `category=${category}&`;
    if (userId) url += `userId=${userId}&`;
    url = url.slice(0, -1);
  }

  const response = await fetch(url);
  const responseData = await response.json();
  console.log('json', responseData);

  if (Object.keys(responseData).length === 0) {
    throw new Error('Empty response from server');
  }

  return responseData;
};

export const getArticle = async (articleId: string | undefined) => {
  console.log('articleId in getArticle', articleId);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/articles/${articleId}`,
  );
  if (!articleId) {
    throw new Error('Article ID is missing');
  }
  //const responseData = getArticlesMockData;
  const responseData = await response.json();
  console.log('json', responseData);

  if (Object.keys(responseData).length === 0) {
    throw new Error('Empty response from server');
  }

  return responseData;
};

const getArticlesMockData = {
  code: 200,
  data: {
    createdAt: '2024-03-04',
    category: 'BACK_END',
    title: '양태석이 되는 방법이 궁금하신가요?',
    subtitle: 'Leets 교육팀 양태석님에 대해 궁금하시다면 이 글을 클릭해주세요.',
    content: [
      {
        orderNumber: 1,
        data: '1번째 줄입니다<br>',
        type: 'TEXT',
        weight: 16,
        alignment: 'START',
      },
      {
        orderNumber: 2,
        data: '2번째줄입니다<br>',
        type: 'TEXT',
        weight: 16,
        alignment: 'START',
      },
      {
        orderNumber: 3,
        data: '3번째 줄입니다',
        type: 'TEXT',
        weight: 20,
        alignment: 'START',
      },
      {
        orderNumber: 4,
        data: '길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게 길게길게길게길게 더 길게 더 길게',
        type: 'TEXT',
        weight: 16,
        alignment: 'START',
      },
      {
        orderNumber: 5,
        data: '/images/img2.jpg',
        type: 'IMAGE',
        weight: 16,
        alignment: 'START',
      },
    ],
    coverImgName: '/images/img1.jpg',
    tags: ['BE', 'Leets', '양태석', '백엔드', '개발자'],
    writerId: 1,
    writerName: '양태석',
    writerBio: 'BE 개발자 양태석입니다.',
    writerProfileImgName: '/images/sunny.jpg',
  },
  message: 'Success',
};
