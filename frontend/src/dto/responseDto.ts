import { PostDto } from './postDto';
import { UserDto } from './userDto';

export interface ResponseDto<T> {
  data: T;
  statusCode: number;
  message: string;
  // title: string;
  // content: string;
}

//Dto 모음~
export type UserResponseDto = ResponseDto<UserDto>;
export type PostResponseDto = ResponseDto<PostDto>;

// 위에는 이런 뜻!
// export interface ResponseDto<UserDto> {
//     data: UserDto;
//     statusCode: number;
//     message: string;
//   }

//=================================================
// 위에 다 오류나면 일단 이런식으로!
// export interface UserResponseDto {
//   data: {
//     nickname: string;
//     profileImg: string;
//   };
//   statusCode: number;
//   message: string;
// }

// export interface PostResponseDto {
//   data: {
//     id: number;
//     title: string;
//     content: string;
//     author: string;
//     board_type: string;
//     emotion: number;
//     created_at: number;
//     bookmarksCnt: number;
//     commentsCnt: number;
//   };
//   statusCode: number;
//   message: string;
// }
