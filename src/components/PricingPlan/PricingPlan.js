import React from 'react';
import PropTypes from 'prop-types';
import PrisingItem from './PricingItem/PrisingItem';
import styles from './PrisingPlan.module.css';

const PricingPlan = ({ arr }) => {
  return (
    <ul className={styles.pricingPlan}>
      {arr.map(plan => (
        <li key={plan.id} className={styles.item}>
          <PrisingItem {...plan} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PricingPlan;
