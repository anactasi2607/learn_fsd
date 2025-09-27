import TaskCard from "entities/task/ui/TaskCard";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <h1 className={styles.title}>Мои задачи</h1>
      <TaskCard id="1" title="задача" completed />
    </>
  );
}

export default App;
