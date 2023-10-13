import React, { useState, ChangeEvent } from 'react';
import { DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { ModalStyledDialog, ModalStyledTextField } from '@styles/modal.styled';

interface SaveModalProps {
  open: boolean;
  onClose: () => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SaveModal: React.FC<SaveModalProps> = ({ open, onClose, value, onChange }) => {
  return (
    <ModalStyledDialog open={open} onClose={onClose}>
      <DialogTitle>처방전 제목</DialogTitle>
      <DialogContent>
        <ModalStyledTextField
          autoFocus
          margin="dense"
          label="처방전의 제목을 입력하세요."
          fullWidth
          value={value}
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ backgroundColor: '#673ab7', color: 'white' }}>
          취소
        </Button>
        <Button
          onClick={onClose}
          disabled={!value}
          style={value ? { backgroundColor: '#673ab7', color: 'white' } : { backgroundColor: 'white', color: 'gray' }}
        >
          저장
        </Button>
      </DialogActions>
    </ModalStyledDialog>
  );
};
