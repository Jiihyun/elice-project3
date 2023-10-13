// 'use client'; //
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Title, Div, ContentWrap, BottomButton, Input } from '@styles/accountDelete.styled';
import { deleteUser } from '@http/users';
import { useRouter } from 'next/navigation';

// 회원탈퇴 API 완료 -> 탈퇴 안됨 ㅠㅠ -> 탈퇴완료!

interface AccountDeleteProps {
  open: boolean;
  handleClose: () => void;
}
export default function AccountDelete({ open, handleClose }: AccountDeleteProps) {
  const [inputValue, setInputValue] = React.useState('');
  const [isInputValid, setIsInputValid] = React.useState(false);
  const router = useRouter();

  //유효성 검사
  const correctWord = '회원탈퇴를 동의합니다.';
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsInputValid(e.target.value === correctWord);
  };
  const showValidationMessage = inputValue && (isInputValid ? '' : '일치하지 않습니다.');

  // reset
  const resetInput = () => {
    setInputValue('');
    setIsInputValid(false);
  };
  const handleModalClose = () => {
    resetInput();
    handleClose();
  };

  // API
  const handleConfirm = async () => {
    if (isInputValid) {
      try {
        await deleteUser();
        alert('회원 탈퇴가 완료되었습니다.');
        handleClose();
        router.replace('/');
      } catch (error) {
        alert('회원 탈퇴 중 오류가 발생했습니다.');
      }
    }
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>회원탈퇴</Title>
          <ContentWrap>
            <Div>✓ 탈퇴시 고객 정보가 삭제됩니다.</Div>
            <Div style={{ marginTop: '30px' }}>✓ 사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</Div>
            <Div style={{ marginTop: '30px' }}>
              ✓ 탈퇴하신 아이디로는 다시 회원가입을 하실 수 없습니다. (다른 아이디로 가입)
            </Div>
            <Div style={{ marginTop: '70px' }}> ✓ 다음을 입력해주세요 : </Div>
            <Div style={{ marginTop: '10px', color: 'red' }}>{correctWord}</Div>
            <Input
              style={{ marginTop: '20px', fontSize: '14px', textAlign: 'center' }}
              value={inputValue}
              onChange={handleInputChange}
            />
            {showValidationMessage && <Div style={{ marginTop: '10px' }}>{showValidationMessage}</Div>}
          </ContentWrap>
          <BottomButton
            style={{
              marginTop: '50px',
              backgroundColor: isInputValid ? undefined : 'gray',
              cursor: isInputValid ? 'pointer' : 'not-allowed',
            }}
            onClick={handleConfirm}
            disabled={!isInputValid}
          >
            탈퇴하기
          </BottomButton>
        </Box>
      </Modal>
    </div>
  );
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 8,
};
