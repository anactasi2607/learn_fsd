import React from "react";
import { useTasks } from "../model/useTasks";
import { Task } from "entities/task/model/types";
import TaskCard from "entities/task/ui/TaskCard";

import styles from "./TaskList.module.css";

const initialTasks: Task[] = [
  { id: "1", title: "Купить хлеб", completed: true },
  { id: "2", title: "Погладить кота", completed: true },
  {
    id: "3",
    title: "Сделать первое задание на курсе middle frontend",
    completed: false,
  },
  {
    id: "4",
    title: "Сделать второе задание на курсе middle frontend",
    completed: false,
  },
];

export default function TaskList() {
  const { tasks, deleteTask } = useTasks(initialTasks);

  return (
    <ul className={styles.root}>
      {tasks.map((task) => (
        <li>
          <TaskCard key={task.id} task={task} onClick={deleteTask} />
        </li>
      ))}
    </ul>
  );
}
