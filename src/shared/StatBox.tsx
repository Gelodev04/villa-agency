import { Counter } from "../components/ui/Counter";

export default function StatsSection() {
  const stats = [
    { number: "34", label: "Buildings Finished Now" },
    { number: "12", label: "Years Experience" },
    { number: "24", label: "Awwards Won 2023" },
  ];
  return (
    <div className="flex flex-col  items-center gap-12 lg:flex-row justify-center ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between bg-[#FFEEE9] p-5 py-6 rounded-lg shadow-md w-[17rem] "
        >
          <div className="flex items-center gap-6 pl-5">
            <span className="text-4xl font-bold text-main">
              <Counter value={stat.number}></Counter>
            </span>
            <span className="text-myblack font-semibold w-[110px] ">
              {stat.label}
            </span>
          </div>

          <div className="absolute right-[-10px] top-1/9 transform -translate-y-1/2 size-12 bg-main rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
