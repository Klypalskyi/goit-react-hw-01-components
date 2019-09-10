import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from './Stats.module.css';
import generateRandomColor from '../../helpers/get-random-color';

const LiStyled = styled.li`
  background-color: ${generateRandomColor};
`;

const Stats = ({ title, stats }) => (
  <section className={styles.statsSection}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map(stat => (
        <LiStyled className={styles.item} key={stat.id}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </LiStyled>
      ))}
    </ul>
  </section>
);

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
