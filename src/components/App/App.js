import React from 'react';
import styles from './App.module.css';
import Profile from '../Profile/Profile';
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
      <h2 className={styles.title}>Profiles Task</h2>
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
        <h2 className={styles.title}>Pricing Plans</h2>
        <PricingPlan plans={plans} />
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Transactions History</h2>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};

export default App;
