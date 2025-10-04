import classNames from "classnames";
import React from "react";
import { TaskFilterType, useTasks } from "features/taskList/model/useTasks";
import TaskList from "features/taskList/ui/TaskList";
import { Task } from "entities/task/model/types";

import styles from "./TaskWidget.module.css";

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

export default function TaskWidget() {
  const { tasks, filter, setFilter, deleteTask, toggleTask } =
    useTasks(INITIAL_TASK);

  return (
    <div>
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
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
}
