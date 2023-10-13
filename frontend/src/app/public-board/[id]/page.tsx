'use client';
import React from 'react';
import Image from 'next/image';
import AiText from '@components/postdetail/AiText';
import CommentsBox from '@components/postdetail/CommentsBox';
import { PostContainer, Text } from '@styles/postdetail.styled';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { usePost } from '@hooks/usePost';

export default function Post({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(params); //=================={id: '4'}이런식으로 찍힘 -> 서버에 연결하면 뜰것같음
  const { post } = usePost(params.id);
  // console.log(post);
  if (post === undefined) {
    return <div>게시물이 존재하지 않습니다</div>;
  }
  //
  //
  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <div>
          <h2>{post.data.title}</h2>
          {post.data.author}
          <div className="button-container">
            <Tooltip
              title="북마크 저장"
              // color="error"
              onClick={(e) => {
                e.stopPropagation();
                // handleDeletePost(row.id);
              }}
            >
              <IconButton>
                <BookmarkBorderIcon />
                <BookmarkIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Text height={'200px'}>
          <h3>텍스트</h3>
          <div className="text">{post.data.content}</div>
        </Text>
        <AiText />
        <CommentsBox />
      </PostContainer>
    </div>
  );
}
