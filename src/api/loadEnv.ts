export const loadEnv = (): string => {
  if (process.env.REACT_APP_STAGE === 'development') {
    return process.env.REACT_APP_API_ADDRESS_DEV as string;
  } else {
    return process.env.REACT_APP_API_ADDRESS_PROD as string;
  }
};
