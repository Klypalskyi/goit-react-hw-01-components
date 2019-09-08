import React from 'react';
import PropTypes from 'prop-types';
import PrisingItem from '../PricingItem/PrisingItem';
import styles from './PrisingPlan.module.css';

const PricingPlan = ({ arr }) => {
  return (
    <ul className={styles.pricingPlan}>
      {arr.map(obj => (
        <li key={obj.label} className={styles.item}>
          <PrisingItem {...obj} />
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
