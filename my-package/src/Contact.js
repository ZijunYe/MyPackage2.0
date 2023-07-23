import React, { useState } from 'react';
import './css/Contact.css';
import { useTranslation } from 'react-i18next';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function Contact() {
   const { t } = useTranslation();
   const [showPopup, setShowPopup] = useState(false);
   const [formData, setFormData] = useState({
     name: '',
     studentNumber: '',
     description: '',
   });
 
   const handleInputChange = (event) => {
     const { name, value } = event.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: value,
     }));
   };
 
   const handleSubmit = (event) => {
     event.preventDefault();
     // You can perform any actions here with the form data, e.g., submit it to a server.
     console.log('Form submitted:', formData);
     // Clear the form after submission
     setFormData({
       name: '',
       studentNumber: '',
       description: '',
     });
     // Close the popup after submission
     setShowPopup(false);
   };
 
   const handleOpenPopup = () => {
     setShowPopup(true);
   };
 
   const handleClosePopup = () => {
     setShowPopup(false);
   };
  return (
    <div className="Contact" >
    {/* 1. Map 
    2. Location 
    3. Email address 
    4. Phone number 
    5. Operation Hour  */}
     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11201.589122104433!2d-75.6801335!3d45.4214923!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0509ca890fe5%3A0x47e096d8ec6ef519!2suOttawa%20Postal%20Services!5e0!3m2!1sen!2sca!4v1688220692207!5m2!1sen!2sca" width="100%" height="30%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

     <div className='container'>
        <h3>{t('location')}</h3>
        <p>{t('address')}</p>
     </div>

     <div className='container'>
        <h3>{t('emailAddress')}</h3>
        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGtwMXnwXRGHSHpghbZBvsGJFtC?compose=GTvVlcSGLrfbScKwWsCMvthZHlqBRnjVtsrQLcgmjKxNfZdgPTkXDvfmxLLDKJWZDjhDCdNBbFBbf">prs-post@uottawa.ca</a>
     </div>

     <div className='container'>
        <h3>{t('phoneNumber')}</h3>
        <p>(613)562-5800 ext.6568</p>
     </div>

     <div className='container'> 
        <h3>{t('operationHour')}</h3>
        <p>
        {t('sunday')} - {t('closed')} <br></br>
        {t('monday')} 7:30 a.m.–3:30 p.m.<br></br>
        {t('tuesday')} 7:30 a.m.–3:30 p.m.<br></br>
        {t('wednesday')} 7:30 a.m.–3:30 p.m.<br></br>
        {t('thursday')} 7:30 a.m.–3:30 p.m.<br></br>
        {t('friday')} 7:30 a.m.–3:30 p.m.<br></br>
        {t('saturday')} - {t('closed')} <br></br>
        </p>
     </div>
     <div>
      <Button variant="outline-dark"  onClick={handleOpenPopup}>{t('sendMessage')}</Button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
          <p className='closeBtn' onClick={handleClosePopup}><img src='./closeIconBlack.png' alt="close icon"></img></p>
            <h2>Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="studentNumber">Student Number:</label>
                <Form.Control
                  type="text"
                  id="studentNumber"
                  name="studentNumber"
                  value={formData.studentNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className='comments-textarea'>
                {/* <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                /> */}

              <FloatingLabel controlId="floatingTextarea2" label="Description">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                      />
                    </FloatingLabel>
              </div>
              <Button variant="success" onSubmit={handleSubmit} type="submit">Submit</Button>
            </form>
          </div>
        </div>
      )}
    </div>


    </div>
  );
}

export default Contact;
