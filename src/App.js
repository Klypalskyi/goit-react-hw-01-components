import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Title from './components/Title/Title';
import Stats from './components/Stats/Stats';
import PricingPlan from './components/PricingPlan/PricingPlan';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import profiles from './components/Profile/profiles.json';
import stats from './components/Stats/stats.json';
import plans from './components/PricingPlan/pricing-plan.json';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="container">
      <Title title="Profiles Task" />
      {/* <h2 className="title">Profiles Task</h2> */}
      <div className="task-container d-flex bg-grey">
        {profiles.map(user => (
          <Profile key={user.id} {...user} />
        ))}
      </div>
      <div className="task-container d-flex">
        <Stats title="Upload stats" stats={stats} />
      </div>
      <div className="task-container bg-grey">
        <Title title="Pricing Plans" />
        <PricingPlan arr={plans} />
      </div>
      <div className="task-container">
        <Title title="Transactions History" />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;
