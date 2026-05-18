"use client";

import { motion } from "framer-motion";

type Role = "Employee" | "Manager" | "Admin";

interface Props {
  role: Role;
  setRole: (role: Role) => void;
}

const roles: Role[] = [
  "Employee",
  "Manager",
  "Admin",
];

export default function RoleSwitcher({
  role,
  setRole,
}: Props) {

  return (

    <div className="
      flex gap-2
      p-2
      rounded-2xl
      bg-white/5
      border border-white/10
      w-fit
      backdrop-blur-xl
    ">

      {roles.map((item) => {

        const active = role === item;

        return (

          <button
            key={item}
            onClick={() => setRole(item)}
            className="
              relative px-5 py-2
              rounded-xl
              text-sm font-medium
              transition-all
            "
          >

            {active && (
              <motion.div
                layoutId="role-pill"
                className="
                  absolute inset-0
                  rounded-xl
                  bg-indigo-500
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">
              {item}
            </span>

          </button>

        );
      })}

    </div>

  );
}