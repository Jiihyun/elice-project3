import { fetchPost, fetchPosts } from '@http/posts';
import { useQuery } from '@tanstack/react-query';

//전체 게시물 조회
export function usePosts(boardType: string, emotion: string) {
  return useQuery(['posts', { boardType, emotion }], () => fetchPosts({ boardType, emotion }));
}

//특정 게시물 조회
export function usePost(id: number) {
  const { data: post, error, isLoading } = useQuery(['post', 'current'], () => fetchPost({ id }));
  return { post, error, isLoading };
}
