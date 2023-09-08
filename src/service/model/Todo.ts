export interface Todo {
  id: string | number;
  title: string | number;
  isCompleted?: number;
  priority: string;
}

export const todoIsCompeted: string[] = ['Todo', 'InProgress', 'Done'];
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
