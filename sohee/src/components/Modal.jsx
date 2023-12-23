import React, { useState } from 'react';
import '../styles/Modal.scss'; 

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    onConfirm(inputValue);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <label className="pay-method-title" htmlFor="inputField">추가하실 결제수단을 작성하세요.</label>
          <input
            id="inputField"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="입력하세요"
          />
          <div className="modal-actions">
            <button className="cancle-btn" onClick={onClose}>취소</button>
            <button className="confirm-btn" onClick={handleSubmit}>확인</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
