import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  width: 350px;
  height: 400px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => `2px 2px 2px ${props.theme.colors.boxGrey}`};
`;

export const InfoContainer = styled.div`
  display: block;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border-radius: 8px;
`;

export const StatInfo = styled.ul`
  display: flex;
  padding: 4px 8px;
  margin-top: 8px;
  border-radius: 4px;
  list-style: none;
  font-family: serif;
  text-align: center;
  background-color: ${props => props.theme.colors.bcgGrey};
`;

export const Chapter = styled.li`
  width: 33%;
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  color: ${props => props.theme.colors.grey};
`;

export const Quantity = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.black};
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-color: ${props => props.theme.colors.grey};
  margin-left: auto;
  margin-right: auto;
`;

export const UserName = styled.p`
  color: ${props => props.theme.colors.black};
  font-family: serif;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

export const Tag = styled.p`
  color: ${props => props.theme.colors.grey};
  font-family: serif;
  font-size: 24px;
  text-align: center;
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.grey};
  font-family: serif;
  font-size: 24px;
  text-align: center;
`;
