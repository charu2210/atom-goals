"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  "dashboard",
  "goals",
  "check-ins",
  "manager",
  "approvals",
  "analytics",
  "reports",
];

export default function Sidebar() {

  const pathname = usePathname();

  return (
    <aside className="
      w-64
      border-r border-white/10
      bg-black/20
      backdrop-blur-xl
      p-6
      min-h-screen
    ">

      <h1 className="
        text-4xl font-bold mb-10
        bg-gradient-to-r
        from-indigo-300
        to-indigo-500
        bg-clip-text text-transparent
      ">
        AtomGoals
      </h1>

      <nav className="space-y-3">

        {links.map((link) => {

          const href =
            link === "dashboard"
              ? "/dashboard"
              : `/dashboard/${link}`;

          const active = pathname === href;

          return (

            <Link
              key={link}
              href={href}
              className={`
                block px-4 py-3 rounded-2xl
                transition-all duration-200
                capitalize

                ${active
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"}
              `}
            >
              {link}
            </Link>

          );
        })}

      </nav>

    </aside>
  );
}