import { todoIsCompleted } from 'service/const/general';

export const getIsCompleted = (completed: string): number => {
  const index = todoIsCompleted.indexOf(completed);
  if (index === 0) return 0;
  if (index === 1) return 50;
  if (index === todoIsCompleted.length - 1) return 100;
  return 0;
};
