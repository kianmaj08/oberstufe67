"use client"

import React from 'react'
import Link from 'next/link'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Techstack', href: '/techstack' },
  { label: 'Participate', href: '/participate' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function NavMenu() {
  return (
    <nav className="w-full bg-[#fafafa]">
      <div className="flex items-center justify-center py-10 md:py-12">
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-0 md:flex-wrap md:justify-center">
          {menuItems.map((item) => (
            <li key={item.label} className="list-none">
              <Link href={item.href} className="relative inline-block group">
                <span
                  className="relative z-10 block uppercase text-[#262626] font-semibold transition-colors duration-300 group-hover:text-white text-lg py-2 px-4 md:text-sm lg:text-base"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item.label}
                </span>
                <span className="absolute inset-0 border-t-2 border-b-2 border-[#262626] scale-y-[2] opacity-0 transition-all duration-300 origin-center group-hover:scale-y-100 group-hover:opacity-100" />
                <span className="absolute top-[2px] left-0 w-full h-full bg-[#262626] scale-0 opacity-0 transition-all duration-300 origin-top group-hover:scale-100 group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
