export interface singleTaskType {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface initialStateType {
  list: singleTaskType[];
  searchValue: string;
  filterValue: number;
}
