import React from "react";
import { TaskFilterType, useTasks } from "../model/useTasks";
import { Task } from "entities/task/model/types";
import TaskCard from "entities/task/ui/TaskCard";

import styles from "./TaskList.module.css";
import classNames from "classnames";

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
  const { tasks, filter, setFilter, deleteTask } = useTasks(initialTasks);

  return (
    <>
      <ul className={styles.filter}>
        <li>
          <button
            className={classNames(styles.filterButton, {
              [styles.active]: filter === TaskFilterType.ALL,
            })}
            onClick={() => setFilter(TaskFilterType.ALL)}
          >
            Все
          </button>
        </li>
        <li>
          <button
            className={classNames(styles.filterButton, {
              [styles.active]: filter === TaskFilterType.COMPLETED,
            })}
            onClick={() => setFilter(TaskFilterType.COMPLETED)}
          >
            Выполненные
          </button>
        </li>
        <li>
          <button
            className={classNames(styles.filterButton, {
              [styles.active]: filter === TaskFilterType.INCOMPLETED,
            })}
            onClick={() => setFilter(TaskFilterType.INCOMPLETED)}
          >
            Невыполненные
          </button>
        </li>
      </ul>
      <ul className={styles.tasks}>
        {tasks.map((task) => (
          <li>
            <TaskCard key={task.id} task={task} onClick={deleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
}
