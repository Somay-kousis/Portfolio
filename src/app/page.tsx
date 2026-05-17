import MomentArrival from "@/components/sections/MomentArrival";
import MomentWork from "@/components/sections/MomentWork";
import MomentSystems from "@/components/sections/MomentSystems";
import MomentDeparture from "@/components/sections/MomentDeparture";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full relative z-10">
      <MomentArrival />
      <MomentWork />
      <MomentSystems />
      <MomentDeparture />
    </main>
  );
}
