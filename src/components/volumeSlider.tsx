"use client";

import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";
import * as Slider from "@radix-ui/react-slider";
import useStore from "@/state";

export default function VolumeSlider() {
  const { volume, setVolume } = useStore((state) => state);
  return (
    <div className="flex gap-4 items-center">
      <SpeakerOffIcon />
      <form>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[200px] h-5"
          defaultValue={[volume]}
          onValueChange={(values) => setVolume(values[0])}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-gray-500 relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-white rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-3 h-3 bg-white rounded-[10px] hover:bg-violet3 focus:outline-none"
            aria-label="Volume"
          />
        </Slider.Root>
      </form>
      <SpeakerLoudIcon />
    </div>
  );
}
