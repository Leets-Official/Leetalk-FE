interface Article {
  type: 'TEXT' | 'IMAGE';
  content: Content[];
  category: string;
  title: string;
  subtitle: string;
  coverImgName: string;
  tags: string[];
  writerId: number;
  writerName: string;
  writerBio: string;
  writerProfileImgName: string;
  createdAt: string;
}

interface Content {
  orderNumber: number;
  type: 'TEXT' | 'IMAGE';
  data: string;
  weight: number;
  alignment: 'CENTER' | 'START' | 'END';
}
