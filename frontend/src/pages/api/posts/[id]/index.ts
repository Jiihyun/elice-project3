import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.json({
    id: 1,
    author: '디테일페이지 테스트 님',
    title: '[테스트!~!~!]님이 공유한 처방전 입니다!',
    content: '오늘 비가 많이 오는데 실내에서 빗소리를 들으면 기분이 좋다. 좋아하는 노래를 들으며 마라탕을 시켜먹으니 완전 짱이다. 어쩌구 저쩌구~',
    emotion: '슬픔',
    created_at: '2023-04-19',
    commentsCnt: '2',
    bookmarksCnt: '3',
  });
}
