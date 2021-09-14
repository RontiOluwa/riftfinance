import React from 'react';

export interface CardProps {
  USDCBalance: number | undefined;
}

function Balance({USDCBalance}: CardProps) {
  return (
    <li className="topList">
      <span>
        USDC Balance: {USDCBalance} USDC
      </span>
    </li>
  );
}

export default Balance;
