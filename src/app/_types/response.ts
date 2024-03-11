interface FeedResponseData {
  data: FeedList[];
}

interface FeedList {
  articleId: number;
  category: string;
  title: string;
  truncatedContent: string;
  coverImgUrl: string;
  tags: string[];
  writerName: string;
  createdAt: string;
}
