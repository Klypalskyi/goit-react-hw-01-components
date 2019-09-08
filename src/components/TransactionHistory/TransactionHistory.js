import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <td>Type</td>
          <td>Amount</td>
          <td>Currency</td>
        </tr>
      </thead>
      <tbody>
        {items.map(obj => (
          <tr className={styles.tableRow} key={obj.id}>
            <td className={styles.ttype}>{obj.type}</td>
            <td>{obj.amount}</td>
            <td>{obj.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
