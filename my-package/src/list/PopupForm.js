import React from 'react';
import './PackageListing.css'; 

const PopupForm = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();}}
        className='modalContainer'
      >
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}><img src='./closeIcon.png' alt="close icon"></img></p>
          <div className='content'>
            <img src='./checkIcon.png' alt='check icon'></img>
            {/* <div>
             <h3>You Successful extended the pick up date!</h3>
             <p>Next due day: <span>08/22/2023</span></p>
            </div> */}
          </div>
            <div className="info">
              <img src="./info-icon.png" alt="infomation icon"></img>
              <p>Please notes: each package only have one chance to extend the pick up day!</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;