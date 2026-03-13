"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { MenuVertical } from "@/components/ui/menu-vertical";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Admin", href: "/dashboard" },
  { label: "Einstellungen", href: "#settings" },
  { label: "About Us", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export function GlobalNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button - fixed top right */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-neutral-800 transition-colors duration-200"
          aria-label={open ? "Menu schliessen" : "Menu offnen"}
        >
          <MenuToggleIcon open={open} className="size-5" duration={400} />
        </button>

        {/* Dropdown menu - directly below button */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-14 right-0 z-40"
            >
              <MenuVertical
                menuItems={menuItems}
                color="#3385FF"
                onItemClick={() => setOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
