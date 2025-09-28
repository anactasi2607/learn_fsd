import TaskList from "widgets/taskList/ui/TaskList";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.title}>Мои задачи</h1>
      <TaskList />
    </>
  );
}

export default App;
