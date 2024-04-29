"use client";

import {
  Root,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  Viewport,
  Group,
} from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import SelectItem from "./selectItem";

export default function Select({
  placeholder,
  items,
}: {
  placeholder: string;
  items: { value: string; name: string }[];
}) {
  return (
    <Root>
      <Trigger
        aria-label="Food"
        className="w-64 flex justify-end flex-row-reverse items-center gap-2 py-2 rounded-md cursor-pointer"
      >
        <Value placeholder={placeholder} />
        <Icon className="text-violet11">
          <ChevronDownIcon />
        </Icon>
      </Trigger>
      <Portal>
        <Content className="overflow-hidden bg-gray-500 rounded-md z-10">
          <Viewport>
            <Group>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </Group>
          </Viewport>
        </Content>
      </Portal>
    </Root>
  );
}
