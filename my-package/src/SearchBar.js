import React, { useState } from 'react';
import './css/searchbar.css'; 
import {FaSearch} from 'react-icons/fa'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const packages = [
    {
        packageName: 'Package 1',
        dateReceived: '2023-06-01',
        trackingNumber: '123456789',
        sender: 'John Doe',
        status: 'Ready for pick up',
        itemType: 'Electronics',
        PickupMethod: 'Pickup by self'
      },
      {
        packageName: 'Package 2',
        dateReceived: '2023-06-01',
        trackingNumber: '123456789',
        sender: 'Amazon',
        status: 'Ready for pick up',
        itemType: 'Heavy - Need cart',
        PickupMethod: 'Pickup by self'
      },
      {
        packageName: 'Package 3',
        dateReceived: '2023-06-01',
        trackingNumber: '123456789',
        sender: 'Amazon',
        status: 'Picked up',
        itemType: 'Heavy - Need cart',
        PickupMethod: 'Pickup by self'
      },
      {
        packageName: 'Package 4',
        dateReceived: '2023-06-01',
        trackingNumber: '123456789',
        sender: 'Amazon',
        status: 'Picked up',
        itemType: 'Heavy - Need cart',
        PickupMethod: 'Pickup by self'
      },
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [popupData, setPopupData] = useState(null);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundPackage = packages.find(
      (pkg) => pkg.trackingNumber === searchValue
    );

    if (foundPackage) {
      setPopupData(foundPackage);
    } else {
      setPopupData(null);
      alert('No package found with the provided tracking number.');
    }
  };

  const handleClosePopup = () => {
    setPopupData(null);
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Enter tracking number..."
        />
        <button type="submit">Search</button>
      </form> */}

      <div  className="mb-3 search">
        <Form.Control
           type="text"
           value={searchValue}
           onChange={handleSearchChange}
           placeholder="Enter tracking number..."
        />
         <div id="submitButton" type="submit" onClick={handleSubmit}><img src="./searchIcon.png"></img></div>
      </div>


      {popupData && (
        <div className="popup">
          <div className="popup-content">
            {/* <span className="close" onClick={handleClosePopup}>
              &times;
            </span> */}
             <p className='closeBtn' onClick={handleClosePopup}><img src='./closeIconBlack.png' alt="close icon"></img></p>
            <h2>Package Details</h2>
            <p>Package Name: {popupData.packageName}</p>
            <p>Date Received: {popupData.dateReceived}</p>
            <p>Sender: {popupData.sender}</p>
            <p>Status: {popupData.status}</p>
            <p>Item Type: {popupData.itemType}</p>
            <p>Pickup Method: {popupData.PickupMethod}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;