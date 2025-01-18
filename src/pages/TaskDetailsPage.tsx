import { useParams } from "react-router-dom";
import { Task } from "../types/taskTypes";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { getProgressColor } from "../utils/getProgressColor";
import { getPriorityClass } from "../utils/getPriorityClass";
import { format } from "date-fns";

const status = {
  NOT_STARTED: "Not Started",
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const TaskDetailsPage = () => {
  const [task, setTask] = useState<Task | null>(null);
  const { taskId } = useParams();

  useEffect(() => {
    const savedTasks = JSON.parse(
      localStorage.getItem("registerKroTasks") || "[]"
    );
    if (savedTasks.length > 0) {
      const task = savedTasks.find((task: Task) => task.id === taskId);
      setTask(task);
    }
    console.log(savedTasks);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
      {task && (
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-3xl font-bold">{task.title}</h1>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-600">
              <h6 className="min-w-36 font-medium ">Status</h6>
              <div className="flex gap-1 items-center">
                <span
                  className={classNames(
                    "inline-block w-3.5 h-3.5 rounded-full",
                    getProgressColor(task.status)
                  )}
                ></span>
                <span className="font-medium text-gray-500">
                  {status[task.status]}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <h6 className="min-w-36 font-medium">Priority</h6>

              <span
                className={classNames(
                  "inline-block text-xs uppercase px-2 py-0.5 rounded-sm font-bold",
                  getPriorityClass("MEDIUM")
                )}
              >
                {task.priority}
              </span>
            </div>
            <div className="flex items-center gap-4 text-gray-600">
              <h6 className="min-w-36 font-medium">Created At</h6>

              <span className="font-medium ">
                {format(task.createdAt, "dd MMM yyyy")}
              </span>
            </div>
          </div>
          <p className="break-words">{task.description}</p>
        </div>
      )}
    </div>
  );
};

export default TaskDetailsPage;
