import { useMutation, useQuery } from '@tanstack/react-query';
import { updateProfile, getUserProfile } from '@http/users';

// React Query를 사용하여 custom hook 생성

// WAIT 1-프로필 업데이트
interface UpdateProfileVariables {
  nickname: string;
  profileImg: File;
}

// 입력받은 nickname과 profileImg를 가지고 updateProfile 함수를 호출
export const useUpdateProfile = () => {
  const mutation = useMutation(({ nickname, profileImg }: UpdateProfileVariables) =>
    updateProfile(nickname, profileImg),
  );
  return mutation;
};

// 마이페이지 프로필 이미지, 닉네임, 소셜 조회
// export const useUserProfile = () => {
//   const query = useQuery(['userProfile'], getUserProfile);
//   return query;
// };

export const useUserProfile = () => {
  const { data: user } = useQuery(['userProfile'], getUserProfile);
  return user;
};
