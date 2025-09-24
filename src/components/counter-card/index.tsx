import { useEffect, useRef, useState } from 'react';
import { SanitizedCounter } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const CounterCard = ({
  counters,
  loading,
}: {
  counters: SanitizedCounter[];
  loading: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(() =>
    counters.map(() => 0),
  );

  useEffect(() => {
    setAnimatedValues(counters.map(() => 0));
  }, [counters]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || loading || counters.length === 0) {
      return;
    }

    const targets = counters.map((counter) => counter.value);
    const duration = 1200;
    const start = performance.now();
    let frameId: number;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const nextValues = targets.map((target) =>
        Math.round(target * progress),
      );
      setAnimatedValues(nextValues);
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isVisible, loading, counters]);

  const placeholderCount = counters.length > 0 ? counters.length : 3;

  return (
    <div ref={containerRef} className="card bg-base-200 shadow-xl border border-base-300">
      <div className="card-body p-8">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array.from({ length: placeholderCount }).map((_, index) => (
                <div
                  key={`counter-skeleton-${index}`}
                  className="flex flex-col items-center gap-3"
                >
                  {skeleton({ widthCls: 'w-20', heightCls: 'h-10' })}
                  {skeleton({ widthCls: 'w-28', heightCls: 'h-3' })}
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 opacity-60" />
                </div>
              ))
            : counters.map((counter, index) => (
                <div
                  key={`${counter.label}-${index}`}
                  className="flex flex-col items-center gap-3"
                >
                  <span className="text-3xl font-bold text-base-content sm:text-4xl">
                    {counter.prefix ?? ''}
                    {animatedValues[index]?.toLocaleString() ?? 0}
                    {counter.suffix ?? ''}
                  </span>
                  <span className="text-sm font-medium text-base-content/80 sm:text-base">
                    {counter.label}
                  </span>
                  <div className="h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400" />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
