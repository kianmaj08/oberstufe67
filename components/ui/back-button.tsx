"use client"

import { useRouter } from "next/navigation"

export function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-black transition-colors duration-200 group"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:-translate-x-0.5"
      >
        <path d="M9 2L4 7l5 5" />
      </svg>
      Zuruck
    </button>
  )
}
