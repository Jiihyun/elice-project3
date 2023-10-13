'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Mainbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 30px;
`;

export const BoxStyled = styled.div<{ height: number }>(({ height }) => {
  return css`
    height: ${height}px;
    margin: auto;
    text-align: center;
    .button {
      font-size: 30px;
      margin-top: 20px;
    }
  `;
});
