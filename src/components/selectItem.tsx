import React, { ReactNode } from "react";

import { Item, ItemText, ItemIndicator } from "@radix-ui/react-select";
import { CheckIcon } from "@radix-ui/react-icons";

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

export default SelectItem;
