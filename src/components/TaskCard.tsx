import classNames from "classnames";
import { getPriorityClass } from "../utils/getPriorityClass";
import { getProgressColor } from "../utils/getProgressColor";
import { Task } from "../types/taskTypes";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import TaskDropdownMenu from "./TaskDropdownMenu";
import toast from "react-hot-toast";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

const status = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  const handleEditClick = () => {
    onEdit(task);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
    toast.success("Task deleted successfully");
  };

  return (
    <div className="border border-gray-200 hover:shadow-md p-4 rounded-lg transition-all duration-300 flex flex-col bg-white relative mb-4 break-inside-avoid-column">
      <div className="flex justify-between items-center mb-1">
        <span
          className={classNames(
            "inline-block  text-xs uppercase px-2 py-0.5 rounded-sm font-bold",
            getPriorityClass(task.priority)
          )}
        >
          {task.priority}
        </span>
        <TaskDropdownMenu
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      </div>
      <div className="flex-1 my-1">
        <Link to={`/task/${task.id}`} className="block group">
          <h2 className="text-xl font-bold inline relative after:absolute after:h-0.5 after:w-full after:z-10 after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-left group-hover:after:scale-x-100 after:transition-transform after:duration-300">
            {task.title}
          </h2>
        </Link>
        <p className="text-gray-500 break-words">{task.description}</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-1 items-center">
          <span
            className={classNames(
              "inline-block w-3.5 h-3.5 rounded-full",
              getProgressColor(task.status)
            )}
          ></span>
          <span className="text-sm font-medium text-gray-500">
            {status[task.status]}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          {format(task.createdAt, "dd MMM yyyy")}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
