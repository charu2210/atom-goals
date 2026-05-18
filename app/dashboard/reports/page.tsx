export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white p-8">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-8">

          <div>
            <h1 className="text-4xl font-bold">
              Reports
            </h1>

            <p className="text-gray-400 mt-2">
              Planned vs Actual Achievement
            </p>
          </div>

          <button className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-semibold">
            Export CSV
          </button>

        </div>

        <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-white/5">

              <tr className="text-left">

                <th className="p-4">Employee</th>
                <th className="p-4">Goal</th>
                <th className="p-4">Target</th>
                <th className="p-4">Achievement</th>
                <th className="p-4">Status</th>

              </tr>

            </thead>

            <tbody>

              {[1, 2, 3].map((row) => (
                <tr
                  key={row}
                  className="border-t border-white/10"
                >

                  <td className="p-4">Charu</td>
                  <td className="p-4">
                    Increase Revenue
                  </td>

                  <td className="p-4">
                    20%
                  </td>

                  <td className="p-4">
                    15%
                  </td>

                  <td className="p-4">
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-lg">
                      On Track
                    </span>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}