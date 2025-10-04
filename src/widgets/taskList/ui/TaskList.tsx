import classNames from "classnames";
import React from "react";
import { Task } from "entities/task/model/types";
import TaskCard from "entities/task/ui/TaskCard";
import { TaskFilterType, useTasks } from "../model/useTasks";

import styles from "./TaskList.module.css";

const INITIAL_TASK: Task[] = [
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

const FILTER_OPTIONS = [
  {
    id: 1,
    type: TaskFilterType.ALL,
    title: "Все",
  },
  {
    id: 2,
    type: TaskFilterType.COMPLETED,
    title: "Выполненные",
  },
  {
    id: 3,
    type: TaskFilterType.INCOMPLETED,
    title: "Невыполненные",
  },
];

export default function TaskList() {
  const { tasks, filter, setFilter, deleteTask } = useTasks(INITIAL_TASK);

  return (
    <>
      <ul className={styles.filter}>
        {FILTER_OPTIONS.map((option) => (
          <li key={option.id}>
            <button
              className={classNames(styles.filterButton, {
                [styles.active]: filter === option.type,
              })}
              onClick={() => setFilter(option.type)}
            >
              {option.title}
            </button>
          </li>
        ))}
      </ul>
      <ul className={styles.tasks}>
        {tasks.length > 0 &&
          tasks.map((task) => (
            <li key={task.id}>
              <TaskCard task={task} onClick={deleteTask} />
            </li>
          ))}
        {tasks.length === 0 && <h2>Список задач пока пуст</h2>}
      </ul>
    </>
  );
}
