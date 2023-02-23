import { useDispatch } from "react-redux";
import { completeTask } from "../../redux/slices/tasks";
import { singleTaskType } from "../../redux/sliceTypes/tasks.type";
import css from "./Task.module.scss";

interface singleTask {
  item: singleTaskType;
  index?: number;
}

const SingleTask = ({ item }: singleTask) => {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <div>
        <h6 className={css.title}>
          {item.title}
          {item.completed ? (
            <span className={css.badge}>Completed</span>
          ) : (
            <></>
          )}
        </h6>
        <span className={css.description}>{item.description}</span>
      </div>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => dispatch(completeTask(item))}
      />
    </div>
  );
};

export default SingleTask;
