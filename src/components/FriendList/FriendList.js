import React from 'react';
import PropTypes from 'prop-types';
import defaultUrlImg from '../defaultUrlImg/defaultUrlImg';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ avatar = defaultUrlImg, name, isOnline, id }) => (
      <li className={s.item} key={id}>
        <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;
