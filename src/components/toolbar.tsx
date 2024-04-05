import VolumeSlider from "./volumeSlider";

export default function Toolbar() {
  return (
    <div className="fixed top-0 left-0 h-28 px-48 w-screen flex justify-end items-center gap-12">
      <VolumeSlider />
    </div>
  );
}
