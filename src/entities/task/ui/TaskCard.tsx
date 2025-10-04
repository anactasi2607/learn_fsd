import React from "react";
import { Task } from "../model/types";

import styles from "./TaskCard.module.css";

type Props = {
  task: Task;
  onDelete: () => void;
  onToggle: () => void;
};

export default function TaskCard({ task, onDelete, onToggle }: Props) {
  return (
    <div className={styles.root}>
      <label className={styles.wrapper}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span>{task.title}</span>
      </label>
      <button className={styles.button} onClick={onDelete}>
        удалить
      </button>
    </div>
  );
}
