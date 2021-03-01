import React from 'react';
import styles from './Friend.module.css';
import PropTypes from 'prop-types';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span className={isOnline ? styles.Online : styles.Offline}></span>
      <img className={styles.Avatar} src={avatar} alt="avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};

export default Friend;

Friend.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

Friend.propeTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
