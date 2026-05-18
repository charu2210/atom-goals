export default function ManagerDashboard() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Manager Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Review employee goals and approvals
            </p>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Pending Approvals
            </p>

            <h2 className="text-5xl font-bold text-yellow-400 mt-4">
              4
            </h2>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Approved Goals
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-4">
              18
            </h2>
          </div>

          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">
            <p className="text-gray-400">
              Team Progress
            </p>

            <h2 className="text-5xl font-bold text-indigo-400 mt-4">
              72%
            </h2>
          </div>

        </div>

        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6">

          <h2 className="text-2xl font-bold mb-6">
            Pending Employee Reviews
          </h2>

          <div className="space-y-4">

            {["Aarav", "Riya", "Kunal"].map((employee) => (
              <div
                key={employee}
                className="flex items-center justify-between bg-white/5 p-4 rounded-xl"
              >

                <div>
                  <h3 className="font-semibold">
                    {employee}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    Submitted Goal Sheet
                  </p>
                </div>

                <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg">
                  Review
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>

    </main>
  );
}