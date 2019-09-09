import React from 'react';
import PropTypes from 'prop-types';
import styles from './Titile.module.css';

const Title = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
