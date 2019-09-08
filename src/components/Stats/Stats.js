import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';
import Title from '../Title/Title';

const generateRandomColor = () => {
  const r = Math.round(Math.random() * 255); // red 0 to 255
  const g = Math.round(Math.random() * 255); // green 0 to 255
  const b = Math.round(Math.random() * 255); // blue 0 to 255
  return `rgb(${r},${g},${b})`;
};

const Stats = ({ title, stats }) => {
  return (
    <section className={styles.statsSection}>
      <Title title={title} />
      <ul className={styles.statList}>
        {stats.map(el => (
          <li
            key={el.id}
            className={styles.item}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={styles.label}>{el.label}</span>
            <span className={styles.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.defaultProps = {
  title: '',
  stats: {
    percentage: 0,
  },
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ),
};

export default Stats;
