import React from 'react';
import Statistics from '../Statistics/Statistics';
import styles from './statisticList.module.css';
import PropTypes from 'prop-types';

const StatisticList = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Title}>{title}</h2>}

      <ul className={styles.List}>
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <Statistics label={label} percentage={percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StatisticList;

StatisticList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
