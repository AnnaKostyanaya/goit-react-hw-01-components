import styled from '@emotion/styled';

export const Online = styled.span`
  display: block;
  padding: 4px 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return '#4caf50';
      case false:
        return '#f44336';
      default:
        return '#010101';
    }
  }};
`;

export const FriendItem = styled.li`
  display: flex;
  margin: 10px;
  padding-left: 20px;
  width: 370px;
  height: 70px;

  border: 1px solid #8080807a;
  box-shadow: 2px 2px 2px #8080807a;

  align-items: center;
  justify-content: flex-start;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px;
`;

export const Name = styled.p`
  color: #010101;
  font-family: serif;
  font-size: 26px;
`;
