import { Task } from "entities/task/model/types";
import { useCallback, useMemo, useState } from "react";

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
    // return tasks.filter((user) =>
    //   user.name.toLowerCase().includes(filter.toLowerCase())
    // );
    return tasks as Task[];
  }, [tasks, filter]);

  return {
    tasks: filteredTasks,
    filter: filter,
    setFilter,
    deleteTask,
  };
}
