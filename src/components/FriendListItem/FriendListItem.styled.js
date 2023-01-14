import styled from '@emotion/styled';

export const Online = styled.span`
  display: block;
  padding: 4px 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ status, theme }) => {
    switch (status) {
      case true:
        return theme.colors.green;
      case false:
        return theme.colors.red;
      default:
        return theme.colors.grey;
    }
  }};
`;

export const FriendItem = styled.li`
  display: flex;
  margin: 0.5vw 30vw;
  padding-left: 20px;
  width: 370px;
  height: 70px;

  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
  box-shadow: ${props => `2px 2px 2px ${props.theme.colors.boxGrey}`};

  align-items: center;
  justify-content: flex-start;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin: 20px;
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.black};
  font-family: serif;
  font-size: 26px;
`;
