import PropTypes from 'prop-types';

import { Online, FriendItem, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends: { isOnline, avatar, name } }) => {
  return (
    <FriendItem>
      <Online status={isOnline}>{isOnline}</Online>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
