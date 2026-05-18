"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Target,
  CheckCircle2,
  Clock3,
  Activity,
  TrendingUp,
} from "lucide-react";

import RoleSwitcher from "@/components/ui/RoleSwitcher";

type Role =
  | "Employee"
  | "Manager"
  | "Admin";

const roleContent = {

  Employee: {
    heading: "Your work, at a glance.",
    sub:
      "Track progress, submit updates, and stay aligned with your team.",
  },

  Manager: {
    heading: "See how the team is moving.",
    sub:
      "Review progress, approvals, and execution across your team.",
  },

  Admin: {
    heading: "Company-wide visibility.",
    sub:
      "Monitor alignment, performance, and operational momentum.",
  },

};

export default function DashboardPage() {

  const [role, setRole] = useState<Role>(
    "Employee"
  );

  const content = roleContent[role];

  return (

    <main className="
      min-h-screen
      bg-[#070B14]
      text-white
      overflow-hidden
      relative
      p-8
    ">

      {/* Background Effects */}
      <div className="
        absolute top-[-200px] left-[20%]
        w-[500px] h-[500px]
        bg-indigo-500/20
        blur-3xl rounded-full
      " />

      <div className="
        absolute bottom-[-250px] right-[10%]
        w-[500px] h-[500px]
        bg-blue-500/10
        blur-3xl rounded-full
      " />

      <div className="
        relative z-10
        max-w-7xl mx-auto
      ">

        {/* Header */}
        <div className="
          flex flex-col xl:flex-row
          justify-between gap-8
          mb-10
        ">

          <div>

            <div className="
              inline-flex items-center gap-2
              px-4 py-2 rounded-full
              bg-white/5
              border border-white/10
              text-sm text-gray-300
              mb-5
            ">
              ● Live workspace
            </div>

            <motion.h1
              key={content.heading}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-5xl xl:text-6xl
                font-bold tracking-tight
                mb-4
                max-w-3xl
              "
            >
              {content.heading}
            </motion.h1>

            <motion.p
              key={content.sub}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="
                text-lg text-gray-400
                max-w-2xl
              "
            >
              {content.sub}
            </motion.p>

            <div className="mt-6">

              <RoleSwitcher
                role={role}
                setRole={setRole}
              />

            </div>

          </div>

          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              h-fit
              bg-indigo-500
              hover:bg-indigo-600
              transition-all
              px-7 py-4
              rounded-2xl
              font-semibold
              shadow-xl
              shadow-indigo-500/20
            "
          >
            + New Goal
          </motion.button>

        </div>

        {/* Main Grid */}
        <div className="
          grid grid-cols-1
          xl:grid-cols-12
          gap-6
        ">

          {/* BIG CARD */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              xl:col-span-8
              rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
              overflow-hidden
              relative
            "
          >

            <div className="
              absolute top-0 right-0
              w-[300px] h-[300px]
              bg-indigo-500/10
              blur-3xl
              rounded-full
            " />

            <div className="relative z-10">

              <div className="
                flex items-center
                justify-between
                mb-10
              ">

                <div>

                  <p className="
                    text-gray-400 mb-2
                  ">
                    Quarter Progress
                  </p>

                  <h2 className="
                    text-4xl font-bold
                  ">
                    78% complete
                  </h2>

                </div>

                <div className="
                  w-20 h-20 rounded-3xl
                  bg-indigo-500/10
                  border border-indigo-500/20
                  flex items-center justify-center
                ">

                  <TrendingUp
                    size={34}
                    className="text-indigo-300"
                  />

                </div>

              </div>

              <div className="space-y-8">

                {[
                  {
                    name: "Revenue Growth",
                    value: 78,
                  },
                  {
                    name: "Customer Retention",
                    value: 52,
                  },
                  {
                    name: "AI Rollout",
                    value: 91,
                  },
                ].map((goal, index) => (

                  <div key={goal.name}>

                    <div className="
                      flex justify-between
                      mb-3
                    ">

                      <span className="
                        font-medium text-lg
                      ">
                        {goal.name}
                      </span>

                      <span className="
                        text-indigo-300
                      ">
                        {goal.value}%
                      </span>

                    </div>

                    <div className="
                      h-4 rounded-full
                      bg-white/5
                      overflow-hidden
                    ">

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${goal.value}%`,
                        }}
                        transition={{
                          delay: index * 0.12,
                          duration: 0.9,
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

                ))}

              </div>

            </div>

          </motion.div>

          {/* SIDE STATS */}
          <div className="
            xl:col-span-4
            grid grid-cols-1
            gap-6
          ">

            {[
              {
                title: "Goals",
                value: "12",
                icon: <Target size={20} />,
              },
              {
                title: "Completed",
                value: "8",
                icon: <CheckCircle2 size={20} />,
              },
              {
                title: "Waiting",
                value: "3",
                icon: <Clock3 size={20} />,
              },
            ].map((card, index) => (

              <motion.div
                key={card.title}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                }}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-6
                "
              >

                <div className="
                  flex items-center
                  justify-between
                  mb-6
                ">

                  <p className="
                    text-gray-400
                  ">
                    {card.title}
                  </p>

                  <div className="
                    p-3 rounded-2xl
                    bg-indigo-500/10
                    text-indigo-300
                  ">
                    {card.icon}
                  </div>

                </div>

                <h2 className="
                  text-5xl font-bold
                ">
                  {card.value}
                </h2>

              </motion.div>

            ))}

          </div>

          {/* Activity Feed */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              xl:col-span-7
              rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            "
          >

            <div className="mb-8">

              <h2 className="
                text-3xl font-bold
                mb-2
              ">
                Momentum
              </h2>

              <p className="
                text-gray-400
              ">
                Latest updates from your workspace
              </p>

            </div>

            <div className="space-y-5">

              {[
                "Quarterly goals submitted",
                "Manager approved AI initiative",
                "Revenue target updated",
                "New milestone added",
                "Review cycle started",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="
                    flex gap-4
                    p-4 rounded-2xl
                    hover:bg-white/5
                    transition-all
                  "
                >

                  <div className="
                    w-3 h-3 rounded-full
                    bg-indigo-500 mt-2
                    animate-pulse
                  " />

                  <div>

                    <p className="
                      font-medium
                    ">
                      {item}
                    </p>

                    <span className="
                      text-sm text-gray-500
                    ">
                      2h ago
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* Focus Card */}
          <motion.div
            whileHover={{
              y: -4,
            }}
            className="
              xl:col-span-5
              rounded-[32px]
              border border-white/10
              bg-gradient-to-br
              from-indigo-500/20
              to-blue-500/10
              backdrop-blur-xl
              p-8
              overflow-hidden
              relative
            "
          >

            <div className="
              absolute right-[-80px]
              top-[-80px]
              w-[220px] h-[220px]
              bg-white/10
              blur-3xl rounded-full
            " />

            <div className="relative z-10">

              <p className="
                text-indigo-200
                mb-4
              ">
                Focus this week
              </p>

              <h2 className="
                text-4xl font-bold
                leading-tight mb-6
              ">
                Improve customer retention across Q2.
              </h2>

              <p className="
                text-gray-300
                leading-relaxed mb-8
              ">
                Current retention metrics are below target.
                Prioritize onboarding improvements and
                support response times.
              </p>

              <button className="
                px-6 py-3 rounded-2xl
                bg-white text-black
                font-semibold
                hover:scale-105
                transition-all
              ">
                View Details
              </button>

            </div>

          </motion.div>

        </div>

      </div>

    </main>
  );
}