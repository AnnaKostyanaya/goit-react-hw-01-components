import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 65vw;
  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
`;

export const TableHead = styled.thead`
  height: 35px;
  font-size: 18px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  background-color: #89bde0;
  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
`;

export const TableLine = styled.tr`
  height: 35px;
  font-size: 16px;
  color: grey;
  text-align: center;
  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
`;

export const TableBody = styled.tbody`
  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
`;

export const TableTd = styled.td`
  border: ${props => `1px solid ${props.theme.colors.boxGrey}`};
`;
