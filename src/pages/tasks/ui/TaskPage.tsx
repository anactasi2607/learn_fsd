import React from "react";

import TaskWidget from "widgets/task/ui/TaskWidget";
import styles from "./TaskPage.module.css";

export default function TaskPage() {
  return (
    <div>
      <h1 className={styles.title}>Мои задачи</h1>
      <TaskWidget />
    </div>
  );
}
