import { getFeedList } from '../../../service/getRequests';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    console.log('searchParams', searchParams);
    const category = searchParams.get('category') || undefined;
    const userId = searchParams.get('userId');
    const parsedUserId = userId ? parseInt(userId) : undefined;

    //const data = await getFeedList(category, parsedUserId);

    console.log('category', category);
    let filteredData = mockData.data;
    if (category) {
      filteredData = mockData.data.filter((item) => item.category === category);
    }

    console.log('filteredData', filteredData);
    const filterResponseData = { code: 200, data: filteredData };

    //const data = mockData;
    //console.log('data', data);
    return new Response(JSON.stringify(filterResponseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error occurred while processing GET request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

const mockData = {
  code: 200,
  data: [
    {
      articleId: 0,
      category: 'BACK_END',
      title: '양태석이 되는 방법이 궁금하신가요?',
      truncatedContent:
        'Leets 교육팀 양태석님에 대해 궁금하시다면 이 글을 클릭해주세요.',
      coverImgUrl: '/images/sunny.jpg',
      tags: ['BE', 'Leets', '양태석', '백엔드', '개발자'],
      writerName: '양태석',
      createdAt: '2024-03-01',
    },
    {
      articleId: 2,
      category: 'BACK_END',
      title: '우테코 합격생 두두등장',
      truncatedContent:
        '우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나? 우테코 가고 싶나? 우테코에 가고 싶나?',
      coverImgUrl: '/images/sunny.jpg',
      tags: ['BE', '우테코', '합격생', '개발자'],
      writerName: '나아연',
      createdAt: '2024-02-11',
    },
    {
      articleId: 3,
      category: 'FRONT_END',
      title: 'Leets를 만들다',
      truncatedContent:
        'Leets 홈페이지 누가 만들었는지 궁금하지? 그건 바로 킹갓제네럴...',
      coverImgUrl: '',
      tags: ['FE', 'Leets', '킹갓제네럴', '프론트엔드', '개발자'],
      writerName: '김성민',
      createdAt: '2024-03-02',
    },
    {
      articleId: 4,
      category: 'DESIGN',
      title: '디자인을 배우고 싶다면?',
      truncatedContent: '디자인을 배우고 싶다면 이 글을 클릭해주세요.',
      coverImgUrl: '',
      tags: ['DESIGN', '디자인', '디자이너'],
      writerName: '김혜진',
      createdAt: '2024-02-01',
    },
    {
      articleId: 5,
      category: 'BACK_END',
      title: '제로백에서 실제 배포까지',
      truncatedContent:
        '제로백에서 실제 배포까지 1년도 안 걸렸다고? 도대체 어떻게? 구경하러 가볼까?',
      coverImgUrl: '/images/img1.jpg',
      tags: ['BE', '제로백', '백엔드', '개발자'],
      writerName: '노정완',
      createdAt: '2024-03-01',
    },
    {
      articleId: 6,
      category: 'FRONT_END',
      title: 'Leetalk 프론트엔드 개발기',
      truncatedContent:
        '저는 게으름뱅이입니다. 게으름뱅이의 프론트엔드 개발기.',
      coverImgUrl: '/images/img2.jpg',
      tags: ['FE', 'Leetalk', '프론트엔드', '개발자'],
      writerName: '조혜원',
      createdAt: '2024-03-01',
    },
  ],
};
