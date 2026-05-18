"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  Target,
  CheckCircle,
  Clock3,
  Activity,
} from "lucide-react";

import RoleSwitcher from "@/components/ui/RoleSwitcher";

type Role =
  | "Employee"
  | "Manager"
  | "Admin";

const dashboardContent = {

  Employee: {
    title: "Your Goals",
    subtitle:
      "Track progress, complete check-ins, and stay aligned with team priorities.",

    stats: [
      {
        title: "Goals",
        value: "5",
        icon: <Target size={20} />,
      },
      {
        title: "Completed",
        value: "78%",
        icon: <CheckCircle size={20} />,
      },
      {
        title: "Pending Reviews",
        value: "2",
        icon: <Clock3 size={20} />,
      },
      {
        title: "Recent Activity",
        value: "14",
        icon: <Activity size={20} />,
      },
    ],

    activities: [
      "Your manager approved Q2 goals",
      "You submitted a quarterly check-in",
      "Weightage updated for Revenue Goal",
      "New goal added to roadmap",
    ],
  },

  Manager: {
    title: "Team Overview",
    subtitle:
      "Review submissions, monitor execution, and support team performance.",

    stats: [
      {
        title: "Team Members",
        value: "12",
        icon: <Target size={20} />,
      },
      {
        title: "Approved Goals",
        value: "34",
        icon: <CheckCircle size={20} />,
      },
      {
        title: "Pending Approvals",
        value: "6",
        icon: <Clock3 size={20} />,
      },
      {
        title: "Team Activity",
        value: "89",
        icon: <Activity size={20} />,
      },
    ],

    activities: [
      "Aditi submitted Q2 goals",
      "3 goal sheets need approval",
      "Customer Success team updated KPIs",
      "Engineering completed milestone review",
    ],
  },

  Admin: {
    title: "Organization Dashboard",
    subtitle:
      "Monitor alignment, performance trends, and company-wide progress.",

    stats: [
      {
        title: "Departments",
        value: "8",
        icon: <Target size={20} />,
      },
      {
        title: "Org Completion",
        value: "82%",
        icon: <CheckCircle size={20} />,
      },
      {
        title: "Open Reviews",
        value: "18",
        icon: <Clock3 size={20} />,
      },
      {
        title: "Active Users",
        value: "126",
        icon: <Activity size={20} />,
      },
    ],

    activities: [
      "Quarterly analytics exported",
      "Marketing exceeded alignment target",
      "AI initiative moved to execution phase",
      "Leadership review scheduled tomorrow",
    ],
  },
};

export default function DashboardPage() {

  const [role, setRole] = useState<Role>(
    "Employee"
  );

  const content = dashboardContent[role];

  return (

    <main className="
      relative min-h-screen
      p-8 text-white overflow-hidden
    ">

      {/* Ambient Background */}
      <div className="
        absolute top-[-200px] right-[-150px]
        w-[500px] h-[500px]
        bg-indigo-500/20
        blur-3xl rounded-full
      " />

      <div className="
        absolute bottom-[-250px] left-[-200px]
        w-[500px] h-[500px]
        bg-blue-500/10
        blur-3xl rounded-full
      " />

      {/* Header */}
      <div className="
        relative z-10
        flex flex-col xl:flex-row
        justify-between gap-8
        mb-10
      ">

        <div>

          <div className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-full
            border border-white/10
            bg-white/5
            text-gray-300 text-sm
            mb-5
          ">
            AtomGoals
          </div>

          <motion.h1
            key={content.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              text-5xl font-bold
              tracking-tight mb-3
            "
          >
            {content.title}
          </motion.h1>

          <motion.p
            key={content.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              text-gray-400
              text-lg max-w-2xl
            "
          >
            {content.subtitle}
          </motion.p>

          <div className="mt-6">

            <RoleSwitcher
              role={role}
              setRole={setRole}
            />

          </div>

        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="
            bg-indigo-500 hover:bg-indigo-600
            px-6 py-4 rounded-2xl
            font-semibold h-fit
            shadow-lg shadow-indigo-500/20
          "
        >
          + Create Goal
        </motion.button>

      </div>

      {/* Stats */}
      <div className="
        relative z-10
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        gap-6 mb-8
      ">

        {content.stats.map((card, index) => (

          <motion.div
            key={card.title}
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
              p-6
            "
          >

            <div className="
              flex items-center
              justify-between mb-6
            ">

              <p className="text-gray-400">
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
              tracking-tight
            ">
              {card.value}
            </h2>

          </motion.div>

        ))}

      </div>

      {/* Bottom Grid */}
      <div className="
        relative z-10
        grid grid-cols-1
        xl:grid-cols-3
        gap-6
      ">

        {/* Progress */}
        <div className="
          xl:col-span-2
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        ">

          <div className="mb-8">

            <h2 className="
              text-3xl font-bold mb-2
            ">
              Progress
            </h2>

            <p className="text-gray-400">
              Current quarter performance
            </p>

          </div>

          <div className="space-y-8">

            {[
              {
                name: "Revenue Growth",
                progress: 78,
              },
              {
                name: "Customer Retention",
                progress: 52,
              },
              {
                name: "AI Rollout",
                progress: 91,
              },
            ].map((goal, index) => (

              <div key={goal.name}>

                <div className="
                  flex justify-between
                  mb-3
                ">

                  <p className="font-medium">
                    {goal.name}
                  </p>

                  <span className="
                    text-indigo-300
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
                      delay: index * 0.15,
                      duration: 0.8,
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

        {/* Activity */}
        <div className="
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        ">

          <div className="mb-8">

            <h2 className="
              text-3xl font-bold mb-2
            ">
              Activity
            </h2>

            <p className="text-gray-400">
              Latest updates
            </p>

          </div>

          <div className="space-y-5">

            {content.activities.map(
              (activity, index) => (

                <motion.div
                  key={index}
                  whileHover={{ x: 4 }}
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
                      leading-relaxed
                    ">
                      {activity}
                    </p>

                    <span className="
                      text-sm text-gray-500
                    ">
                      2 hours ago
                    </span>

                  </div>

                </motion.div>

              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
}