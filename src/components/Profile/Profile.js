import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';
import defaultUrlImg from '../defaultUrlImg/defaultUrlImg';

console.log();

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={s.container}>
    <div className={s.description}>
      <img src={avatar} alt={name} className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultUrlImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
