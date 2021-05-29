import React from "react"
import PropTypes from 'prop-types';
import defaultUrlImg from '../defaultUrlImg/defaultUrlImg';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar = defaultUrlImg, name, isOnline, id }) => (
      <li className="item" key={id}>
        <span className="status" data-source={isOnline}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
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
