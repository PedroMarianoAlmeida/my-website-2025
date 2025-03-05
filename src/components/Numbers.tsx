import { CountUp } from "@/components/react-bites/CountUp";
const values = [
  { top: "Experience of", value: 6, bottom: "years" },
  { top: "Working for", value: 5, bottom: "companies" },
  { top: "Into", value: 3, bottom: "countries" },
];
export const Numbers = () => {
  return (
    <section className="flex flex-col md:flex-row my-5 border rounded-4xl p-10 gap-10">
      {values.map(({ top, value, bottom }) => (
        <div className="flex flex-col items-center w-50 gap-2" key={top}>
          <div className="text-2xl">{top}</div>
          <CountUp
            from={0}
            to={value}
            direction="up"
            duration={1}
            className="text-4xl"
          />
          <div>{bottom}</div>
        </div>
      ))}
    </section>
  );
};
