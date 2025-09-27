import React from "react";
import { Task } from "../model/types";

import styles from "./TaskCard.module.css";

type Props = Task;

export default function TaskCard({ title, completed }: Props) {
  return (
    <div className={styles.root}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        disabled
      />
      <span>{title}</span>
    </div>
  );
}
