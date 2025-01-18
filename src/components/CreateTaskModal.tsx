import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import SelectComponent from "./ui/select";
import { PRIORITY, STATUS } from "../utils/constants";
import { Task, TSTATUS } from "../types/taskTypes";
import { TPRIORITY } from "../types/taskTypes";
import toast from "react-hot-toast";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
  task: Task;
  setTask: React.Dispatch<React.SetStateAction<Task>>;
  isEditing: boolean;
  onUpdate: (updatedTask: Task) => void;
}

const CreateTaskModal = ({
  isOpen,
  onClose,
  onSubmit,
  task,
  setTask,
  isEditing,
  onUpdate,
}: CreateTaskModalProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTask({ ...task, description: e.target.value });
  };

  const handlePriorityChange = (value: TPRIORITY) => {
    setTask({ ...task, priority: value });
  };

  const handleStatusChange = (value: TSTATUS) => {
    setTask({ ...task, status: value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      onUpdate(task);
      toast.success("Task updated successfully");
    } else {
      onSubmit(task);
      toast.success("Task created successfully");
    }

    setTask({
      id: "",
      title: "",
      description: "",
      status: "NOT_STARTED",
      priority: "HIGH",
      createdAt: new Date(),
    });
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/90 fixed inset-0 flex items-center justify-center z-50" />
        <Dialog.Content className="fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 bg-white border rounded-xl max-w-lg  p-6 w-[90%] z-50">
          <Dialog.Title className="text-xl font-bold">New Task</Dialog.Title>

          <VisuallyHidden.Root>
            <Dialog.Description>Win Dialog Description</Dialog.Description>
          </VisuallyHidden.Root>
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className="flex flex-col gap-4 my-6"
          >
            <div>
              <label
                htmlFor="title"
                className="text-sm font-medium mb-1 inline-block"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={task.title}
                onChange={handleTitleChange}
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary/80"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="priority"
                  className="text-sm font-medium mb-1 inline-block"
                >
                  Priority
                </label>
                <SelectComponent
                  options={PRIORITY}
                  onValueChange={(value) => {
                    handlePriorityChange(value);
                  }}
                  defaultValue="LOW"
                  value={task.priority}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="status"
                  className="text-sm font-medium mb-1 inline-block"
                >
                  Status
                </label>
                <SelectComponent
                  options={STATUS}
                  onValueChange={(value) => {
                    handleStatusChange(value);
                  }}
                  defaultValue="NOT_STARTED"
                  value={task.status}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium mb-1 inline-block"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="border rounded-md p-2 w-full focus:outline-none focus:ring-2  focus:ring-primary/80"
                rows={6}
                value={task.description}
                onChange={handleDescriptionChange}
              />
            </div>
            <button
              type="submit"
              className="bg-[#1C4670] py-3 px-6 font-medium text-white rounded-[4px] hover:shadow-lg transiti-all duration-300"
            >
              {isEditing ? "Update Task" : "Add Task"}
            </button>
          </form>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4">
              <X size={20} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CreateTaskModal;
