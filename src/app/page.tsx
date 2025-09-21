"use client";

import { useEffect, useState } from "react";

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setConfetti(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white overflow-hidden">
      {/* Confetti Animation */}
      {confetti && (
        <div className="absolute inset-0 pointer-events-none animate-[falling_6s_linear_infinite]">
          {Array.from({ length: 100 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-80"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="text-center z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          🎉 Happy Birthday Shrawan! 🎉
        </h1>
        <p className="text-lg md:text-xl mb-4">
          Thank you for being an amazing teacher and mentor 🙌
        </p>
        <p className="text-md md:text-lg mb-6">
          Your dedication to teaching and helping others grow is truly inspiring.
        </p>
        <p className="text-lg font-semibold mb-2">Wishing you a year filled with:</p>

        <ul className="space-y-2 text-md md:text-lg">
          <li>🥁 More successful students</li>
          <li>💻 Exciting coding adventures</li>
          <li>📚 New learning experiences</li>
          <li>✨ And lots of happiness!</li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes falling {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </div>
  );
}
