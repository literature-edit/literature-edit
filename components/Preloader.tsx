"use client";

import React, { useState, useEffect } from "react";

const STAIR_COUNT = 6;
const STAIR_STAGGER = 80;
const LOGO_SHOW_DURATION = 1000;
const LOGO_FADE_DURATION = 400;
const STAIR_EXIT_DELAY = 100;

export default function Preloader() {
  const [phase, setPhase] = useState<"logo" | "logo-fade" | "stairs-exit" | "done">("logo");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasLoaded = sessionStorage.getItem("le-preloader-shown");
      if (hasLoaded) {
        setPhase("done");
        return;
      }
      sessionStorage.setItem("le-preloader-shown", "1");
    }

    // Start fading out the logo
    const t1 = setTimeout(
      () => setPhase("logo-fade"),
      LOGO_SHOW_DURATION
    );

    // Start stairs exit animation after logo is faded out + brief pause
    const t2 = setTimeout(
      () => setPhase("stairs-exit"),
      LOGO_SHOW_DURATION + LOGO_FADE_DURATION + STAIR_EXIT_DELAY
    );

    // Unmount preloader after stairs have fully exited
    const totalStairExit = STAIR_COUNT * STAIR_STAGGER + 500;
    const t3 = setTimeout(
      () => setPhase("done"),
      LOGO_SHOW_DURATION + LOGO_FADE_DURATION + STAIR_EXIT_DELAY + totalStairExit
    );

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("show-preloader");
      }
    };
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
      if (typeof window !== "undefined") {
        document.documentElement.classList.remove("show-preloader");
      }
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className="preloader-overlay fixed inset-0 z-[9999] pointer-events-auto"
      aria-hidden="true"
    >
      {/* Stair panels background */}
      {Array.from({ length: STAIR_COUNT }).map((_, i) => {
        const exitDelay = (STAIR_COUNT - 1 - i) * STAIR_STAGGER;
        const panelWidthPercent = 100 / STAIR_COUNT;

        return (
          <div
            key={i}
            className="absolute top-0 bottom-0"
            style={{
              left: `${i * panelWidthPercent}%`,
              width: `${panelWidthPercent + 0.5}%`,
              backgroundColor: i % 2 === 0 ? "#FAF6F0" : "#F3EDE2",
              transformOrigin: "top",
              animation:
                phase === "stairs-exit"
                  ? `stairExit 0.5s cubic-bezier(0.76, 0, 0.24, 1) ${exitDelay}ms forwards`
                  : "none",
            }}
          >
            {/* Subtle gold accent line on the right edge */}
            <div
              className="absolute right-0 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 10%, rgba(197,168,128,0.35) 50%, transparent 90%)",
              }}
            />

            {/* Geometric diamond per panel */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: `${18 + i * 11}%`,
                transform: "translate(-50%, -50%) rotate(45deg)",
                width: "7px",
                height: "7px",
                border: "1px solid rgba(197,168,128,0.2)",
              }}
            />
          </div>
        );
      })}

      {/* Centered full logo overlay */}
      <div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
        style={{
          opacity: phase === "logo" ? 1 : 0,
          transform: phase === "logo" ? "scale(1)" : "scale(0.92)",
          transition: "opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/full-logo.png"
          alt="Literature Edit Logo"
          className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] object-contain"
          style={{
            filter: "drop-shadow(0 8px 48px rgba(0,0,0,0.12))",
            animation: "logoEntrance 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards",
            opacity: 0,
          }}
        />

        {/* Decorative gold divider below logo */}
        <div className="mt-8 flex items-center gap-3">
          <div
            className="h-px bg-[#C5A880]"
            style={{
              width: phase === "logo" ? "64px" : "0px",
              transition: "width 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
            }}
          />
          <div
            className="h-1.5 w-1.5 bg-[#C5A880]"
            style={{
              animation: "dividerEntrance 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.1s forwards",
              opacity: 0,
            }}
          />
          <div
            className="h-px bg-[#C5A880]/60"
            style={{
              width: phase === "logo" ? "80px" : "0px",
              transition: "width 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.25s",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes stairExit {
          0% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(0);
          }
        }
        @keyframes logoEntrance {
          0% {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(8px) drop-shadow(0 0 0 rgba(0,0,0,0));
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0) drop-shadow(0 8px 48px rgba(0,0,0,0.12));
          }
        }
        @keyframes dividerEntrance {
          0% {
            opacity: 0;
            transform: rotate(45deg) scale(0.3);
          }
          100% {
            opacity: 1;
            transform: rotate(45deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
