import { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // 로그인 여부 확인해줘야되는데
  // 1. 일단은 로그인 됐다고 가정
  res.json({
    nickname: 'TEST지원',
    profileImg: '/test.jpeg',
  });
  //2. 로그인 안됐다고 가정
  // res.json(undefined);
}

// GET /api/auth/users -> 로 보내면 위 데이터가 옴.
// 원래는 로그인 되었을 때만 주는 것
