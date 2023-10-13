'use client';
import * as React from 'react';
import { useState, useRef } from 'react';
import Tabs from '@mui/base/Tabs';
import {
  UserInfoContainer,
  Avatar,
  UserInfoText,
  StyledTabsList,
  StyledTab,
  StyledTabPanel,
} from '@styles/myPage.styled';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import AccountDelete from '@components/my-page/accountDelete';
import Contents from '@components/my-page/myContents';
import Comments from '@components/my-page/myComments';
import Bookmark from '@components/my-page/myBookmark';
import { useUpdateProfile, useUserProfile } from '@hooks/useUserProfile';
import { useUser } from '@hooks/useUser';

// help me! 코치님, renderSocial 함수를 설정하였지만 소셜 로그인의 이미지를 받아오지 못하는것 같아요 ㅠㅠ) 도와주세욥
// 코치님, 내가 작성한 게시판을 조회하여 클릭하게 되면 게시판의 상세페이지로 넘어가게 하려고 합니다. 마이페이지의 게시판에서 어떻게 연결해야 할까요? 감이 안옵니다 ㅠㅠ)

// TODO 코드 에러 잡기
export default function MyPage() {
  const [value, setValue] = React.useState(0);
  const imageRef = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState(false); // 수정 버튼 클릭 시 true로 변경
  const inputRef = useRef<HTMLInputElement>(null); // 입력값을 받아오기 위한 Ref

  // 백엔드에서 social 정보 string으로 받아옴
  // 사용자 정보가 로드되면 해당 정보를 사용하여 상태를 설정
  // TODO 프로필 ㄹ이미지가 안 따라와...
  const { user } = useUser();
  const [nickname, setNickname] = useState(user?.nickname ?? '길동씨');
  const [profileImg, setProfileImg] = useState(user?.profileImg ?? '/profile-img.png');
  const [social, setSocial] = useState(user?.social ?? '');

  // 프로필 업데이트
  const updateProfileMutation = useUpdateProfile();

  // 소셜 로그인 이미지를 렌더링하는 함수
  const renderSocial = (social: string) => {
    if (!social) return null;
    if (social === 'KAKAO') {
      return <img src="/kakao-icon.png" alt="Kakao" width="60" height="30" />;
    } else if (social === 'NAVER') {
      return <img src="/naver-icon.png" alt="Naver" width="60" height="30" />;
    } else {
      return null;
    }
  };

  // 유저 새 프로필 이미지를 선택하면 호출되는 이벤트 핸들러, FileReader를 사용해 선택된 이미지 파일을 읽고 프리뷰를 표시
  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfileImg(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 사용자가 프로필 변경 사항을 저장하려고 할 때 호출되는 이벤트 핸들러
  // updateProfileMutation.mutateAsync를 호출하여 프로필 업데이트 요청을 보냄
  // updateProfileMutation.mutateAsync: React Query에서 제공하는 기능, 비동기적으로 mutation을 실행하는 메서드,
  // mutation: 서버의 데이터를 변경
  const handleCompleteClick = async () => {
    if (inputRef.current && imageRef.current?.files?.length) {
      const newNickname = inputRef.current?.value ?? nickname;
      const newProfileImg = imageRef.current.files[0] ?? null;
      try {
        await updateProfileMutation.mutateAsync({
          nickname: newNickname,
          profileImg: newProfileImg,
        });
        setIsEditing(false);
        setNickname(newNickname);
        console.log('수정완료');
      } catch (error) {
        console.error(error);
        alert('프로필 업데이트에 실패했습니다.');
      }
    }
  };

  // modal
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModalOpen = () => {
    setIsOpenModal(true);
  };
  const handleModalClose = () => {
    setIsOpenModal(false);
  };
  const handleChange = (event: React.SyntheticEvent<Element, Event> | null, newValue: string | number | null) => {
    if (typeof newValue === 'number') {
      newValue === 3 ? handleModalOpen() : setValue(newValue);
    } // 탭 4번을 클릭할 때 모달 열기
  };

  //프로필 이미지를 클릭했을 때 호출
  const handleAvatarClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };

  // 사용자가 닉네임 옆의 수정 버튼을 클릭했을 때 호출
  // 수정 버튼 클릭 시 isEditing 값을 true로 변경
  const handleEditClick = () => {
    setIsEditing(true);
  };
  // 닉네임 변경 이벤트를 처리하는 함수
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value) return;
    setNickname(value);
  };

  return (
    <div className="body-box">
      <UserInfoContainer>
        <input type="file" ref={imageRef} accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
        <Avatar src={profileImg as string} onClick={handleAvatarClick} />
        <UserInfoText style={{ display: 'flex', alignItems: 'center' }}>
          {isEditing ? (
            // 수정 중일 때 input 요소
            <Input
              type="text"
              defaultValue={nickname}
              ref={inputRef}
              onChange={handleNicknameChange}
              style={{ padding: '5px', borderRadius: '5px', border: '1px solid gray', fontSize: '14px' }}
            />
          ) : (
            // 수정 중이 아닐 때 h2 요소
            <div>{nickname}</div>
          )}
          {/* 수정 버튼 */}
          {isEditing ? (
            <Button onClick={handleCompleteClick}>
              <EditIcon color="action" />
            </Button>
          ) : (
            <Button style={{ margin: '-10px' }} onClick={handleEditClick}>
              <EditIcon color="action" />
            </Button>
          )}
        </UserInfoText>
        {/* 로그인 이미지 */}
        <div>{renderSocial(social)}</div>
      </UserInfoContainer>
      <Tabs value={value} onChange={handleChange}>
        <StyledTabsList>
          <StyledTab value={0}>내가 쓴 글</StyledTab>
          <StyledTab value={1}>내가 쓴 댓글</StyledTab>
          <StyledTab value={2}>북마크</StyledTab>
          <StyledTab value={3}>회원탈퇴</StyledTab>
        </StyledTabsList>

        <StyledTabPanel value={0}>
          <Contents />
        </StyledTabPanel>
        <StyledTabPanel value={1}>
          <Comments />
        </StyledTabPanel>
        <StyledTabPanel value={2}>
          <Bookmark />
        </StyledTabPanel>
        <StyledTabPanel value={3}></StyledTabPanel>
        <AccountDelete open={isOpenModal} handleClose={handleModalClose} />
      </Tabs>
    </div>
  );
}
