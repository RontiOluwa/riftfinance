import React, {useState, useEffect} from 'react';
import Balance from './component/Balance'
import Days from './component/Days'
import Card from './component/Card'

// Initialize USDC Balance
const USDC_Balance: number = 2000;

// Investment Attribute Interface
interface Investment {
  name: string;
  deposit: number;
  interest: number;
  APY: number;
}


function App() {
  const [balance, setBalance] = useState<number>();
  const [days, setDays] = useState<number>();
  const [details, setPackageDetails] = useState<Investment[]>([
    {
      name: 'Compound',
      deposit: 0,
      interest: 0,
      APY: 5,
    },
    {
      name: 'Aave',
      deposit: 0,
      interest: 0,
      APY: 3,
    },
    {
      name: 'Curve',
      deposit: 0,
      interest: 0,
      APY: 2.5,
    },
  ]);

  useEffect(() => {
    // Store USDC Balance, Interest and in a global state
    setBalance(USDC_Balance);
  }, [])

  return (
    <div className="container">
      <div className="main">
        <ul>
          <Balance USDCBalance={balance}/>
          <Days 
            days={days} 
            setDays={setDays}
            details={details}  
            setDeposit={setPackageDetails} 
          />
        </ul>
        <div className="card__container">
          {
            details.map((item, i) => {
                return(
                  <Card 
                    packageName={item.name} 
                    APY={item.APY} 
                    setBalance={setBalance} 
                    setDeposit={setPackageDetails} 
                    deposited={item.deposit} 
                    interest={item.interest} 
                    balance={balance}
                    details={details}
                  />
                )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
