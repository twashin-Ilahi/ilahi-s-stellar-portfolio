import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

const CounterStat = ({ value, suffix = "", label }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.max(1, Math.floor(value / 40));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-xs md:text-sm font-body mt-1">{label}</div>
    </div>
  );
};

export default CounterStat;
