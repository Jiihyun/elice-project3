'use client';
import RecommendList from '@components/recommendList/recommendList';
import Link from 'next/link';
import React from 'react';

export default function RecommendBoard() {
  return (
    <div className="body-box">
      <h3 className="board-title">서로에게 직접 컨텐츠를 추천해 보세요</h3>

      <RecommendList />
      <button className="button">
        <Link href="/recommend-board/create-post">새로운 글 쓰기</Link>
      </button>
    </div>
  );
}
