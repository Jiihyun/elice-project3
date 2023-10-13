import { apiClient } from '../apiClient';
import { AdminDto } from '@dto/adminDto';

// 어드민 게시판 조회
// export async function fetchUserPosts({ board_type, emotion }: { board_type: string; emotion: string }) {
//   const { data: posts } = await apiClient.get<AdminDto[]>(`/posts?board_type=${board_type}&emotion=${emotion}`);
//   console.log(posts);
//   return posts;
// }
// 유저 게시글 조회
export async function fetchUserPosts({ board_type, emotion }: { board_type: string; emotion: string }) {
  const { data: posts } = await apiClient.get<AdminDto[]>(`/posts`, { params: { board_type, emotion } });
  console.log(posts);
  return posts;
}
// 유저 게시글 삭제 ??
export const deletePost = async (id: string) => {
  const response = await apiClient.delete(`/admin/posts/${id}`);
  return response.data;
};
//  유저 작성글 삭제
export async function deleteUSerPost(id: number) {
  const { data } = await apiClient.delete(`/posts/${id}`);
  return data;
}
// 유저 조회
export const getUserPost = async () => {
  const response = await apiClient.get<AdminDto[]>('/admin/users');
  console.log(response.data);
  return response.data;
};

// 유저 삭제
export const deleteUser = async (id: string) => {
  const response = await apiClient.delete(`/admin/users/${id}`);
  return response.data;
};
///TODO 백엔드랑 맞춰봐야함
// 유저가 작성한 댓글 조회
// export async function getUserComments({
//   user_id,
//   board_type,
//   emotion,
// }: {
//   user_id: string;
//   board_type: string;
//   emotion: string;
// }) {
//   const { data: comments } = await apiClient.get<AdminDto[]>(
//     `/comments?user_id=${user_id}&board_type=${board_type}&emotion=${emotion}`,
//   );
//   // console.log(response.data);
//   return comments;
// }
export const getUserComments = async (userId: string, boardType: string, emotion: string) => {
  const response = await apiClient.get(`/comments/?user_id=${userId}&board_type=${boardType}&emotion=${emotion}`);
  return response.data;
};
// 유저 댓글 삭제
export const deleteUserComment = async (id: string) => {
  const response = await apiClient.delete(`/comments/${id}`);
  return response.data;
};

export async function fetchPosts({ board_type, emotion }: { board_type: string; emotion: string }) {
  console.log('board_type', board_type);
  console.log('emotion', emotion);
}
