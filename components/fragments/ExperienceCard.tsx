import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface ExperienceCardProps {
  reverse?: boolean;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

function ExperienceCard({
  reverse = false,
  title,
  description,
  date,
  icon,
  children,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "flex gap-x-5 py-10",
        reverse ? "flex-reverse" : "flex-row sm:flex-row-reverse"
      )}
    >
      <motion.div
        className="w-full rounded-sm p-4 text-yellow-500 hidden sm:block"
        initial={{ x: reverse ? "-30%" : "30%", opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          x: "0%",
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        <h1 className={cn("text-2xl", reverse ? "text-end" : "")}>{date}</h1>
      </motion.div>
      <motion.div
        className="h-fit bg-white border-4 border-yellow-500 rounded-full p-4 flex items-center justify-center z-20"
        initial={{ scale: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          scale: [0, 1.2, 1],
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
      >
        {icon}
      </motion.div>
      <motion.div
        className="w-full text-yellow-500 bg-neutral-800 rounded-md p-4"
        initial={{ x: reverse ? "30%" : "-30%", opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          x: "0%",
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
      >
        {children ? (
          children
        ) : (
          <>
            <h1 className="lg:text-4xl text-2xl">{title}</h1>
            <p className="lg:text-sm text-xs my-4 font-mono font-semibold text-white">
              {description}
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default ExperienceCard;
