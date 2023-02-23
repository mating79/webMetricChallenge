import { Provider } from "react-redux";
import SearchTasks from "./components/searchTasks/SearchTasks";
import AddNewTask from "./components/tasks/AddNewTask";
import TaskList from "./components/tasks/TaskList";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchTasks />
        <AddNewTask />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
