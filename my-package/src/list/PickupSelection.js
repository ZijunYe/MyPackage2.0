import React, { useState } from 'react';
import './PickupSelection.css'; 
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const PickupSelection = () => {
  const [pickupOption, setPickupOption] = useState('self');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentNumber: '',
  });

  const handleOptionChange = (event) => {
    setPickupOption(event.target.value);
    if (event.target.value === 'pickupBySomeoneElse') {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };


  // const handleOptionChange = (event) => {
  //   setPickupOption(event.target.value);
  //   if(event.target.value ==='someone'){
  //     openModal(); 
  //     console.log('I reach here'); 
  //   }
  // };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    // You can access the form data from 'formData' state
    // Send the data to the server or perform any desired actions
    console.log('Form submitted:', formData);
    closeModal();
  };

  const openModal = () => {
    setShowModal(true);
    console.log(showModal); 
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div>

      <Form.Select value={pickupOption} onChange={handleOptionChange}>
        <option value="pickupMyself">Pick up myself</option>
        <option value="pickupBySomeoneElse">Pick up by someone else</option>
      </Form.Select>
  
      </div>

      {/* {pickupOption === 'someone' && (
        <div>
          <button onClick={openModal}>Fill Pickup Details</button>
        </div>
      )} */}

      {showModal && (
        <div className="popForm">
  
          <div className="modal-content">
             <span className="close">
              Please provide the person information
            </span> 
  
             <p className='closeBtn' onClick={closeModal}><img src='./closeIconBlack.png' alt="close icon"></img></p>
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <Form.Control
                  className='inputItem'
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}/>
              </label>

              <br></br>
              <label>
                Last Name:
                <Form.Control
                  className='inputItem" '
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                />
              </label>

              <br></br>
              <label>
                Student Number:
                <Form.Control
                  className='inputItem'
                  type="text"
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleFormChange}
                />
              </label>
    
            </form>

            <div className='buttonGroup'>
                <Button variant="secondary" type="button" onClick={closeModal}>Cancel</Button>
                <Button variant="success" type="submit" onClick={closeModal}>Submit</Button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PickupSelection;
