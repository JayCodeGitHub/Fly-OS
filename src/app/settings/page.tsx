import Switch from "@/components/switch";

export default function Settings() {
  return (
    <main className="mx-28 mt-28 pt-36 flex justify-center items-start h-restH">
      <section className="max-w-2xl w-full rounded-xl p-4 flex flex-col gap-4 bg-gray-600 shadow-lg shadow-gray-700">
        <h1 className=" text-xl text-center">Settings</h1>
        <Switch>Dark Mode</Switch>
      </section>
    </main>
  );
}
