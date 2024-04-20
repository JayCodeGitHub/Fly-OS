"use client";

import { useState, useEffect, useRef } from "react";
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";
import * as Slider from "@radix-ui/react-slider";
import useStore from "@/state";
import { motion } from "framer-motion";

export default function VolumeSlider({ hiding }: { hiding?: boolean }) {
  const [isActive, setIsActive] = useState(!hiding);
  const toggleActive = () => {
    hiding ? setIsActive((prevValue) => !prevValue) : null;
  };
  const { volume, setVolume } = useStore((state) => state);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    hiding && document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  };

  return (
    <div className="flex gap-4 items-center p-1" ref={wrapperRef}>
      <SpeakerOffIcon className={`${isActive ? " visible" : "hidden"}`} />
      <motion.form
        initial={hiding ? { width: 0 } : { width: 200 }}
        animate={isActive ? { width: 200 } : { width: 0 }}
        transition={{ duration: 0.2 }}
        className="focus:outline outline-2"
      >
        <Slider.Root
          className="relative flex items-center select-none touch-none h-5 w-full"
          defaultValue={[volume]}
          onValueChange={(values) => setVolume(values[0])}
          value={[volume]}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-gray-500 relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-white rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className={`block w-3 h-3 bg-white rounded-[10px] hover:bg-gray-300 transition-all focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA3 focus:bg-gray-300 visible ${
              isActive ? "" : "hidden"
            }`}
            aria-label="Volume"
          />
        </Slider.Root>
      </motion.form>
      <button onClick={toggleActive}>
        <SpeakerLoudIcon />
      </button>
    </div>
  );
}
