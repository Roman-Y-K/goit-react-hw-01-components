import React from 'react';
import Friend from '../Friend/Friend';
import styles from './friendsList.module.css';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.List}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={styles.Item} key={id}>
          <Friend avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
