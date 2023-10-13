'use client';
import * as React from 'react';
import Tabs from '@mui/base/Tabs';
import {
  AdminInfoContainer,
  Avatar,
  AdminInfoText,
  StyledTabsList,
  StyledTab,
  StyledTabPanel,
} from '@styles/admin.styled';
import Users from '@components/admin/users';
import Contents from '@components/admin/contents';
import Comments from '@components/admin/comments';

interface AdminInfo {
  name: string;
}

export default function AdminPage() {
  const [value, setValue] = React.useState(0);
  const [profileImage, setProfileImage] = React.useState<string | ArrayBuffer | null>('/admin.png');
  const imageRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const userInfo: AdminInfo = {
    name: '관리자',
  };

  // 프로필 이미지 수정
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setProfileImage(reader.result);
      };
    }
  };
  const handleAvatarClick = () => {
    if (imageRef.current) {
      imageRef.current.click();
    }
  };
  return (
    <div className="body-box">
      <AdminInfoContainer>
        <input type="file" ref={imageRef} accept="image/*" style={{ display: 'none' }} onChange={handleChangeFile} />
        <Avatar src={profileImage as string} onClick={handleAvatarClick} />
        <AdminInfoText>
          <div>{userInfo.name}</div>
        </AdminInfoText>
      </AdminInfoContainer>
      <Tabs defaultValue={1}>
        <StyledTabsList>
          <StyledTab value={1}>회원목록</StyledTab>
          <StyledTab value={2}>게시글조회</StyledTab>
          {/* <StyledTab value={3}>컨텐츠 추천 게시글</StyledTab> */}
          <StyledTab value={4}>댓글 조회</StyledTab>
        </StyledTabsList>
        <StyledTabPanel value={1}>
          <Users />
        </StyledTabPanel>
        <StyledTabPanel value={2}>
          <Contents />
        </StyledTabPanel>
        <StyledTabPanel value={3}>Third page</StyledTabPanel>
        <StyledTabPanel value={4}>
          <Comments />
        </StyledTabPanel>
      </Tabs>
    </div>
  );
}
