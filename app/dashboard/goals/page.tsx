"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase/client";

export default function GoalsPage() {

  const [goals, setGoals] = useState([
    {
      title: "",
      weightage: 0,
    },
  ]);

  const totalWeightage = goals.reduce(
    (sum, goal) => sum + Number(goal.weightage),
    0
  );

  const deleteGoal = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);

    setGoals(updatedGoals);

    toast.success("Goal removed");
  };

  const addGoal = () => {

    if (goals.length >= 8) {
      toast.error("Maximum 8 goals allowed");
      return;
    }

    toast.success("Goal added");

    setGoals([
      ...goals,
      {
        title: "",
        weightage: 0,
      },
    ]);
  };

  const updateGoal = (
    index: number,
    field: string,
    value: string | number
  ) => {

    const updatedGoals = [...goals];

    updatedGoals[index] = {
      ...updatedGoals[index],
      [field]: value,
    };

    setGoals(updatedGoals);
  };

  const saveGoals = async () => {

  const formattedGoals = goals.map((goal) => ({
    title: goal.title,
    weightage: goal.weightage,
  }));

  const response = await fetch("/api/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      goals: formattedGoals,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    toast.error(result.error);
    return;
  }

  toast.success("Goals submitted successfully");
};

  const fetchGoals = async () => {

    const { data, error } = await supabase
      .from("goals")
      .select("*");

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white p-8">

      <div className="max-w-4xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Goal Sheet
            </h1>

            <p className="text-gray-400 mt-2">
              Create and manage your goals
            </p>
          </div>

          <div
            className={`
              px-6 py-3 rounded-xl font-bold
              ${totalWeightage === 100
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"}
            `}
          >
            {totalWeightage}% / 100%
          </div>

        </div>

        <div className="space-y-6">

          {goals.map((goal, index) => (

            <div
              key={index}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6"
            >

              <div className="flex items-center justify-between mb-4">

                <h2 className="text-xl font-semibold">
                  Goal {index + 1}
                </h2>

                <button
                  onClick={() => deleteGoal(index)}
                  className="text-red-400 hover:text-red-300 transition-all"
                >
                  Delete
                </button>

              </div>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Goal Title"
                  value={goal.title}
                  onChange={(e) =>
                    updateGoal(index, "title", e.target.value)
                  }
                  className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10"
                />

                <input
                  type="number"
                  placeholder="Weightage %"
                  value={goal.weightage}
                  onChange={(e) =>
                    updateGoal(index, "weightage", Number(e.target.value))
                  }
                  className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10"
                />

                {goal.weightage > 0 && goal.weightage < 10 && (
                  <p className="text-red-400 text-sm">
                    Minimum weightage is 10%
                  </p>
                )}

              </div>

            </div>

          ))}

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={addGoal}
            className="bg-white/10 hover:bg-white/20 transition-all px-5 py-3 rounded-xl"
          >
            + Add Goal
          </button>

          <button
            onClick={saveGoals}
            disabled={totalWeightage !== 100}
            className={`
              px-5 py-3 rounded-xl font-semibold transition-all
              ${totalWeightage === 100
                ? "bg-indigo-500 hover:bg-indigo-600"
                : "bg-gray-700 cursor-not-allowed"}
            `}
          >
            Submit Goals
          </button>

        </div>

      </div>

    </main>
  );
}