'use client';
import React from 'react';
import PublicList from '@components/publicList/publicList';

export default function PublicBoard() {
  return (
    <div className="body-box">
      <h3 className="board-title">나의 처방전을 모두와 함께 보고 다른 사람들의 처방전도 볼 수 있습니다</h3>

      <PublicList />
    </div>
  );
}
