import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface headerProps {
  title: string;
  subTitle: string;
  className?: string;
}

function SectionHeader({ title, subTitle, className }: headerProps) {
  return (
    <motion.div
      className={cn("grid mb-10", className)}
      initial={{ y: "-100%", opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{
        repeatCount: 1,
        y: "0%",
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
    >
      <p className="text-xs sm:text-sm font-mono text-yellow-500">
        {subTitle.toUpperCase()}
      </p>
      <h1 className="text-5xl sm:text-7xl">{title}.</h1>
    </motion.div>
  );
}

export default SectionHeader;
