import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { MoreVertical, Edit, Trash } from "lucide-react";

const TaskDropdownMenu = ({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="p-2  hover:bg-gray-100 active:bg-gray-200 rounded-md outline-none">
          <MoreVertical size={16} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          className="bg-white border rounded-md shadow-md w-48 p-1 z-50"
        >
          <DropdownMenu.Item
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer rounded outline-none"
            onClick={() => onEdit()}
          >
            <Edit size={16} />
            Edit Task
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-red-100 text-red-600 cursor-pointer rounded outline-none"
            onClick={onDelete}
          >
            <Trash size={16} />
            Delete Task
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default TaskDropdownMenu;
