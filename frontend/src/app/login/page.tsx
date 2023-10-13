'use client';
import React from 'react';
import { LoginBox, LoginContainer } from '../../styles/login.styled';
import Link from 'next/link';
import Image from 'next/image';
import { SERVER_URL } from 'common/constants';

export default function Login() {
  return (
    <LoginContainer>
      <h3>로그인</h3>
      <LoginBox>
        <Link href={`${SERVER_URL}/api/auth/login/kakao`}>
          <Image src="/kakao_login.png" alt="kakao" width={200} height={50} />
        </Link>
        <Link href={`${SERVER_URL}/api/auth/login/naver`}>
          <Image src="/naver_login.png" alt="naver" width={200} height={50} />
        </Link>
      </LoginBox>
    </LoginContainer>
  );
}
