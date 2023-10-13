export interface PostDto {
  id: string;
  nickname: string;
  title: string;
  content: string;
  author: string;
  boardType: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
}
