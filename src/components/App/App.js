import React from 'react';
import styles from './App.module.css';
import Profile from '../Profile/Profile';
import Title from '../Stats/Title/Title';
import Stats from '../Stats/Stats';
import PricingPlan from '../PricingPlan/PricingPlan';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import profiles from '../Profile/profiles.json';
import stats from '../Stats/stats.json';
import plans from '../PricingPlan/pricing-plan.json';
import transactions from '../TransactionHistory/transactions.json';

const App = () => {
  return (
    <div className="container">
      <Title title="Profiles Task" />
      <div
        className={`${styles.taskContainer} ${styles.dFlex} ${styles.bgGrey}`}
      >
        {profiles.map(user => (
          <Profile key={user.id} {...user} />
        ))}
      </div>
      <div className={`${styles.taskContainer} ${styles.dFlex}`}>
        <Stats title="Upload stats" stats={stats} />
      </div>
      <div className={`${styles.taskContainer} ${styles.bgGrey}`}>
        <Title title="Pricing Plans" />
        <PricingPlan arr={plans} />
      </div>
      <div className={styles.taskContainer}>
        <Title title="Transactions History" />
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
