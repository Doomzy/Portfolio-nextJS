import { overViewData } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./fragments/SectionHeader";

function Overview() {
  return (
    <div id="Overview" className="px-10 md:px-24 lg:px-36 xl:px-64 pt-32 pb-20">
      <SectionHeader title="Overview" subTitle="Introduction" />
      <motion.div
        className="max-w-full sm:max-w-[90%] xl:max-w-[70%] font-mono mb-10 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
      >
        {overViewData.overview}
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 xl:gap-12 w-full">
        {overViewData.cards.map((card, index) => (
          <motion.div
            key={card.title}
            className="bg-neutral-800 bg-opacity-50 p-6 mb-0 md:mb-10 justify-items-center text-center text-yellow-500 text-xl xl:text-[1.6rem] rounded-2xl"
            initial={{ x: "-100%", opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            whileInView={{
              x: "0%",
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: index == 0 ? index : index / 1.5,
              },
            }}
          >
            <Image
              className="mb-10 invert"
              alt={card.title}
              src={card.icon}
              width={80}
              height={80}
            />
            {card.title}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
