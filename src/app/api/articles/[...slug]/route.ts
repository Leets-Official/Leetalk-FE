import { getArticle } from '../../../service/getRequests';

export async function GET(req: Request) {
  try {
    const request = new Request(req);
    const articleId = request.url.split('/').pop();
    console.log('articleId', articleId);

    const data = await getArticle(articleId);
    console.log('data', data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error occurred while processing GET request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
