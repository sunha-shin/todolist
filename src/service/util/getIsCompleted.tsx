import { todoIsCompleted } from 'service/const/general';
import CircularProgress from '@mui/material/CircularProgress';

export const getIsCompleted = (completed: string): number => {
  const index = todoIsCompleted.indexOf(completed);
  if (index === 0) return 0;
  if (index === 1) return 50;
  if (index === todoIsCompleted.length - 1) return 100;
  return 0;
};

// export const getProgressbar = () => {
//   return <CircularProgress color={'primary'} variant="determinate" value={100} size={'24px'} />;
// };
