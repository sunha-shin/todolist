import CircularProgress from '@mui/material/CircularProgress';

export interface Todo {
  id: string | number;
  title: string | number;
  desc?: string | number;
  isCompleted?: number;
}

export const todoIsCompeted: string[] = ['Todo', 'InProgress', 'Done', 'aaa'];
// export const todoIsCompletedIcon: any[] = [<CircularProgress />]

// interface User {
//   id?: number;
//   name: string;
// }

// const user: User = {
//   id: 1,
//   name: 'hong',
// };

// const aFunc = (id: number) => {
//   console.log(id);
// };

// aFunc(user.id as number); // type assertion
