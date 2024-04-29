import React, { ReactNode } from "react";

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

export default function Select() {
  return (
    <Root>
      <Trigger
        aria-label="Food"
        className="w-64 flex justify-end flex-row-reverse items-center gap-2 py-2 rounded-md cursor-pointer"
      >
        <Value placeholder="Select a flight" />
        <Icon className="text-violet11">
          <ChevronDownIcon />
        </Icon>
      </Trigger>
      <Portal>
        <Content className="overflow-hidden bg-gray-500 rounded-md z-10">
          <Viewport>
            <Group>
              <SelectItem value="apple">London - New York</SelectItem>
              <SelectItem value="banana">Berlin - London</SelectItem>
              <SelectItem value="blueberry">New York - Los Angeles</SelectItem>
              <SelectItem value="grapes">Dubai - Berlin</SelectItem>
              <SelectItem value="pineapple">Los Angeles - Tokyo</SelectItem>
            </Group>
          </Viewport>
        </Content>
      </Portal>
    </Root>
  );
}
