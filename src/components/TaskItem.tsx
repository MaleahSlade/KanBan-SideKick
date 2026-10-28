// Purpose: Displays the task information for each task in the Kanban board.
// Props:
//   task           - the single task this card shows
//   onStatusChange - called when the user picks a new status from the dropdown
//   onDelete       - called when the user clicks the delete button

import type { ChangeEvent } from 'react';
import type { TaskItemProps, TaskStatus } from '../types';

const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  // Runs when the status dropdown changes: tell the parent WHICH task and its NEW status.
  const handleStatusChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, e.target.value as TaskStatus);
  };

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      <select value={task.status} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In progress</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
