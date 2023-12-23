import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import Icon1 from '../assets/Icon1.png';
import Icon2 from '../assets/Icon2.png';
import Icon3 from '../assets/Icon3.png';
import Logo from '../assets/Logo.png';

const Header = () => {
  const properties = [Icon1, Icon2, Icon3];
  const [currentDate, setCurrentDate] = useState(new Date());

  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  return (
    <header className="header-container">
      <div className="header-second-container">
        <div className="left-content">
          <Link to='/mainpage'>
            <img
                className='logo-image'
                src={Logo}
                alt='Logo'
            />
          </Link>
        </div>
        <nav className="titleContainer">
          <span className="nav-arrow" aria-label="Previous month" onClick={() => changeMonth(-1)}>&#60;</span>
          <div className="title-block">
            <h1 className="title">{currentMonthName}</h1>
            <h2 className="subtitle">{currentYear}</h2>
          </div>
          <span className="nav-arrow" aria-label="Next month" onClick={() => changeMonth(1)}>&#62;</span>
        </nav>
        <div className="right-content">
          {properties.map((Icon, index) => (
            <span key={index} className='icon-button'>
              <img
                className='icon-image'
                src={Icon}
                alt={`Icon ${index + 1}`}
              />
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header;
