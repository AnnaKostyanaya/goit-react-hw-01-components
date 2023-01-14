import PropTypes from 'prop-types';
import {
  SectionStatistics,
  TitleName,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      {title && <TitleName>{title}</TitleName>}
      <StatList>
        {stats.map(element => (
          <StatItem key={element.id}>
            <Label>{element.label}</Label>
            <Percentage>{`${element.percentage}%`}</Percentage>
          </StatItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};

// const StatElement = ({ stats: { label, percentage } }) => {
//   return (
//     <StatItem>
//       <Label>{label}</Label>
//       <Percentage>{`${percentage}%`}</Percentage>
//     </StatItem>
//   );
// };

// export const Statistics = ({ title, stats }) => {
//   return (
//     <SectionStatistics>
//       {title && <TitleName>{title}</TitleName>}
//       <StatList>
//         {stats.map((element) => (
//           <StatElement key={element.id} stats={element} />
//         ))}
//       </StatList>
//     </SectionStatistics>
//   );
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
