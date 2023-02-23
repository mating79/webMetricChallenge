import css from "./Task.module.scss";
import useInput from "./../../customHooks/useInput";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/tasks";

const AddNewTask = () => {
  const dispatch = useDispatch();

  const title = useInput("");
  const description = useInput("");

  const [modalOpend, setModalOpend] = useState(false);
  const toggle = () => setModalOpend((prev) => !prev);

  const handleAdd = () => {
    const newTask = {
      title: title.value,
      description: description.value,
      completed: false,
    };
    dispatch(addTask(newTask));
    toggle();
  };

  const generateForm = () => (
    <Fragment>
      <div onClick={toggle} className={css.blurBg}></div>
      <div className={css.newTaskContainer}>
        <h4 className={css.modalTitle}>Add New Task</h4>
        <div className={css.inputGroup}>
          <label className={css.label}>title</label>
          <input className="custom-input" {...title} />
        </div>
        <div className={css.inputGroup}>
          <label className={css.label}>description</label>
          <input className="custom-input" {...description} />
        </div>
        <button className="custom-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <button onClick={toggle} className="custom-btn">
        Add New task
      </button>
      {modalOpend && generateForm()}
    </Fragment>
  );
};

export default AddNewTask;
