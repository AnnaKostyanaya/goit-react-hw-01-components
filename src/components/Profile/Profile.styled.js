import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  width: 350px;
  height: 400px;
  background-color: white;
  box-shadow: 2px 2px 2px #8080807a;
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
  background-color: #80808014;
`;

export const Chapter = styled.li`
  width: 33%;
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  color: grey;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: #010101;
`;

export const Avatar = styled.img`
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-color: #010101;
  margin-left: auto;
  margin-right: auto;
`;

export const UserName = styled.p`
  color: #010101;
  font-family: serif;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

export const Tag = styled.p`
  color: grey;
  font-family: serif;
  font-size: 24px;
  text-align: center;
`;

export const Location = styled.p`
  color: grey;
  font-family: serif;
  font-size: 24px;
  text-align: center;
`;
