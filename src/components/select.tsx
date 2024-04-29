"use client";
import React, { ReactNode } from "react";

import {
  Root,
  Item,
  ItemText,
  ItemIndicator,
  Trigger,
  Value,
  Icon,
  Portal,
  Content,
  Viewport,
  Group,
} from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

const SelectItem = React.forwardRef(function SelectItem(
  {
    children,
    className,
    ...props
  }: {
    children: ReactNode;
    className?: string;
    value: string;
    disabled?: boolean;
    highlighted?: boolean;
  },
  forwardedRef
) {
  return (
    <Item
      className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center py-3 pl-7 relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 cursor-pointer hover:bg-gray-300"
      {...props}
      ref={forwardedRef as React.Ref<HTMLDivElement>}
    >
      <ItemText>{children}</ItemText>
      <ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </ItemIndicator>
    </Item>
  );
});

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
