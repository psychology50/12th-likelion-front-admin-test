import React, { useState } from 'react';
import useDropdown from '../hooks/useDropdown';
import '../styles/Dropdown.scss';

const Dropdown = () => {
    const { isOpen, toggle } = useDropdown();
    const [selectedLabel, setSelectedLabel] = useState('선택하세요'); 

    const items = [
        { id: 'living', label: '생활' },
        { id: 'food', label: '식비' }, 
        { id: 'transport', label: '교통' },
        { id: 'shopping', label: '쇼핑/뷰티' },
        { id: 'health', label: '의료/건강' },
        { id: 'culture', label: '문화/여가' },
        { id: 'etc', label: '미분류' },
    ];

    const handleItemClick = (label) => {
        setSelectedLabel(label); 
        toggle(); 
    };

  return (
    <>
      <button onClick={toggle} className="dropdown-button">
        {selectedLabel} 
      </button>
      {isOpen && (
        <div className='drop-box'>
            <ul className="dropdown-menu">
            {items.map(item => (
                <li key={item.id}><a href={`#${item.id}`} onClick={() => handleItemClick(item.label)}>{item.label}</a></li>
            ))}
            </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
