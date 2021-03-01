import React from 'react';
import styles from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ label, percentage }) => {
  return (
    <>
      <span className={styles.Label}>{label}</span>
      <span className={styles.Percentage}>{percentage}</span>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
