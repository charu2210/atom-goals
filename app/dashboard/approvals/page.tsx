"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ApprovalsPage() {

  const [approvals, setApprovals] = useState([
    {
      id: 1,
      employee: "Charu Sharma",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Riya Kapoor",
      status: "Pending",
    },
    {
      id: 3,
      employee: "Aarav Mehta",
      status: "Pending",
    },
  ]);

  const updateStatus = (
    id: number,
    newStatus: string
  ) => {

    const updated = approvals.map((item) =>
      item.id === id
        ? { ...item, status: newStatus }
        : item
    );

    setApprovals(updated);

    toast.success(
      `Goal sheet ${newStatus.toLowerCase()}`
    );
  };

  return (
    <div>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Goal Approvals
        </h1>

        <p className="text-gray-400 mt-2">
          Review and approve submitted goals
        </p>

      </div>

      <div className="space-y-6">

        {approvals.map((sheet) => (

          <div
            key={sheet.id}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6"
          >

            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold">
                  {sheet.employee}
                </h2>

                <p className="text-gray-400">
                  Submitted 5 goals
                </p>

              </div>

              <span
                className={`
                  px-4 py-2 rounded-xl
                  ${sheet.status === "Approved"
                    ? "bg-green-500/20 text-green-400"
                    : sheet.status === "Rejected"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-yellow-500/20 text-yellow-400"}
                `}
              >
                {sheet.status}
              </span>

            </div>

            <div className="space-y-4 mb-6">

              {[1, 2].map((goal) => (

                <div
                  key={goal}
                  className="bg-white/5 p-4 rounded-xl"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <h3 className="font-semibold">
                        Increase Sales Revenue
                      </h3>

                      <p className="text-gray-400 text-sm">
                        Weightage: 20%
                      </p>

                    </div>

                    <button className="text-indigo-400 hover:text-indigo-300">
                      Edit
                    </button>

                  </div>

                </div>

              ))}

            </div>

            <div className="flex gap-4">

              <button
                onClick={() =>
                  updateStatus(sheet.id, "Approved")
                }
                className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-semibold transition-all"
              >
                Approve
              </button>

              <button
                onClick={() =>
                  updateStatus(sheet.id, "Rejected")
                }
                className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl font-semibold transition-all"
              >
                Reject
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}