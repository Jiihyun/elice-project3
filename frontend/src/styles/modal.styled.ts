import styled from '@emotion/styled';
import { TextField, Dialog } from '@mui/material';

// 저장하기 버튼 클릭 시 제목 지정 모달
export const ModalStyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 800px;
    height: 250px;

    @media (max-width: 600px) {
      width: 90%;
      height: 90%;
    }
  }
`;
/// input 값 입력시 라인 색상
export const ModalStyledTextField = styled(TextField)`
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
