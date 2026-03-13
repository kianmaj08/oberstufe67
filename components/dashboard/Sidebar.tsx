"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { UserButton, useUser } from "@clerk/nextjs"

const navItems = [
  {
    label: "Projekte",
    href: "/dashboard",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="1" width="6" height="6" rx="0.5" />
        <rect x="9" y="1" width="6" height="6" rx="0.5" />
        <rect x="1" y="9" width="6" height="6" rx="0.5" />
        <rect x="9" y="9" width="6" height="6" rx="0.5" />
      </svg>
    ),
  },
  {
    label: "Vorgestelltes Projekt",
    href: "/dashboard/featured",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
      </svg>
    ),
  },
  {
    label: "Seiteninhalte",
    href: "/dashboard/pages",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" />
        <path d="M5 5h6M5 8h6M5 11h4" />
      </svg>
    ),
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user } = useUser()

  return (
    <aside
      className="fixed left-0 top-0 h-full w-[220px] border-r border-[#E5E5E5] bg-white flex flex-col z-20"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Logo */}
      <div className="px-6 py-6 border-b border-[#E5E5E5]">
        <Link href="/" className="text-sm font-bold tracking-tight text-black hover:text-neutral-600 transition-colors">
          oberstufe.site
        </Link>
        <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">Dashboard</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.href)

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-colors duration-150",
                isActive
                  ? "bg-black text-white"
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-black"
              )}
            >
              <span className={isActive ? "text-white" : "text-neutral-400"}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User + footer */}
      <div className="px-4 py-4 border-t border-[#E5E5E5] flex flex-col gap-3">
        {/* Clerk UserButton row */}
        <div className="flex items-center gap-3 px-2 py-1">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-7 h-7",
              },
            }}
          />
          {user && (
            <span className="text-xs text-neutral-600 truncate">
              {user.primaryEmailAddress?.emailAddress ?? user.fullName}
            </span>
          )}
        </div>

        <Link
          href="/"
          className="text-xs text-neutral-400 hover:text-black transition-colors flex items-center gap-1.5 px-2"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 2L3 6l4 4" />
          </svg>
          Zur Startseite
        </Link>
      </div>
    </aside>
  )
}
