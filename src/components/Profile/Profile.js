import PropTypes from 'prop-types';
import {
  CardWrapper,
  InfoContainer,
  StatInfo,
  Avatar,
  UserName,
  Location,
  Tag,
  Label,
  Quantity,
  Chapter,
} from './Profile.styled';

export const Profile = ({
  username,
  avatar,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <CardWrapper>
        <InfoContainer>
          <Avatar src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <Tag>{`@${tag}`}</Tag>
          <Location>{location}</Location>
        </InfoContainer>

        <StatInfo>
          <Chapter>
            <Label>Followers </Label>
            <Quantity>{followers}</Quantity>
          </Chapter>
          <Chapter>
            <Label>Views </Label>
            <Quantity>{views}</Quantity>
          </Chapter>
          <Chapter>
            <Label>Likes </Label>
            <Quantity>{likes}</Quantity>
          </Chapter>
        </StatInfo>
      </CardWrapper>
    </>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
