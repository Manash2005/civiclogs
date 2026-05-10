import {
  LayoutDashboard,
  MapPinned,
  Users,
  ClipboardList,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Reported Issues",
      icon: MapPinned,
    },

    {
      name: "Volunteers",
      icon: Users,
    },

    {
      name: "Tasks",
      icon: ClipboardList,
    },

    {
      name: "Settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex">
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg hover:bg-primary/10 text-primary"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:relative
          h-screen
          bg-[#344E41]
          text-white
          min-h-screen
          transition-all
          duration-300
          z-40
          ${open ? "md:w-64" : "md:w-20"}
          ${mobileOpen ? "w-64" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* TOP */}
        <div
          className="
            flex
            items-center
            justify-between
            p-4
            border-b
            border-white/10
            mt-12 md:mt-0
          "
        >
          {open && (
            <h1
              className="
                text-xl md:text-2xl
                font-bold
              "
            >
              CivicLogs
            </h1>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="
              hidden md:block
              p-2
              rounded-lg
              hover:bg-white/10
            "
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MENU */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="
                      w-full
                      flex
                      items-center
                      gap-4
                      px-4
                      py-3
                      rounded-xl
                      hover:bg-[#588157]
                      transition-all
                      text-sm md:text-base
                    "
                  >
                    <Icon size={22} />

                    {open && <span>{item.name}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* BOTTOM */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            p-4
          "
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="
              w-full
              flex
              items-center
              gap-4
              px-4
              py-3
              rounded-xl
              hover:bg-red-500
              transition-all
              text-sm md:text-base
            "
          >
            <LogOut size={22} />

            {open && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </div>
  );
}
