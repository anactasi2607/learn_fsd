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

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
  };
}
