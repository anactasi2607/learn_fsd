import React from "react";
import { Task } from "../model/types";

import styles from "./TaskCard.module.css";

type Props = {
  task: Task;
  onClick: (id: string) => void;
};

export default function TaskCard({ task, onClick }: Props) {
  return (
    <div className={styles.root}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.completed}
        disabled
      />
      <span>{task.title}</span>
      <button className={styles.button} onClick={() => onClick(task.id)}>
        удалить
      </button>
    </div>
  );
}
