import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Graph from './Graph';
import Search from './Search';
import BudgetAndResult from './BudgetAndResult';

function App() {
  const queryFrame = {
    ticker: '',
    date: '',
  };
  const [ticker1Data, setTicker1Data] = useState('');
  const [ticker2Data, setTicker2Data] = useState('');
  const [searchQuery, setSearchQuery] = useState(queryFrame);
  const [budget, setBudget] = useState('');

  const getStockInfo = (stock, startingDate) => {
    axios.get('/stocks', { params: { ticker: stock, date: startingDate } })
      .then((response) => {
        if (!ticker1Data) {
          setTicker1Data(response.data);
        } else if (!ticker2Data) {
          setTicker2Data(response.data);
        }
      })
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   axios.get('/stocks', { params: { ticker: 'msft', date: '2018-01-01' } })
  //     .then((response) => {
  //       setTicker1Data(response.data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <Search
        getStockInfo={getStockInfo}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        budget={budget}
        setBudget={setBudget}
      />
      <BudgetAndResult budget={budget} />
      <button onClick={() => {console.log("ticker1Data: ", ticker1Data, "ticker2Data: ", ticker2Data, "budget: ", budget)}}>Test the data</button>
      {/* <Graph ticker1={ticker1Data} ticker2={ticker2Data} /> */}
    </div>
  );
}

export default App;
