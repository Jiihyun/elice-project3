import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUserPosts, getUserPost, deleteUser, getUserComments, deleteUserComment } from '@http/admin/admin';

export function useUserPosts(board_type: string, emotion: string) {
  return useQuery(['posts', { board_type, emotion }], () => fetchUserPosts({ board_type, emotion }));
}
// 유저 게시글 조회
// export function useUserPosts(board_type: string, emotion: string) {
//   const {
//     data: posts,
//     isLoading,
//     error,
//   } = useQuery(['posts', { board_type, emotion }], () => fetchUserPosts({ board_type, emotion }));

//   return { posts, isLoading, error };
// }

// ! 유저조회
export function useUserPost() {
  const { data, isSuccess } = useQuery(['userPost'], getUserPost);
  return { data, isSuccess };
}

// ! 유저 삭제
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(['userInformation']);
    },
  });
  return mutation;
};

//TODO
// 유저 댓글 조회
// export function useUserComments(user_id: string, board_type: string, emotion: string) {
//   const { data, isSuccess, error } = useQuery(['userComments', { user_id, board_type, emotion }], () =>
//     getUserComments( user_id, board_type, emotion ),
//   );
//   return { data, isSuccess, error };
// }
export function useUserComments(userId: string, boardType: string, emotion: string) {
  const { data, isSuccess, error } = useQuery(['userComments', userId, boardType, emotion], () =>
    getUserComments(userId, boardType, emotion),
  );
  return { data, isSuccess, error };
}
// export function useDeleteUserComment() {
//   const queryClient = useQueryClient();
//   return useMutation(deleteUserComment, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(['userComments']);
//     },
//   });
// }
