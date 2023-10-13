import { apiClient } from '../apiClient';

// 마이페이지 - 내 댓글 조회
export async function fetchMyComments() {
  const { data: comments } = await apiClient.get(`/comments/user`);
  return comments;
}

// 마이페이지 - 내 댓글 삭제
export async function deleteMyComment(id: number) {
  const { data } = await apiClient.delete(`/comments/${id}`);
  return data;
}
