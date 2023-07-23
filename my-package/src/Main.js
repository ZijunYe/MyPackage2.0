import './css/Main.css';
import {FaSearch} from 'react-icons/fa'; 
import TabBar from './list/TabBar';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import SearchBar from './SearchBar'; 

function Main() {
  const { t } = useTranslation();

  return (
    <div className="Main">
      {/* 1. Search Bar 
      2. Tab 
      3. List Package Card 
      4. pop up window 
        - Extend day pop up window 
        -  Pick up method  */}

        <div className='topbar'>
          <div id="topbarElement">
            <img id="mypackageIcon" src='./icon.png'></img>
            <h1>{t('mypackage')}</h1>
            {/* <div className='searchbar'>
                 <input placeholder='Search Package by tracking number'></input>
                  <div><FaSearch id="search-icon" /></div>
                  </div> */}

                  <SearchBar></SearchBar>
          </div>
          <LanguageToggle />
        </div>  
        <TabBar />
        
    </div>
  );
}

export default Main;