import React from 'react';
import Balance from './component/Balance'
import Card from './component/Card'
import Days from './component/Days'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="flex">
          <Balance />
          <Days />
        </div>
        <div className="flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
