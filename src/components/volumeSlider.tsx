"use client";

import { useState } from "react";
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";
import * as Slider from "@radix-ui/react-slider";
import useStore from "@/state";
import { motion } from "framer-motion";

export default function VolumeSlider() {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = () => setIsActive((prevValue) => !prevValue);
  const { volume, setVolume } = useStore((state) => state);

  return (
    <div className="flex gap-4 items-center p-1">
      <SpeakerOffIcon className={`${isActive ? " visible" : "hidden"}`} />
      <motion.form
        animate={isActive ? { width: 200 } : { width: 0 }}
        transition={{ duration: 0.2 }}
        className="focus:outline outline-2"
      >
        <Slider.Root
          className="relative flex items-center select-none touch-none h-5 w-full"
          defaultValue={[volume]}
          onValueChange={(values) => setVolume(values[0])}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-gray-500 relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-white rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className={`block w-3 h-3 bg-white rounded-[10px] hover:bg-gray-300 transition-all focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA3 focus:bg-gray-300 ${
              isActive ? "visible" : "hidden"
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
