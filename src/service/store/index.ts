import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import todoReducer from 'redux/todo/todoReducer';

export const createStore = () =>
  configureStore({
    reducer: {
      todoReducer,
      //   Other reducers...
    },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export function useAppSelector<T>(fn: (state: RootState) => T): T {
  return useSelector<RootState, T>(fn);
}
export const useAppDispatch = () => useDispatch<AppDispatch>();
