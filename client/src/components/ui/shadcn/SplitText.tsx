import { useTheme } from "@/context/theme/useTheme";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GSAPSplitText from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

type SplitTextProps = {
  text: string;
  highlighted?: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: gsap.EaseString;
  splitType?: "chars" | "words" | "lines" | "words,chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
};

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  highlighted,
  className = "",
  delay = 50,
  duration = 1.25,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  tag = "p",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const { isDark } = useTheme();

  const ref = useRef<HTMLElement>(null);
  const onCompleteRef = useRef(onLetterAnimationComplete);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useGSAP(
    () => {
      if (!ref.current || !text) return;

      const element = ref.current;

      let targets: Element[] = [];

      const assignTargets = (split: GSAPSplitText) => {
        if (splitType.includes("chars") && split.chars?.length) {
          targets = split.chars;
        }

        if (
          !targets.length &&
          splitType.includes("words") &&
          split.words?.length
        ) {
          targets = split.words;
        }

        if (
          !targets.length &&
          splitType.includes("lines") &&
          split.lines?.length
        ) {
          targets = split.lines;
        }

        if (!targets.length) {
          targets = split.chars || split.words || split.lines || [];
        }
      };

      const startPct = (1 - threshold) * 100;

      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);

      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;

      const marginUnit = marginMatch?.[2] ?? "px";

      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;

      const start = `top ${startPct}%${sign}`;

      const splitInstance = new GSAPSplitText(element, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,

        onSplit: (self: GSAPSplitText) => {
          assignTargets(self);

          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,

              scrollTrigger: {
                trigger: element,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },

              onComplete: () => {
                onCompleteRef.current?.();
              },

              willChange: "transform, opacity",
              force3D: true,
            },
          );
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === element) {
            trigger.kill();
          }
        });

        try {
          splitInstance.revert();
        } catch {
          // Ignore cleanup errors.
        }
      };
    },
    {
      dependencies: [
        text,
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
      ],
      scope: ref,
    },
  );

  const Tag = (tag || "p") as React.ElementType;

  const style: React.CSSProperties = {
    textAlign,
    wordWrap: "break-word",
    willChange: "transform, opacity",
  };

  return (
    <Tag
      ref={ref}
      style={style}
      className={clsx(
        "split-parent inline-block overflow-hidden whitespace-normal",
        className,
      )}
    >
      {text}{" "}
      {highlighted && (
        <span className={clsx(isDark ? "text-brand-300" : "text-brand-500")}>
          {highlighted}
        </span>
      )}
    </Tag>
  );
};
