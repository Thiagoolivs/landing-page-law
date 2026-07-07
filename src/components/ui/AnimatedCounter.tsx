"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const formatter = new Intl.NumberFormat("pt-BR");

/** Contador animado que dispara ao entrar no viewport. */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-48px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(formatter.format(value));
      return;
    }
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(formatter.format(Math.round(latest))),
    });
    return () => controls.stop();
  }, [inView, value, duration, motionValue, reduceMotion]);

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${formatter.format(value)}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
