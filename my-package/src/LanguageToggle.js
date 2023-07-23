import React from 'react';
import './css/Main.css';
import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    // <div>
    //   <button onClick={() => handleLanguageChange('en')}>English</button>
    //   <button onClick={() => handleLanguageChange('fr')}>Français</button>
    // </div>

    <DropdownButton variant="secondary" id="dropdown-basic-button" title="Language Setting">
        <Dropdown.Item  onClick={() => handleLanguageChange('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => handleLanguageChange('fr')}>Français</Dropdown.Item>
    </DropdownButton>


  );
};

export default LanguageToggle;
