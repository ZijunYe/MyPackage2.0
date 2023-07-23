import React, {Component,useState} from 'react';
import './PackageListing.css'; 
import PickupSelection from './PickupSelection';
import Button from 'react-bootstrap/Button'; 
import PopUp from './Popup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PackageListing = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDates, setSelectedDates] = useState({});
  const customDatePickerStyles = {
    // Your custom styles go here
    // For example:
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    zIndex: '-9999'
    
  };
 

  const handleDateChange = (date, packageId) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [packageId]: date,
    }));
  };

  const handleConfirmPickup = () => {
    if (selectedDates) {
      // You can perform any actions here with the selectedDate
      console.log('Selected pickup date:', selectedDates);
    } else {
      alert('Please select a date for pickup.');
    }
  };

  
  return (
    <div style={{ height: '700px', overflowY: 'scroll' }}>

      <ul>
        {props.packages.map((pkg) => (
          <div key={pkg.trackingNumber} className='package'>
              <div className='section1'>
                    <h1>{pkg.packageName}</h1>
                    <div className='countdown'>
                      <p><span>10</span> <br></br>Days Left</p>
                    </div>
                    <Button id="extendButton" variant="outline-secondary" onClick={() => setOpenModal(true)} className='modalButton'>Extend</Button>
                    <PopUp open={openModal} onClose={() => setOpenModal(false)} />
             </div>
            
                  <div className='section2'>
                    <div><span>Date Received:</span> {pkg.dateReceived}</div>
                    <div><span>Tracking Number#:</span> {pkg.trackingNumber}</div>
                    <div><span>Sender:</span> {pkg.sender}</div>
                    <div><span>Status:</span>{pkg.status}</div>
                  </div>
          
                  <div className='section3'>
                    <div><span>Item Type:</span> {pkg.itemType}</div>
                    <div><span>Pickup Method:</span><PickupSelection />
                    <div><span>Plan date to pick up :</span> 
                     
                    <DatePicker
                     wrapperClassName="datePicker"
                      selected={selectedDates[pkg.id]}
                      onChange={(date) => handleDateChange(date, pkg.id)}
                      minDate={new Date()} // Prevents selecting past dates
                      placeholderText="Click to select a date"
                      style={customDatePickerStyles}/>
                    </div>

                    
                     </div>
                  </div>
          </div>
        ))}

      </ul>
    </div>
  );
};

export default PackageListing;

