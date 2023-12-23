import React, { useState, useEffect } from 'react';
import useDropdown from '../hooks/useDropdown';
import Modal from './Modal';
import '../styles/Dropdown.scss';
import Delete from '../assets/Delete.png';
import axios from 'axios';

const DropdownDate = () => {
  const { isOpen, toggle } = useDropdown();
  const [isModalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState([
    { id: 'add', label: '추가하기', action: () => setModalOpen(true) },
  ]);
  const [selectedItemLabel, setSelectedItemLabel] = useState('선택하세요');

  useEffect(() => {
    fetchData();
  }, []);

  const addNewItem = (newLabel) => {
    const newItem = { id: newLabel.toLowerCase(), label: newLabel, action: () => {} };
    setItems([...items, newItem]);
  };

  const deleteItem = async (id) => {
    try {
     
      await axios.delete(`http://49.50.164.193:8080/api/payment/${id}`);
      console.log(`Item with id ${id} deleted.`);
      
    
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
  

      if (id.toLowerCase() === selectedItemLabel.toLowerCase()) {
        setSelectedItemLabel('선택하세요');
      }
    } catch (error) {
      console.error('Error deleting payment method:', error);
    }
  };
  
  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://49.50.164.193:8080/api/payment');
      const paymentMethods = response.data;
  
      const paymentItems = Object.keys(paymentMethods).map((key) => {
        const method = paymentMethods[key];
       
        const label = typeof method === 'object' ? method.name : method;
        return {
          id: key.toLowerCase(),
          label: label,
          action: () => setSelectedItemLabel(label) 
        };
      });
  
      setItems(existingItems => [...existingItems, ...paymentItems]);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    }
  };
  

  const handleItemClick = (item) => {
    setSelectedItemLabel(item.label);
    item.action();
  };

  return (
    <>
      <button onClick={toggle} className="dropdown-button">
        {selectedItemLabel}
      </button>
      {isOpen && (
        <div className='drop-box'>
          <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={item.id}>
                <a href="#!" onClick={(e) => { e.preventDefault(); handleItemClick(item); }}>{item.label}</a>
                {item.id !== 'add' && (
                <button onClick={() => deleteItem(item.id)}>
                    <img className='delete-image' src={Delete} alt='delete-icon' />
                </button>
                )}
            </li>
            ))}
          </ul>
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onConfirm={addNewItem} />
    </>
  );
};

export default DropdownDate;
