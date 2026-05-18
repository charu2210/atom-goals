import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen bg-[#0A0F1E] text-white flex">

      <Sidebar />

      <section className="flex-1 p-8">
        {children}
      </section>

    </main>
  );
}