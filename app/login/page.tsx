export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white flex items-center justify-center">
      <div className="bg-[#111827] p-8 rounded-2xl w-[400px] border border-white/10">
        <h1 className="text-3xl font-bold mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-6">
          Sign in to AtomGoals
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10"
          />

          <button
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition-all p-3 rounded-lg font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}