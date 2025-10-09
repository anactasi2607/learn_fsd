import classNames from "classnames";
import React from "react";
import { TaskFilterType, useTasks } from "features/taskList/model/useTasks";
import TaskList from "features/taskList/ui/TaskList";

import styles from "./TaskWidget.module.css";

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
  const {
    tasks,
    filter,
    isLoading,
    isSuccess,
    isError,
    setFilter,
    deleteTask,
    toggleTask,
  } = useTasks();

  return (
    <div className={styles.root}>
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
      {isLoading && <h2>Список задач загружается...</h2>}
      {isSuccess && tasks.length > 0 && (
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      )}
      {isSuccess && tasks.length === 0 && <h2>Список задач пока пуст</h2>}
      {isError && <h2>Произошла ошибка при загрузке</h2>}
    </div>
  );
}
