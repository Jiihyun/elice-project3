'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PostContainer = styled.div`
  text-align: center;
  background-color: white;
  // background: rgba(255, 255, 255, 0.45);
  color: #3f4499;
  margin: auto;
  margin-bottom: 100px;
  padding: 20px;
  height: auto;
  width: 700px;
  border: 10px double #3f4499;
  outline: 10px solid white;
  border-radius: 40px;

  .button-container {
    text-align: right;
    margin-right: 10px;
  }

  .title-input {
    width: 600px;
    height: 30px;
  }
  //TODO: 🎨 input 크기에 맞게 글 작성되게
  .content-input {
    width: 600px;
    height: 200px;
  }
`;

export const Text = styled.div<{ height: string }>(({ height }) => {
  return css`
    border: 3px solid #3f4499;
    border-radius: 30px;
    height: ${height};
    margin-bottom: 10px;
    padding-bottom: 10px;
    text-align: left;

    h3 {
      border-bottom: 3px solid;
      padding-left: 10px;
    }
    .text {
      padding: 0 10px;
    }

    .comment-input {
      height: 100px;
      width: 645px;
      margin: 10px 20px;
    }

    .button-container {
      text-align: right;
      margin-right: 10px;
    }
  `;
});

export const ContBox = styled.div`
  display: flex;
  justify-content: center;
  .cont-box {
    text-align: center;
    border: solid;
    padding: 10px;
  }
`;

export const CommentList = styled.div``;
