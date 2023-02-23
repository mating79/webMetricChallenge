import SingleTask from "./SingleTask";
import css from "./Task.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { singleTaskType } from './../../redux/sliceTypes/tasks.type';

const TaskList = () => {
  const { list, searchValue, filterValue } = useSelector(
    (state: RootState) => state.tasks
  );

  const statusCondition = (completed: boolean) => filterValue == 1 ? completed : filterValue == 2 ? !completed : true;

  const searchCondition = (item: singleTaskType) =>`${item.title} - ${item.description}`.toLowerCase().includes(searchValue.toLowerCase());
 
  const filteredList = list.filter((item) => searchCondition(item) && statusCondition(item.completed));

  return (
    <div className={css.taskListContainer}>
      {filteredList.map((item) => (
        <SingleTask key={`${item.id}`} item={item} />
      ))}
    </div>
  );
};

export default TaskList;
