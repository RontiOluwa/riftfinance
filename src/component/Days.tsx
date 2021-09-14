/* eslint-disable array-callback-return */
import React from 'react';

// Days Attribute Interface
export interface DaysProps {
  days: any;
  setDays: any,
  details: any
  setDeposit: any
}

function Days({days, setDays, details, setDeposit}: DaysProps) {

  // Calculate Interest
  const setInterest = () => {
    // Prevent Null Days Value
    if(days != null) {
      // Loop through Investment Package Array
      details.map((item: any, i: any) => {
        // Calculate Percentage Perday
        const PercentagePerDay = (item.APY / 365);
        // Getting Interest Using Simple Interest Formular
        const interest: any = ((item.deposit * PercentagePerDay * days) / 100)
        // Assigning Interest value to Investment Interest
        details[i].interest = interest
        // Clear days input Value
        setDays('')
      })
    }
  };

  return (
    <li className="topList right-list days">
      <span>
        Days of Progress: 
      </span>
      <input 
        value={days} 
        type="number"
        onChange={(evt) =>{
          setDays(evt.target.value)
        }}
      />
      <button className='card__button' onClick={setInterest}>Enter</button>
    </li>
  );
}

export default Days;
