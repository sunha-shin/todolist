import { colors } from 'GlobalStyle';

export const getColor = (priority: string): string => {
  return colors.priority[priority];
};
