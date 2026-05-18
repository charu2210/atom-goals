"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const reviews = [
  {
    employee: "Aarav",
    title: "Submitted Goal Sheet",
  },
  {
    employee: "Riya",
    title: "Submitted Goal Sheet",
  },
  {
    employee: "Kunal",
    title: "Submitted Goal Sheet",
  },
];

export default function ManagerPage() {

  return (

    <main className="
      min-h-screen
      bg-[#070B14]
      text-white
      p-8
    ">

      <div className="
        max-w-6xl mx-auto
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
            Team Management
          </div>

          <h1 className="
            text-5xl font-black
            mb-3
          ">
            Manager Workspace
          </h1>

          <p className="
            text-gray-400 text-lg
          ">
            Review employee goals and approvals.
          </p>

        </div>

        {/* STATS */}
        <div className="
          grid md:grid-cols-3
          gap-6 mb-10
        ">

          <div className="
            rounded-3xl
            bg-white/5
            border border-white/10
            p-8
          ">
            <p className="text-gray-400 mb-3">
              Pending Approvals
            </p>

            <h2 className="
              text-6xl font-black
              text-yellow-400
            ">
              4
            </h2>
          </div>

          <div className="
            rounded-3xl
            bg-white/5
            border border-white/10
            p-8
          ">
            <p className="text-gray-400 mb-3">
              Approved Goals
            </p>

            <h2 className="
              text-6xl font-black
              text-green-400
            ">
              18
            </h2>
          </div>

          <div className="
            rounded-3xl
            bg-white/5
            border border-white/10
            p-8
          ">
            <p className="text-gray-400 mb-3">
              Team Progress
            </p>

            <h2 className="
              text-6xl font-black
              text-indigo-400
            ">
              72%
            </h2>
          </div>

        </div>

        {/* REVIEWS */}
        <div className="
          rounded-[32px]
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-8
        ">

          <h2 className="
            text-4xl font-bold
            mb-8
          ">
            Pending Employee Reviews
          </h2>

          <div className="
            space-y-5
          ">

            {reviews.map((review, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.01,
                }}
                className="
                  bg-white/5
                  border border-white/5
                  rounded-2xl
                  p-6
                  flex items-center
                  justify-between
                "
              >

                <div>

                  <h3 className="
                    text-2xl font-bold
                  ">
                    {review.employee}
                  </h3>

                  <p className="
                    text-gray-400
                    mt-1
                  ">
                    {review.title}
                  </p>

                </div>

                <Link
                  href="/dashboard/approvals"
                  className="
                    px-6 py-3
                    rounded-2xl
                    bg-indigo-500
                    hover:bg-indigo-600
                    transition-all
                    font-semibold
                    shadow-lg
                    shadow-indigo-500/20
                  "
                >
                  Review
                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}