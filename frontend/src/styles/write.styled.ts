import styled from '@emotion/styled';
import { Box, Typography, TextField, Button, Dialog } from '@mui/material';

// 불투명 박스
export const BodyBox = styled(Box)`
  text-align: center;
  background-color: white;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 100px;
  padding: 20px;
  height: 700px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 40px;
`;

export const ChatContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 650px;
  padding: 16px;
  /* background-color: red; */
`;

export const MessagesContainer = styled(Box)`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Message = styled(Box)`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 8px;
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 4px;
  /* background-color: black; */
`;

// 메세지
export const MessageText = styled(Typography)<{ $isUser: boolean }>`
  ${({ $isUser }) => `
    background-color: ${$isUser ? '#b441cb' : '#20248a'};
    padding: 20px;
    border-radius: 10px;
    max-width: 100%;
  `}
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #8c8a8a;
  margin: 8px 0;
`;

// input + send
export const ChatInputContainer = styled(Box)`
  display: flex;
  gap: 8px;
  padding: 16px;
  /* margin: 100px; */
  margin: 0px;
  /* margin-top: 0;
  margin-bottom: 10px; */
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  justify-content: flex-end; // 오른쪽 정렬을 위한 속성 추가
`;

// input 값 입력시 라인 색상
export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #673ab7;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #673ab7;
  }
  & .MuiOutlinedInput-input:focus {
    border-color: #673ab7;
  }
`;

//Enter 버튼
export const EnterButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? '#BDBDBD' : '#673AB7')};
  color: #ffffff;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#BDBDBD' : '#673AB7')};
  }
`;
