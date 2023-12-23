import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import DropdownDate from './DropdownDate';
import '../styles/InputPrice.scss';
import Check from '../assets/Check.png';

const InputPrice = () => {
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = [
      currentDate.getFullYear(),
      String(currentDate.getMonth() + 1).padStart(2, '0'),
      String(currentDate.getDate()).padStart(2, '0')
    ].join('');
    setTodayDate(formattedDate);
  }, []); //현재 날짜 표시를 위함

  const handleSubmit = (event) => {
    event.preventDefault(); 
  };
  return (
    <div className='form-wrapper'>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='label-content'>일자</label>
          <input type="text" defaultValue={todayDate}placeholder={todayDate} className="input-field-01"/>
        </div>
        <div className="form-group">
          <label className='label-content'>분류</label>
          <Dropdown  />
        </div>
        <div className="form-group">
          <label className='label-content'>내용</label>
          <input type="text" placeholder="입력하세요" className="input-field" />
        </div>
        <div className="form-group">
          <label className='label-content'>결제수단</label>
            <DropdownDate />
        </div>
        <div className="price-group">
          <label className='label-content'>금액</label>
          <div className="input-wrapper">
            <input type="text" placeholder="입력하세요" className="input-field-01" />
            <span className="currency">원</span>
          </div>
        </div>
        <div className="group">
          <button type="submit" className="submit-button">
            <img
                className='icon-image'
                src={Check}
                alt='check-icon'
              />
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputPrice;