import { motion } from "framer-motion";

interface CirclesProps {
  numberOfCircles: number;
  children?: React.ReactNode;
}

function Circles({ numberOfCircles, children }: CirclesProps) {
  const renderCircles = (count: number) => {
    if (count === 0) return <>{children}</>;
    return (
      <div className="w-4/5 h-4/5 md:border-2 border-neutral-800 rounded-full p-5 flex items-center justify-center">
        {renderCircles(count - 1)}
      </div>
    );
  };

  return (
    <motion.div
      animate={{
        width: ["0", "65rem"],
        height: ["0", "65rem"],
        transition: {
          ease: "easeOut",
          duration: 2,
        },
      }}
      className="md:border-2 border-neutral-800 rounded-full p-5 flex items-center justify-center md:-mt-64"
    >
      {renderCircles(numberOfCircles - 1)}
    </motion.div>
  );
}

export default Circles;
