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
