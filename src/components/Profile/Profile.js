import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.Profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={styles.Avatar} />
        <p className={styles.Name}>{name}</p>
        <p className={styles.Text}>@{tag}</p>
        <p className={styles.Text}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li className={styles.Item}>
          <span className={styles.Label}>Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={styles.Item}>
          <span className={styles.Label}>Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={styles.Item}>
          <span className={styles.Label}>Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
