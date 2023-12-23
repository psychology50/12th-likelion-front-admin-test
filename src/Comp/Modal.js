import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log('입력된 값:', inputValue);
    // 여기에 입력 데이터를 처리하는 로직을 추가하세요.
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        입력 받기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>입력</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="사용자 입력"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleSubmit}>제출</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
