import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 1, duration: 0 });
  useCountUp({ ref: "codingHours", end: 5, duration: 2 });
  useCountUp({ ref: "enjoyLife", end: 99, duration: 2 });
  useCountUp({ ref: "focused", end: 101, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />

        <CounterItem
          title="Minimum hours of coding"
          counter={<span id="codingHours" />}
          measurement="H/day"
        />

        <CounterItem
          title="Enjoy life"
          counter={<span id="enjoyLife" />}
          measurement="%"
        />

        <CounterItem
          title="Focused"
          counter={<span id="focused" />}
          measurement="%"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
