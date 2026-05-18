export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Organization-wide goal insights
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Completion Rate
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-4">
              82%
            </h2>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Active Goals
            </p>

            <h2 className="text-5xl font-bold text-indigo-400 mt-4">
              143
            </h2>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Employees
            </p>

            <h2 className="text-5xl font-bold text-blue-400 mt-4">
              36
            </h2>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Pending Reviews
            </p>

            <h2 className="text-5xl font-bold text-yellow-400 mt-4">
              9
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 h-[300px]">

            <h2 className="text-2xl font-bold mb-6">
              Goal Status Distribution
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between">
                <span>Completed</span>
                <span className="text-green-400">
                  62%
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3">
                <div className="bg-green-400 h-3 rounded-full w-[62%]" />
              </div>

              <div className="flex items-center justify-between">
                <span>On Track</span>
                <span className="text-yellow-400">
                  28%
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full w-[28%]" />
              </div>

              <div className="flex items-center justify-between">
                <span>Delayed</span>
                <span className="text-red-400">
                  10%
                </span>
              </div>

              <div className="w-full bg-white/10 rounded-full h-3">
                <div className="bg-red-400 h-3 rounded-full w-[10%]" />
              </div>

            </div>

          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 h-[300px]">

            <h2 className="text-2xl font-bold mb-6">
              Department Performance
            </h2>

            <div className="space-y-4">

              {[
                "Engineering",
                "Sales",
                "HR",
                "Marketing",
              ].map((dept) => (
                <div
                  key={dept}
                  className="flex items-center justify-between bg-white/5 p-4 rounded-xl"
                >

                  <span>{dept}</span>

                  <span className="text-indigo-400 font-semibold">
                    {Math.floor(Math.random() * 40 + 60)}%
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}