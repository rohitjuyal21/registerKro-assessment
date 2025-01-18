import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { MENU_ITEMS } from "../utils/constants";
import { Link } from "react-router-dom";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog.Root open={isOpen} onOpenChange={(val) => setIsOpen(val)}>
      <Dialog.Trigger asChild>
        <button className="p-2 hover:bg-gray-100 rounded-md outline-none">
          <Menu size={24} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/90 fixed inset-0 flex items-center justify-center z-50" />
        <Dialog.Content className="fixed top-0 h-full right-0 bg-white border w-[80%] max-w-xs sm:w-full  p-4  z-50">
          <VisuallyHidden.Root>
            <Dialog.Title className="text-xl font-bold">Sidebar</Dialog.Title>{" "}
          </VisuallyHidden.Root>

          <VisuallyHidden.Root>
            <Dialog.Description></Dialog.Description>
          </VisuallyHidden.Root>
          <div className="my-6 space-y-4">
            {MENU_ITEMS.map((item, index) => {
              if (item.isChildren) {
                return (
                  <button
                    key={index}
                    className="flex gap-2 justify-between w-full  items-center text-[#272D37] font-semibold px-4 py-2 rounded-md hover:bg-gray-100 text-lg transition-all duration-300"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={20} />
                  </button>
                );
              }

              return (
                <Link
                  key={index}
                  to={item.href || ""}
                  className="flex items-center text-[#272D37] font-semibold px-4 py-2 rounded-md hover:bg-gray-100 text-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              );
            })}
            <div className=" w-full">
              <button className="bg-[#FFA229] flex items-center justify-center py-3 px-6 font-bold w-full text-white text-center rounded-[4px] hover:shadow-lg border border-gray-200 hover:text-[#FFA229] z-10  overflow-hidden transition-all duration-300 relative before:absolute before:inset-0 before:bg-white before:translate-y-full hover:before:translate-y-0 before:transition before:duration-300 before:-z-10">
                Talk an Expert
              </button>
            </div>
          </div>
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

export default MobileSidebar;
