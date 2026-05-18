export default function CheckinsPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white p-8">

      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Quarterly Check-ins
          </h1>

          <p className="text-gray-400 mt-2">
            Update progress against your goals
          </p>
        </div>

        <div className="space-y-6">

          {[1, 2, 3].map((goal) => (
            <div
              key={goal}
              className="bg-[#111827] border border-white/10 rounded-2xl p-6"
            >

              <div className="flex items-center justify-between mb-6">

                <div>
                  <h2 className="text-2xl font-bold">
                    Increase Sales Revenue
                  </h2>

                  <p className="text-gray-400">
                    Target: 20%
                  </p>
                </div>

                <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl">
                  On Track
                </span>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="number"
                  placeholder="Actual Achievement"
                  className="p-3 rounded-lg bg-[#1F2937] border border-white/10"
                />

                <select
                  className="p-3 rounded-lg bg-[#1F2937] border border-white/10"
                >
                  <option>Not Started</option>
                  <option>On Track</option>
                  <option>Completed</option>
                </select>

              </div>

              <textarea
                placeholder="Add progress notes..."
                className="w-full mt-4 p-3 rounded-lg bg-[#1F2937] border border-white/10"
              />

            </div>
          ))}

        </div>

        <button className="mt-8 bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold">
          Submit Check-ins
        </button>

      </div>

    </main>
  );
}