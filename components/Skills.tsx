import { motion, useAnimation } from "framer-motion";
import SectionHeader from "./fragments/SectionHeader";
import { skillSet1, skillSet2 } from "@/lib/constants";
import { useEffect } from "react";

function Skills() {
  return (
    <div
      id="Skills"
      className="px-10 md:px-24 lg:px-36 xl:px-64 pt-28 pb-20 overflow-hidden"
    >
      <SectionHeader title="Technologies" subTitle="My Skills" />
      <SkillListSlider skillList={skillSet1} />

      {/*  */}

      <SkillListSlider skillList={skillSet2} reverse={true} />
    </div>
  );
}

export default Skills;

function SkillListSlider({
  skillList,
  reverse = false,
}: {
  skillList: string[];
  reverse?: boolean;
}) {
  const duplicateSkills = [...skillList, ...skillList];
  const scrollAnim = useAnimation();

  useEffect(() => {
    scrollAnim.start({
      x: reverse ? ["-99%", "0%"] : ["0%", "-99%"],
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
      },
    });
  }, [scrollAnim, reverse]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div className="flex" animate={scrollAnim}>
        {duplicateSkills.map((skill, i) => (
          <div
            key={i + skill}
            className="px-2 md:px-5 lg:px-10 py-6 mx-2 mb-1 border-4 min-w-[40%] md:min-w-[25%] xl:min-w-[16%] border-white bg-neutral-800 border-b-0 rounded-t-md text-xl text-yellow-500 font-bold text-center"
          >
            {skill}
          </div>
        ))}
      </motion.div>
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 w-full h-14 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
}
