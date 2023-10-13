'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { PostContainer } from '@styles/postdetail.styled';
import { createPost } from '@http/posts';
import { useRouter } from 'next/navigation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function CreatePost() {
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
  const handleSumbit = async (e: any) => {
    console.log('게시글 생성버튼!', newPost); //제대로 가고있음

    e.preventDefault();
    if (newPost.title == '' || newPost.content == '' || newPost.emotion == '') {
      alert('모든 항목을 채워주세요!');
      return;
    }

    //TODO : 🍎게시글 생성
    try {
      await createPost(newPost.title, newPost.content, newPost.emotion);
      console.log('POST 요청 성공');
      router.push('/recommend-board');
    } catch (error) {
      console.log('POST 요청이 실패했습니다', error);
    }
  };

  return (
    <div>
      <PostContainer>
        <Image src="/red-cross.png" alt="빨간십자가처방전" width={100} height={100} />
        <h2>처방전 작성 중..</h2>
        <div>
          <form onSubmit={handleSumbit}>
            <div className="title-container">
              <p>제목</p>
              <input
                className="title-input"
                name="title"
                type="text"
                placeholder="제목을 입력해 주세요"
                onChange={handleValueChange}
              />
            </div>

            {/* 감정 카테고리 선택하기 */}
            <FormControl>
              {/* <FormLabel id="demo-row-radio-buttons-group-label">감정 카테고리</FormLabel> */}
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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
                placeholder="내용을 입력해 주세요"
                onChange={handleValueChange}
              />
            </div>

            <button type="submit" className="button">
              저장하기
            </button>
          </form>
        </div>
      </PostContainer>
    </div>
  );
}
