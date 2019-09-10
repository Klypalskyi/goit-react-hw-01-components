import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrisingItem.module.css';
import { IconStyled, TitleStyled, ButtonStyled } from './PricingItem.styled';

const PrisingItem = ({ label, icon, capacity, price, description }) => {
  return (
    <div className={styles.pricingItem}>
      <IconStyled className={styles.icon} icon={icon} />
      <TitleStyled className={styles.label} label={label}>
        {label}
      </TitleStyled>
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <ButtonStyled className={styles.button} label={label} type="button">
        Get Started
      </ButtonStyled>
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
