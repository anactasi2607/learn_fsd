import React from "react";
import TaskList from "widgets/taskList/ui/TaskList";

import styles from "./TaskPage.module.css";

export default function TaskPage() {
  return (
    <div>
      <h1 className={styles.title}>Мои задачи</h1>
      <TaskList />
    </div>
  );
}
