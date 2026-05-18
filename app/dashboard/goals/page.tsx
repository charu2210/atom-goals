"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function GoalsPage() {

  const [goals, setGoals] = useState([
    {
      title: "",
      weightage: 50,
    },
  ]);

  const totalWeightage =
    goals.reduce(
      (acc, goal) =>
        acc + Number(goal.weightage),
      0
    );

  const addGoal = () => {

    setGoals([
      ...goals,
      {
        title: "",
        weightage: 0,
      },
    ]);
  };

  return (

    <main className="
      min-h-screen
      bg-[#070B14]
      text-white
      p-8
    ">

      <div className="
        max-w-5xl mx-auto
      ">

        <div className="mb-10">

          <div className="
            inline-flex
            px-4 py-2
            rounded-full
            bg-indigo-500/10
            border border-indigo-500/20
            text-indigo-300
            text-sm mb-4
          ">
            Goal Workspace
          </div>

          <h1 className="
            text-6xl font-black
            tracking-tight mb-4
          ">
            Build meaningful goals.
          </h1>

          <p className="
            text-gray-400 text-lg
          ">
            Define measurable targets that actually move work forward.
          </p>

        </div>

        {/* WEIGHTAGE BAR */}
        <div className="
          mb-10
          rounded-3xl
          bg-white/5
          border border-white/10
          p-6
        ">

          <div className="
            flex justify-between
            mb-4
          ">

            <span className="
              text-gray-300
            ">
              Weight Distribution
            </span>

            <span className="
              font-bold
              text-indigo-300
            ">
              {totalWeightage}%
            </span>

          </div>

          <div className="
            h-4 rounded-full
            bg-white/5 overflow-hidden
          ">

            <motion.div
              animate={{
                width: `${Math.min(totalWeightage, 100)}%`,
              }}
              className={`
                h-full rounded-full
                ${
                  totalWeightage > 100
                    ? "bg-red-500"
                    : "bg-gradient-to-r from-indigo-500 to-indigo-300"
                }
              `}
            />

          </div>

        </div>

        {/* GOALS */}
        <div className="
          space-y-6
        ">

          {goals.map((goal, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-[32px]
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
              "
            >

              <div className="
                flex items-center
                justify-between
                mb-6
              ">

                <h2 className="
                  text-2xl font-bold
                ">
                  Goal {index + 1}
                </h2>

                <div className="
                  px-4 py-2 rounded-xl
                  bg-indigo-500/10
                  text-indigo-300
                  text-sm
                ">
                  Active
                </div>

              </div>

              <div className="
                grid md:grid-cols-2
                gap-5
              ">

                <input
                  type="text"
                  placeholder="Goal title"
                  value={goal.title}
                  onChange={(e) => {

                    const updated =
                      [...goals];

                    updated[index].title =
                      e.target.value;

                    setGoals(updated);
                  }}
                  className="
                    bg-[#101827]
                    border border-white/10
                    rounded-2xl
                    p-4
                    outline-none
                    focus:border-indigo-500
                    transition-all
                  "
                />

                <input
                  type="number"
                  placeholder="Weightage %"
                  value={goal.weightage}
                  onChange={(e) => {

                    const updated =
                      [...goals];

                    updated[index].weightage =
                      Number(e.target.value);

                    setGoals(updated);
                  }}
                  className="
                    bg-[#101827]
                    border border-white/10
                    rounded-2xl
                    p-4
                    outline-none
                    focus:border-indigo-500
                    transition-all
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

        {/* BUTTONS */}
        <div className="
          flex gap-4 mt-10
        ">

          <button
            onClick={addGoal}
            className="
              px-6 py-4
              rounded-2xl
              bg-white/5
              border border-white/10
              hover:bg-white/10
              transition-all
            "
          >
            + Add Goal
          </button>

          <button
            className="
              px-6 py-4
              rounded-2xl
              bg-indigo-500
              hover:bg-indigo-600
              font-semibold
              shadow-lg
              shadow-indigo-500/20
              transition-all
            "
          >
            Submit Goals
          </button>

        </div>

      </div>

    </main>
  );
}