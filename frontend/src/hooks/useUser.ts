import { fetchUser } from '@http/users';
import { useQuery } from '@tanstack/react-query';

async function _fetchUser() {
  try {
    const user = await fetchUser();
    console.log(user);
    return user;
  } catch (error) {
    console.log('로그인 안됐어요!!!!!!!!');
    return null; // undefined 나면 에러ㅡㅡ
  }
}

// component -> state(hook) -> http
export function useUser() {
  const { data: user } = useQuery(['users', 'current'], _fetchUser, {
    // retry: 0,
    // suspense: true,
    // useErrorBoundary: true,
  });

  return { user };
}
//TODO 마이 컨텐츠
// export function useMyContents() {
//   const { data: myContents, isLoading, error } = useQuery(['myContents'], fetchMyContents);

//   return { myContents, isLoading, error };
// }
