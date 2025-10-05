import React from "react";
import { Task } from "../model/types";

import styles from "./TaskCard.module.css";

type Props = {
  task: Task;
  onDelete: (id: Task["id"]) => void;
  onToggle: (id: Task["id"]) => void;
};

function TaskCardComponent({ task, onDelete, onToggle }: Props) {
  return (
    <div className={styles.root}>
      <label className={styles.wrapper}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button className={styles.button} onClick={() => onDelete(task.id)}>
        удалить
      </button>
    </div>
  );
}

export default React.memo(TaskCardComponent);
