import { useEffect, useState } from "react";
import { Task } from "../types/taskTypes";
import TaskCard from "../components/TaskCard";
import CreateTaskModal from "../components/CreateTaskModal";
import SelectComponent from "../components/ui/select";
// import { PRIORITY, STATUS } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";
import { Plus } from "lucide-react";

const priorityOptions = [
  { value: "ALL", label: "All" },
  { value: "HIGH", label: "High" },
  { value: "MEDIUM", label: "Medium" },
  { value: "LOW", label: "Low" },
];

const statusOptions = [
  {
    value: "ALL",
    label: "All",
  },
  {
    value: "NOT_STARTED",
    label: "Not Started",
  },
  {
    value: "IN_PROGRESS",
    label: "In Progress",
  },
  {
    value: "COMPLETED",
    label: "Completed",
  },
];

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const [task, setTask] = useState<Task>({
    id: uuidv4(),
    title: "",
    description: "",
    status: "NOT_STARTED",
    priority: "MEDIUM",
    createdAt: new Date(),
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleAddTask = (task: Task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  useEffect(() => {
    const savedTasks = localStorage.getItem("registerKroTasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  const updateLocalStorage = (tasks: Task[]) => {
    localStorage.setItem("registerKroTasks", JSON.stringify(tasks));
  };

  const handleEditTask = (task: Task) => {
    setIsEditing(true);
    setIsCreateTaskModalOpen(true);
    setTask(task);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const handleTaskUpdate = (updatedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const handleCreateTashModalClose = () => {
    setIsCreateTaskModalOpen(false);
    setIsEditing(false);
    setTask({
      id: uuidv4(),
      title: "",
      description: "",
      status: "NOT_STARTED",
      priority: "MEDIUM",
      createdAt: new Date(),
    });
  };

  const filteredTasks = () => {
    let result = tasks;

    if (status && status !== "ALL") {
      result = result.filter((task) => task.status === status);
    }

    if (priority && priority !== "ALL") {
      result = result.filter((task) => task.priority === priority);
    }

    return result;
  };

  return (
    <div
      style={{
        background: `linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%)`,
      }}
      className="relative min-h-screen z-10"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/hero.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-6 md:space-y-8 max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-[#1C4670] text-3xl md:text-4xl font-bold">
          Task Manager
        </h1>
        <div className="flex  sm:flex-row flex-col justify-between sm:items-center  gap-4">
          <div className="flex items-center gap-4">
            <SelectComponent
              options={priorityOptions}
              onValueChange={(value) => setPriority(value)}
              value={priority}
              placeholder="Priority"
            />
            <SelectComponent
              options={statusOptions}
              onValueChange={(value) => setStatus(value)}
              value={status}
              placeholder="Status"
            />
          </div>
          <button
            onClick={() => setIsCreateTaskModalOpen(true)}
            className="bg-[#1C4670] flex items-center justify-center py-2 md:py-3 px-4 md:px-6 font-bold text-white md:text-base text-sm text-center rounded-[4px] hover:shadow-lg border border-gray-200 hover:text-primary z-10  overflow-hidden transition-all duration-300 relative before:absolute before:inset-0 before:bg-white before:-translate-x-full hover:before:translate-x-0 before:transition before:duration-300 before:-z-10"
          >
            Add Task <Plus className="size-5 ml-2" />
          </button>
        </div>
        <div>
          {filteredTasks().length > 0 ? (
            <div className="columns columns-1 sm:columns-2 lg:cloumns-3 xl:columns-4 gap-4">
              {filteredTasks()
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                  />
                ))}
            </div>
          ) : (
            <p className="text-gray-500 my-20 text-center">
              No Tasks added yet
            </p>
          )}
        </div>
        <CreateTaskModal
          isOpen={isCreateTaskModalOpen}
          onClose={handleCreateTashModalClose}
          onSubmit={handleAddTask}
          task={task}
          setTask={setTask}
          isEditing={isEditing}
          onUpdate={handleTaskUpdate}
        />
      </div>
    </div>
  );
};

export default Home;
