"use client";
import React, { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    const data = {
      plusSigns: Array.from({ length: 25 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${20 + Math.random() * 15}s`,
        fontSize: `${12 + Math.random() * 16}px`,
      })),
      orbs: Array.from({ length: 8 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${15 + Math.random() * 10}s`,
      })),
      particles: Array.from({ length: 50 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${12 + Math.random() * 8}s`,
      })),
      shapes: Array.from({ length: 12 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 12}s`,
        duration: `${18 + Math.random() * 12}s`,
      })),
    };
    setRandomData(data);
  }, []);

  if (!randomData) return null; // prevent hydration mismatch

  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-blue-900/30" />

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid-background">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={`vertical-${i}`}
              className="grid-line-vertical"
              style={{
                left: `${i * 2.5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${8 + (i % 4)}s`,
              }}
            />
          ))}
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={`horizontal-${i}`}
              className="grid-line-horizontal"
              style={{
                top: `${i * 4}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${10 + (i % 3)}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Plus Signs */}
      <div className="absolute inset-0 overflow-hidden">
        {randomData.plusSigns.map((p, i) => (
          <div
            key={`plus-${i}`}
            className="plus-sign"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: p.fontSize,
            }}
          >
            +
          </div>
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0">
        {randomData.orbs.map((o, i) => (
          <div
            key={`orb-${i}`}
            className="glowing-orb"
            style={{
              left: o.left,
              top: o.top,
              animationDelay: o.delay,
              animationDuration: o.duration,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {randomData.particles.map((p, i) => (
          <div
            key={`particle-${i}`}
            className="floating-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        {randomData.shapes.map((s, i) => (
          <div
            key={`shape-${i}`}
            className="geometric-shape"
            style={{
              left: s.left,
              top: s.top,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .grid-background {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .grid-line-vertical {
          position: absolute;
          width: 1px;
          height: 100%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(59, 130, 246, 0.4),
            rgba(34, 197, 94, 0.2),
            transparent
          );
          animation: gridMoveVertical ease-in-out infinite alternate;
        }

        .grid-line-horizontal {
          position: absolute;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(59, 130, 246, 0.3),
            rgba(34, 197, 94, 0.2),
            transparent
          );
          animation: gridMoveHorizontal ease-in-out infinite alternate;
        }

        .plus-sign {
          position: absolute;
          color: rgba(59, 130, 246, 0.4);
          font-weight: bold;
          animation: floatPlus linear infinite;
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }

        .glowing-orb {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.8),
            rgba(34, 197, 94, 0.4),
            transparent
          );
          border-radius: 50%;
          animation: floatOrb ease-in-out infinite;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .floating-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.9),
            transparent
          );
          border-radius: 50%;
          animation: floatUp linear infinite;
        }

        .geometric-shape {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(59, 130, 246, 0.3);
          animation: rotateShape linear infinite;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }

        @keyframes gridMoveVertical {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(50px);
            opacity: 0;
          }
        }

        @keyframes gridMoveHorizontal {
          0% {
            transform: translateY(-30px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(30px);
            opacity: 0;
          }
        }

        @keyframes floatPlus {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.2);
          }
        }

        @keyframes floatUp {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0);
            opacity: 0;
          }
        }

        @keyframes rotateShape {
          0% {
            transform: rotate(0deg) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            transform: rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
