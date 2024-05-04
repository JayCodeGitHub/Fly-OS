import VolumeSlider from "./volumeSlider";

export default function Toolbar() {
  return (
    <div className="fixed top-0 left-0 h-28 xl:px-48 lg:px-24 px-8 w-screen flex justify-end items-center gap-12">
      <VolumeSlider hiding />
    </div>
  );
}
