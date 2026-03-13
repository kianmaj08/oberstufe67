"use client";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
  onClick?: () => void;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  onItemClick?: () => void;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "#0066FF",
  skew = 0,
  onItemClick,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-fit flex-col gap-4 px-4">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center justify-end gap-2 cursor-pointer text-black"
          initial="initial"
          whileHover="hover"
        >
          <MotionLink
            href={item.href}
            onClick={onItemClick}
            variants={{
              initial: { x: 40, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-semibold text-3xl no-underline text-right"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {item.label}
          </MotionLink>
          <motion.div
            variants={{
              initial: { x: "100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0 flex-shrink-0"
          >
            <ArrowLeft strokeWidth={3} className="size-8" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
