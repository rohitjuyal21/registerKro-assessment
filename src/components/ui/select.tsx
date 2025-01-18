import React from "react";
import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import classnames from "classnames";

type Option = {
  value: string;
  label: string;
};

interface SelectComponentProps {
  placeholder?: string;
  options: Option[];
  label?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  value?: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
  placeholder = "Select an option",
  options,
  label,
  onValueChange,
  defaultValue,
  value,
}) => (
  <div className="w-full">
    {label && (
      <div className="text-sm text-gray-500 font-medium mb-2">{label}</div>
    )}
    <Select.Root
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange}
    >
      <Select.Trigger className="flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/80 text-sm w-full text-nowrap min-w-[6rem]">
        <Select.Value placeholder={placeholder} className="text-gray-700" />
        <Select.Icon className="ml-2">
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          align="start"
          position="popper"
          className="w-full bg-white shadow-lg rounded-md border border-gray-300 mt-1 min-w-full z-50"
        >
          <Select.ScrollUpButton className="h-6 flex items-center justify-center text-gray-500">
            <ChevronUp className="w-4 h-4" />
          </Select.ScrollUpButton>
          <Select.Viewport
            className={classnames(
              "p-1",
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            )}
          >
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="h-6 flex items-center justify-center text-gray-500">
            <ChevronDown className="w-4 h-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

type SelectItemProps = React.ComponentProps<typeof Select.Item>;

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "cursor-pointer select-none text-sm py-1.5 pl-8 pr-4 rounded hover:bg-gray-100 focus:bg-gray-200 focus:outline-none flex gap-2 items-center relative",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Select.ItemIndicator>
            <Check className="h-4 w-4" />
          </Select.ItemIndicator>
        </span>

        <Select.ItemText className="m-4">{children}</Select.ItemText>
      </Select.Item>
    );
  }
);

export default SelectComponent;
