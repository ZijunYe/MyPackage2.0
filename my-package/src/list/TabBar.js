import React, { useState } from 'react';
import './TabBar.css';
import PackageListing from './PackageListing';
import { useTranslation } from 'react-i18next';

const packages = [
  {
    id:1, 
    packageName: 'Package 1',
    dateReceived: '2023-06-01',
    trackingNumber: '123456789',
    sender: 'John Doe',
    status: 'Ready for pick up',
    itemType: 'Electronics',
    PickupMethod: 'Pickup by self', 
    pickupDate: null,
  },
  {
    id:2,
    packageName: 'Package 2',
    dateReceived: '2023-06-01',
    trackingNumber: '123496789',
    sender: 'Amazon',
    status: 'Ready for pick up',
    itemType: 'Heavy - Need cart',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },
  {
    id:3,
    packageName: 'Package 3',
    dateReceived: '2023-06-01',
    trackingNumber: '129456789',
    sender: 'Amazon',
    status: 'Picked up',
    itemType: 'Heavy - Need cart',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },
  {
    id:4, 
    packageName: 'Package 4',
    dateReceived: '2023-06-01',
    trackingNumber: '123496789',
    sender: 'Amazon',
    status: 'Picked up',
    itemType: 'Heavy - Need cart',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },

]

const readyPackage = [
  {
    id:1, 
    packageName: 'Package 1',
    dateReceived: '2023-06-01',
    trackingNumber: '129456789',
    sender: 'John Doe',
    status: 'Ready for pick up',
    itemType: 'Electronics',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },
  {
    id:2,
    packageName: 'Package 2',
    dateReceived: '2023-06-01',
    trackingNumber: '9986',
    sender: 'Amazon',
    status: 'Ready for pick up',
    itemType: 'Heavy - Need cart',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },
]

const pickedupPackage = [
  {
    id:3, 
    packageName: 'Package 3',
    dateReceived: '2023-06-01',
    trackingNumber: '',
    sender: 'Amazon',
    status: 'Picked up',
    itemType: 'Heavy - Need cart',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },
  {
    id:4,
    packageName: 'Package 4',
    dateReceived: '2023-06-01',
    trackingNumber: '123456789',
    sender: 'Amazon',
    status: 'Picked up',
    itemType: 'Heavy - Need cart',
    PickupMethod: 'Pickup by self',
    pickupDate: null,
  },

]




const TabBar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  
  const { t } = useTranslation();

  return (
    <div>
      <div className="tab-bar">
        <button
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          {t('all')}
        </button>
        <button
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          {t('readyforpickup')}
        </button>
        <button
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          {t('pickup')}
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 0 && <div>
           <PackageListing packages={packages} />
          </div>}
        {activeTab === 1 && <div><PackageListing packages={readyPackage} /></div>}
        {activeTab === 2 && <div><PackageListing packages={pickedupPackage} /></div>}
      </div>
    </div>
  );
};

export default TabBar;
