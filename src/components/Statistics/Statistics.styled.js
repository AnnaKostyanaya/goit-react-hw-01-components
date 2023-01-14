import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  display: block;
  margin-top: 50px;
  width: 500px;
  height: 200px;
  border-radius: 4px;
  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
  margin-left: auto;
  margin-right: auto;
`;

export const TitleName = styled.h2`
  display: block;
  height: 65px;
  padding-top: 35px;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.grey};
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  height: 100px;
  font-family: serif;
  font-size: 24px;
  text-align: center;
`;

export const StatItem = styled.li`
  width: 100px;
  padding-top: 25px;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  color: ${props => props.theme.colors.white};
`;

export const Percentage = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.white};
`;
