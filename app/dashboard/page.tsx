"use client";

import { motion } from "framer-motion";

import {
  Target,
  CheckCircle,
  Clock3,
  Activity,
} from "lucide-react";

const stats = [
  {
    title: "Goals Created",
    value: "5",
    icon: <Target size={22} />,
    color: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    title: "Completed",
    value: "78%",
    icon: <CheckCircle size={22} />,
    color: "from-green-500/20 to-green-500/5",
  },
  {
    title: "Pending Reviews",
    value: "2",
    icon: <Clock3 size={22} />,
    color: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    title: "Activity",
    value: "24",
    icon: <Activity size={22} />,
    color: "from-pink-500/20 to-pink-500/5",
  },
];

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen p-8 text-white overflow-hidden">

  {/* Ambient Glow */}
  <div className="
    absolute top-[-200px] right-[-150px]
    w-[500px] h-[500px]
    bg-indigo-500/20
    blur-3xl
    rounded-full
    pointer-events-none
  " />

  <div className="
    absolute bottom-[-250px] left-[-200px]
    w-[500px] h-[500px]
    bg-blue-500/10
    blur-3xl
    rounded-full
    pointer-events-none
  " />

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold tracking-tight mb-2">
            Dashboard
          </h1>

          <p className="text-gray-400 text-lg">
            Welcome back, Charu 👋
          </p>

        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="
            bg-indigo-500 hover:bg-indigo-600
            transition-all
            px-6 py-3
            rounded-2xl
            font-semibold
            shadow-lg shadow-indigo-500/20
          "
        >
          + Create Goal
        </motion.button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        {stats.map((card, index) => (

          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{
              y: -4,
              scale: 1.01,
            }}
            className="
              relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[#111827]
              p-6
              backdrop-blur-xl
            "
          >

            {/* Glow */}
            <div
              className={`
                absolute inset-0 opacity-40
                bg-gradient-to-br ${card.color}
              `}
            />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-6">

                <p className="text-gray-400">
                  {card.title}
                </p>

                <div className="text-indigo-300">
                  {card.icon}
                </div>

              </div>

              <h2 className="text-5xl font-bold tracking-tight">
                {card.value}
              </h2>

            </div>

          </motion.div>

        ))}

      </div>

      {/* Lower Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            xl:col-span-2
            bg-[#111827]
            border border-white/10
            rounded-3xl
            p-6
          "
        >

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-bold">
              Goal Progress
            </h2>

            <span className="text-indigo-400 font-medium">
              Q2 2026
            </span>

          </div>

          <div className="space-y-8">

            {[
              {
                name: "Increase Sales Revenue",
                progress: 78,
              },
              {
                name: "Improve Customer Retention",
                progress: 52,
              },
              {
                name: "Launch AI Integration",
                progress: 91,
              },
            ].map((goal, index) => (

              <div key={goal.name}>

                <div className="flex justify-between mb-3">

                  <p className="font-medium">
                    {goal.name}
                  </p>

                  <span className="text-gray-400">
                    {goal.progress}%
                  </span>

                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${goal.progress}%`,
                    }}
                    transition={{
                      delay: 0.5 + index * 0.2,
                      duration: 1,
                    }}
                    className="
                      h-full
                      bg-gradient-to-r
                      from-indigo-500
                      to-indigo-300
                      rounded-full
                    "
                  />

                </div>

              </div>

            ))}

          </div>

        </motion.div>

        {/* Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            bg-[#111827]
            border border-white/10
            rounded-3xl
            p-6
          "
        >

          <h2 className="text-3xl font-bold mb-8">
            Recent Activity
          </h2>

          <div className="space-y-6">

            {[
              "Manager approved Goal Sheet",
              "Q2 Check-in submitted",
              "New goal added",
              "Weightage updated",
              "Analytics exported",
            ].map((activity, index) => (

              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="flex gap-3"
              >

                <div className="
                  w-3 h-3 rounded-full
                  bg-indigo-500
                  mt-2
                  shadow-lg shadow-indigo-500/50
                " />

                <div>

                  <p className="font-medium">
                    {activity}
                  </p>

                  <span className="text-sm text-gray-500">
                    2 hours ago
                  </span>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </main>
  );
}