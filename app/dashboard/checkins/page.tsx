"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  TrendingUp,
} from "lucide-react";

const goals = [
  {
    title: "Increase Sales Revenue",
    target: "20%",
    progress: 78,
    status: "On Track",
  },
  {
    title: "Improve Customer Retention",
    target: "15%",
    progress: 52,
    status: "Needs Attention",
  },
  {
    title: "AI Rollout Initiative",
    target: "Company-wide",
    progress: 91,
    status: "Completed",
  },
];

export default function CheckinsPage() {

  return (

    <main className="
      min-h-screen
      bg-[#0A0F1E]
      text-white
      p-8
      overflow-hidden
      relative
    ">

      {/* Ambient background */}
      <div className="
        absolute top-[-150px] right-[-100px]
        w-[400px] h-[400px]
        bg-indigo-500/20
        blur-3xl rounded-full
      " />

      <div className="
        absolute bottom-[-200px] left-[-150px]
        w-[400px] h-[400px]
        bg-blue-500/10
        blur-3xl rounded-full
      " />

      <div className="
        relative z-10
        max-w-6xl mx-auto
      ">

        {/* Header */}
        <div className="mb-10">

          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            border border-white/10
            bg-white/5
            text-sm text-gray-300
            mb-5
          ">
            Q2 Performance Cycle
          </div>

          <h1 className="
            text-5xl font-bold
            tracking-tight mb-3
          ">
            Quarterly Check-ins
          </h1>

          <p className="
            text-gray-400 text-lg
            max-w-2xl
          ">
            Update your execution progress, share blockers,
            and align with quarterly priorities.
          </p>

        </div>

        {/* Goal Cards */}
        <div className="space-y-8">

          {goals.map((goal, index) => (

            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
              "
            >

              {/* Top */}
              <div className="
                flex flex-col xl:flex-row
                justify-between gap-6
                mb-8
              ">

                <div>

                  <div className="
                    flex items-center gap-3
                    mb-3
                  ">

                    <div className="
                      p-3 rounded-2xl
                      bg-indigo-500/10
                      text-indigo-300
                    ">
                      <TrendingUp size={20} />
                    </div>

                    <div>

                      <h2 className="
                        text-3xl font-bold
                      ">
                        {goal.title}
                      </h2>

                      <p className="
                        text-gray-400 mt-1
                      ">
                        Target: {goal.target}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Status */}
                <div className="
                  flex items-center gap-3
                  h-fit
                ">

                  <div className="
                    px-4 py-2 rounded-2xl
                    bg-white/5 border border-white/10
                    flex items-center gap-2
                  ">

                    {goal.status === "Completed" ? (
                      <CheckCircle2
                        size={18}
                        className="text-green-400"
                      />
                    ) : (
                      <Clock3
                        size={18}
                        className="text-yellow-400"
                      />
                    )}

                    <span className="
                      text-sm font-medium
                    ">
                      {goal.status}
                    </span>

                  </div>

                </div>

              </div>

              {/* Progress */}
              <div className="mb-8">

                <div className="
                  flex justify-between mb-3
                ">

                  <span className="text-gray-300">
                    Completion Progress
                  </span>

                  <span className="
                    text-indigo-300 font-semibold
                  ">
                    {goal.progress}%
                  </span>

                </div>

                <div className="
                  w-full h-3
                  bg-white/5
                  rounded-full overflow-hidden
                ">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${goal.progress}%`,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="
                      h-full rounded-full
                      bg-gradient-to-r
                      from-indigo-500
                      to-indigo-300
                    "
                  />

                </div>

              </div>

              {/* Inputs */}
              <div className="
                grid grid-cols-1
                xl:grid-cols-2
                gap-5
              ">

                <input
                  type="number"
                  placeholder="Achievement percentage"
                  className="
                    bg-[#111827]
                    border border-white/10
                    rounded-2xl
                    p-4 outline-none
                    focus:border-indigo-500
                    transition-all
                  "
                />

                <select
                  className="
                    bg-[#111827]
                    border border-white/10
                    rounded-2xl
                    p-4 outline-none
                    focus:border-indigo-500
                    transition-all
                  "
                >
                  <option>On Track</option>
                  <option>Completed</option>
                  <option>Needs Attention</option>
                </select>

              </div>

              <textarea
                placeholder="Share updates, blockers, or progress notes..."
                className="
                  w-full mt-5
                  bg-[#111827]
                  border border-white/10
                  rounded-2xl
                  p-4 min-h-[120px]
                  outline-none
                  focus:border-indigo-500
                  transition-all
                "
              />

            </motion.div>

          ))}

        </div>

        {/* Bottom Action */}
        <div className="
          flex justify-end mt-10
        ">

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              bg-indigo-500
              hover:bg-indigo-600
              px-8 py-4
              rounded-2xl
              font-semibold
              shadow-lg
              shadow-indigo-500/20
            "
          >
            Submit Check-ins
          </motion.button>

        </div>

      </div>

    </main>
  );
}