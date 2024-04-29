import Switch from "@/components/switch";
import VolumeSlider from "@/components/volumeSlider";
import Select from "@/components/select";

const flights = [
  {
    value: "london - new york",
    name: "London - New York",
  },
  {
    value: "berlin - london",
    name: "Berlin - London",
  },
  {
    value: "new york - los angeles",
    name: "New York - Los Angeles",
  },
  {
    value: "dubai - berlin",
    name: "Dubai - Berlin",
  },
  {
    value: "los angeles - tokyo",
    name: "Los Angeles - Tokyo",
  },
];

export default function Settings() {
  return (
    <main className="mx-28 mt-28 pt-36 flex justify-center items-start h-restH">
      <section className="max-w-2xl w-full rounded-xl p-4 flex flex-col gap-4 bg-gray-600 shadow-lg shadow-gray-700">
        <h1 className=" text-xl text-center">Settings</h1>
        <Switch>Dark Mode</Switch>
        <VolumeSlider />
        <Select placeholder="Select a flight..." items={flights} />
      </section>
    </main>
  );
}
