// 'use client';
// import React from 'react';
// import { RegisterBox, RegisterContainer } from '../../styles/register.styled';
// import { Checkbox } from '../../components/checkbox/Checkbox';
// import axios from 'axios';
// import { Navigate } from 'react-router';
// axios.defaults.withCredentials = true;

// export default function Register() {
//   const [nickname, setNickname] = React.useState('');
//   const [nicknameError, setNicknameError] = React.useState(false);
//   // const navigate = useNavigate();
//   const [profileImage, setProfileImage] = React.useState<string | ArrayBuffer | null>('/user.png');
//   const imageRef = React.useRef<HTMLInputElement>(null);
//   const [agree, setAgree] = React.useState(false);

//   // const onChangeNickame = (e) => {
//   //   setNicknameError(false);
//   //   setNickname(e.target.value);
//   // };

//   const validation = () => {
//     if (!nickname) setNicknameError(true);

//     if (nickname) return true;
//     else return false;
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log('회원가입');

//     if (validation()) {
//       (async () => {
//         await axios
//           .post(
//             ' /서버주소',
//             {
//               // 프로필이미지
//               nickname,
//             },
//             { withCredentials: true },
//           )
//           .then((response) => {
//             if (response.data.message == '회원가입 성공') {
//               alert('환영합니다!');
//               Navigate('/');
//             }
//           })
//           .catch((err) => {
//             console.log(err.message);
//             alert('회원가입에 실패하였습니다');
//           });
//       })();
//     }
//   };

//   const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);

//       reader.onload = () => {
//         setProfileImage(reader.result);
//       };
//     }
//   };

//   // const handleDeletePreviewFile = (e: React.MouseEvent) => {
//   //   e.preventDefault();
//   //   if (imageRef.current) {
//   //     imageRef.current.value = '';
//   //     setProfileImage('/user.png');
//   //   }
//   // };

//   return (
//     <RegisterContainer>
//       <h3>회원가입 진행</h3>
//       <RegisterBox>
//         <form>
//           <div className="profile-img-box">{profileImage && <img className="pre-img" src={profileImage.toString()} />}</div>
//           <div className="upload-img">
//             <label className="button" htmlFor="input-file">
//               프로필 사진 추가
//             </label>
//             <input
//               type="file"
//               ref={imageRef}
//               className="profile-img-input"
//               id="input-file"
//               accept="image*"
//               name="profile_img"
//               style={{ display: 'none' }}
//               onChange={handleChangeFile}
//             ></input>
//           </div>

//
//           <div className="nick-box">
//             <label htmlFor="nick-input" className="label">
//               닉네임
//             </label>
//             <input type="text" id="nick-input" className="nick-input" placeholder="닉네임을 입력하세요" />
//             {nicknameError && <div className="invalid-input">닉네임을 다시 입력하세요!</div>}
//           </div>

//           <Checkbox checked={agree} onChange={setAgree}>
//             (필수) 개인정보 수집과 이용에 동의합니다. 동의를 거부 할 권리가 있지만 동의 거절 시 서비스 이용에 제한이 될 수 있습니다. (회원가입 불가)
//           </Checkbox>

//
//           <button type="submit" disabled={!agree} className="button" onClick={onSubmit}>
//             ✨회원가입 완료!✨
//           </button>
//         </form>
//       </RegisterBox>
//     </RegisterContainer>
//   );
// }
