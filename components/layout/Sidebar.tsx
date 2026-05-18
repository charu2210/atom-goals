"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Target,
  ClipboardCheck,
  Users,
  CheckCircle2,
  BarChart3,
  FileText,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Goals",
    href: "/dashboard/goals",
    icon: Target,
  },
  {
    name: "Check-Ins",
    href: "/dashboard/check-ins",
    icon: ClipboardCheck,
  },
  {
    name: "Manager",
    href: "/dashboard/manager",
    icon: Users,
  },
  {
    name: "Approvals",
    href: "/dashboard/approvals",
    icon: CheckCircle2,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Reports",
    href: "/dashboard/reports",
    icon: FileText,
  },
];

export default function Sidebar() {

  const pathname = usePathname();

  return (

    <aside className="
      w-[300px]
      min-h-screen
      bg-[#0A0F1E]
      border-r border-white/10
      p-6
      sticky top-0
    ">

      <div className="mb-10">

        <h1 className="
          text-4xl font-black
          tracking-tight
          bg-gradient-to-r
          from-indigo-300
          to-indigo-500
          bg-clip-text
          text-transparent
        ">
          AtomGoals
        </h1>

        <p className="
          text-gray-500 mt-2
          text-sm
        ">
          Work tracking, reimagined.
        </p>

      </div>

      <nav className="space-y-3">

        {links.map((link) => {

          const active =
            pathname === link.href;

          const Icon = link.icon;

          return (

            <Link
              key={link.name}
              href={link.href}
              className={`
                flex items-center gap-4
                px-5 py-4
                rounded-2xl
                transition-all duration-300
                group
                relative overflow-hidden
                ${
                  active
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >

              {active && (
                <div className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-indigo-500/20
                  to-transparent
                " />
              )}

              <Icon
                size={20}
                className="
                  relative z-10
                  transition-transform
                  group-hover:scale-110
                "
              />

              <span className="
                relative z-10
                font-medium
              ">
                {link.name}
              </span>

            </Link>

          );
        })}

      </nav>

    </aside>
  );
}