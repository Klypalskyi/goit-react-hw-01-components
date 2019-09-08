import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrisingItem.module.css';

const getColor = el => {
  let color = '';
  if (el === 'Bronze') color = '#dc7c4a';
  if (el === 'Siver') color = '#c0c0c0';
  if (el === 'Gold') color = '#dda431';

  return color;
};
const PrisingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className={styles.pricingItem}>
      <i className={styles.icon} style={{ content: `url(${icon})` }} />
      <h3
        className={styles.label}
        style={{
          color: getColor(label),
        }}
      >
        {label}
      </h3>
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button
        className={styles.button}
        style={{
          backgroundColor: getColor(label),
        }}
        type="button"
      >
        Get Started
      </button>
    </div>
  );
};

PrisingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PrisingItem;
