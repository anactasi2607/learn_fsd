import { useCallback, useMemo, useState } from "react";
import { Task } from "entities/task/model/types";

export enum TaskFilterType {
  ALL = "all",
  COMPLETED = "completed",
  INCOMPLETED = "incompleted",
}

type Filter =
  | TaskFilterType.ALL
  | TaskFilterType.COMPLETED
  | TaskFilterType.INCOMPLETED;

export function useTasks(initial: Task[]) {
  const [tasks, setTasks] = useState<Task[]>(initial);
  const [filter, setFilter] = useState<Filter>(TaskFilterType.ALL);

  const deleteTask = useCallback((id: Task["id"]) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  const toggleTask = useCallback((id: Task["id"]) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) {
          return task;
        } else {
          return {
            ...task,
            completed: !task.completed,
          };
        }
      })
    );
  }, []);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case TaskFilterType.COMPLETED:
        return tasks.filter((task) => task.completed);
      case TaskFilterType.INCOMPLETED:
        return tasks.filter((task) => !task.completed);
      case TaskFilterType.ALL:
      default:
        return tasks;
    }
  }, [tasks, filter]);

  return {
    tasks: filteredTasks,
    filter: filter,
    setFilter,
    deleteTask,
    toggleTask,
  };
}
