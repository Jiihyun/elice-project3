import { useQuery } from '@tanstack/react-query';
// import { fetchPosts } from '@http/mypage/myContents';
import { fetchMyPosts } from '@http/mypage/myContents';
import { fetchMyComments } from '@http/mypage/myComments';
// import { fetchUser } from '@http/users';

// TODO 마이페이지 - 내 작성글 조회
export const useGetPosts = () => {
  return useQuery(['posts'], () => fetchMyPosts());
};

// TODO 마이페이지 - 내 댓글 조회
export const useGetMyComments = () => {
  return useQuery(['comments'], fetchMyComments);
};

// export function useUserSocial() {
//   return useQuery(['userSocial'], fetchUser);
// }
