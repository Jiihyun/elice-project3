'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PostContainer } from '@styles/postdetail.styled';
import { createPost, updatePost } from '@http/posts';
import { useRouter } from 'next/navigation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { usePost } from '@hooks/usePost';

export default function UpdatePost({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { post } = usePost(params.id);

  const router = useRouter();
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    emotion: '',
  });

  //입력값 바뀔때마다 저장(콘솔 확인)
  const handleValueChange = (e: any) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log({ name: value });
  };

  //폼 제출
  const handleUpdateSubmit = async (e: any) => {
    e.preventDefault();
    // console.log('수정버튼 클릭!', newPost);
    //TODO: 🍎 게시글 수정 API 요청
    try {
      await updatePost(newPost.title, newPost.content, newPost.emotion);
      console.log('PATCH 요청 성공', newPost);
      router.push(`/recommend-board`);
    } catch (error) {
      console.log('PATCH 요청이 실패했습니다', error);
    }
  };

  if (post === undefined) {
    return <div>게시물이 존재하지 않습니다</div>;
  }

  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>처방전 수정 중..</h2>
        <div>
          <form onSubmit={handleUpdateSubmit}>
            <div className="title-container">
              <p>제목</p>
              <input
                className="title-input"
                name="title"
                type="text"
                defaultValue={post.data.title}
                onChange={handleValueChange}
              />
            </div>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                // checked={post.data.emotion} //TODO: 🍎라디오 버튼 디폴트 값 지정하는 방법
                onChange={handleValueChange}
              >
                <FormControlLabel name="emotion" value="HAPPINESS" control={<Radio />} label="HAPPINESS" />
                <FormControlLabel name="emotion" value="SADNESS" control={<Radio />} label="SADNESS" />
                <FormControlLabel name="emotion" value="ANGER" control={<Radio />} label="ANGER" />
                <FormControlLabel name="emotion" value="FEAR" control={<Radio />} label="FEAR" />
                <FormControlLabel name="emotion" value="LOVE" control={<Radio />} label="LOVE" />
                <FormControlLabel name="emotion" value="SURPRISE" control={<Radio />} label="SURPRISE" />
              </RadioGroup>
            </FormControl>

            <div className="content-container">
              <p>내용</p>
              <input
                className="content-input"
                name="content"
                type="text"
                defaultValue={post.data.content}
                onChange={handleValueChange}
              />
            </div>

            <button type="submit" className="button">
              수정 완료
            </button>
          </form>
        </div>
      </PostContainer>
    </div>
  );
}
