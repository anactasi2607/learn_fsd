import React from "react";
import { Task } from "entities/task/model/types";
import TaskCard from "entities/task/ui/TaskCard";

import styles from "./TaskList.module.css";

type Props = {
  tasks: Task[];
  onDeleteTask: (id: Task["id"]) => void;
  onToggleTask: (id: Task["id"]) => void;
};

export default function TaskList({ tasks, onDeleteTask, onToggleTask }: Props) {
  return (
    <ul className={styles.tasks}>
      {tasks.length > 0 &&
        tasks.map((task) => (
          <li key={task.id}>
            <TaskCard
              task={task}
              onDelete={() => onDeleteTask(task.id)}
              onToggle={() => onToggleTask(task.id)}
            />
          </li>
        ))}
      {tasks.length === 0 && <h2>Список задач пока пуст</h2>}
    </ul>
  );
}
