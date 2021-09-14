import React, {useState} from 'react';

// Days Attribute CardProps
export interface CardProps {
  packageName: string;
  APY: number;
  deposited: number
  interest: number
  details: any
  balance: any
  setBalance: any
  setDeposit: any
}

// Array to create Button (Withdraw, Deposit)
const actionTab = [
  {name: 'Deposit', status: true}, 
  {name: 'Withdrawal', status: false}, 
]



function Card({packageName, APY, deposited, interest, balance, details, setBalance, setDeposit}: CardProps) {
  const [amount, setDepositAmount] = useState<string>();
  const [action, setAction] = useState<boolean>(true);

  // Onclick of Submit 
  const Submit = () => {
    if(action === true) {
      Deposit()
    } else {
      Withdrawal()
    }
  };

  // Calculate Deposit
  const Deposit = () => {
    // Prevent Undefined Value
    if(amount !== undefined) {
      // Calculate New Balance
      const newBalance = parseInt(balance) - parseInt(amount);
      // Prevent Negative Values
      if(newBalance > 0) {
        // Find Index of Array
        var index = details.findIndex((item: { name: string; }) => item.name === packageName);
        // Calculate and Assign deposit 
        details[index].deposit = parseInt(amount) + details[index].deposit;
        // Set Global Balnce Deatils
        setBalance(newBalance)
        // Reset Deposit Input Value
        setDepositAmount('');
      }
    }
  };

  const Withdrawal = () => {
    // Find Index of Array
    var index = details.findIndex((item: { name: string; }) => item.name === packageName);
    // Calculate Total Balance after Withdrawal
    var totalBalance = parseInt(balance) + details[index].deposit
    // Set Global Balnce Deatils
    setBalance(totalBalance);
    // Reset Package Deposit Value
    details[index].deposit = 0
    // Reset Package Interest Value
    details[index].interest = 0
  };

  return (
    <div className="card">
      <div className="card__content">
        <h3 className="card__header">{packageName}</h3>
        <p className="card__info">
          <span>Current APY:</span>
          <span className="right">{APY}%</span>
        </p>
        <p className="card__info">
          <span>Amount Deposited:</span>
          <span className="right">{deposited} USDC</span>
        </p>
        <p className="card__info">
          <span>Accrued Interest:</span>
          <span className="right">{interest.toFixed(2)} USDC</span>
        </p>
        <div className="action">
          {
            //  Looping through the action array to populate the button
             // eslint-disable-next-line array-callback-return
             actionTab.map((item, i) => {
              //  Prevent Null value from populating
              if(item.name != null) {
                return(<button className={`${item.status ? 'active' : 'hidden'} ` } onClick={() => setAction(item.status)}>{item.name}</button>)
              }
            })
          }
          <div className="amount">
            {action === true
              ?
              <div>
                <span>Amount</span>
                  <input type="number"
                  value={amount}
                  onChange={(evt) =>{
                    setDepositAmount(evt.target.value)
                  }} className="right"/>
              </div>
                :
                <p>Click Confirm to Withdraw Interest</p>
            }
          </div>
        </div>
        <button onClick={Submit} className="card__button">Confirm</button>
      </div>
    </div>
  );
}

export default Card;
