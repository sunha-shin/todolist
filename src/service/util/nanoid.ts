import { customAlphabet } from 'nanoid';

export const nanoid = () => {
  const id = customAlphabet('012abc', 6);
  return id;
};
