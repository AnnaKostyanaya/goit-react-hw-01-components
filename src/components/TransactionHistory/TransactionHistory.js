import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableLine,
  TableBody,
  TableTd,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(element => (
          <TableLine key={element.id}>
            <TableTd>{element.type}</TableTd>
            <TableTd>{element.amount}</TableTd>
            <TableTd>{element.currency}</TableTd>
          </TableLine>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

// const ItemElement = ({ items: { type, amount, currency } }) => {
//   return (
//     <TableLine>
//       <TableTd>{type}</TableTd>
//       <TableTd>{amount}</TableTd>
//       <TableTd>{currency}</TableTd>
//     </TableLine>
//   );
// };

// ItemElement.propTypes = {
//   items: PropTypes.exact({
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired,
//   }),
// };
