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
      {
        tasks.map((task) => (
          <li key={task.id}>
            <TaskCard
              task={task}
              onDelete={onDeleteTask}
              onToggle={onToggleTask}
            />
          </li>
        ))
      }
    </ul>
  );
}
