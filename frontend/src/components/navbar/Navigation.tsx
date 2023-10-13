'use client';
import Link from 'next/link';
import React from 'react';
import { useUser } from '@hooks/useUser';
import { Nav } from '../../styles/Navigation.styled';
import { SERVER_URL } from '../../common/constants';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { apiClient } from '@http/apiClient';
import DefaultProfileImage from '/public/profile-img.png';

export const Navigation = () => {
  const router = useRouter();

  const mypageHandler = () => {
    router.push('/my-page');
  };

  // const handleClickLogin = () => {
  //   // axios.get
  //   // apiClient.get({}).catch((error) => {
  //   //   if (error.message) {
  //   //     alert('error.message');
  //   //   }
  //   // });
  // };

  const handleClickLogout = () => {
    try {
      apiClient.post(`/auth/logout`);
      router.push('/');
      alert('로그아웃 완료!!!!');
    } catch (error) {
      console.log(error);
      alert('로그아웃 실패!!!!');
    }
  };
  const { user } = useUser();

  if (!user) {
    return (
      <Nav className="nav-wrapper">
        <Link href="/" className="home">
          마음 처방전
        </Link>

        <ul className="menu">
          <Link href="/login">
            <img src="user.png" className="nav-user-profile" />
          </Link>
        </ul>
      </Nav>
    );
  }

  return (
    <header>
      <Nav className="nav-wrapper">
        <Link href="/" className="home">
          마음 처방전
        </Link>
        <ul className="menu">
          <Link href="/public-board">
            <li>공유게시판</li>
          </Link>
          <Link href="/recommend-board">
            <li>추천게시판</li>
          </Link>
          <div className="dropdown">
            <Image
              src={user.profileImg ?? DefaultProfileImage}
              className="nav-user-profile-dropbtn"
              width={50}
              height={50}
              alt="유저 기본 이미지"
            />
            <div className="dropdown-content">
              <button className="button" onClick={mypageHandler}>
                {user.nickname}
              </button>

              {/* 로그아웃 TODO: 온클릭으로 post! */}
              <button className="button" onClick={handleClickLogout}>
                logout
              </button>
            </div>
          </div>
        </ul>
      </Nav>
    </header>
  );
};
