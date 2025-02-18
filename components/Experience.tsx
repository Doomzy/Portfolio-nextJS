import SectionHeader from "./fragments/SectionHeader";
import ExperienceCard from "./fragments/ExperienceCard";
import { experienceData, contactsData } from "@/lib/constants";
import { IdCard } from "lucide-react";
import Link from "next/link";

function Experience() {
  return (
    <div
      id="Experience"
      className="px-10 md:px-24 lg:px-36 xl:px-64 pt-32 pb-20 overflow-hidden"
    >
      <SectionHeader
        title="My Experience"
        subTitle="An overview of my journey"
      />
      <div className=" relative text-black">
        <span className=" w-1 h-full bg-yellow-500 absolute top-0 left-9 sm:left-1/2 transform -translate-x-1/2 z-10"></span>
        {experienceData.map((data, index) => (
          <ExperienceCard
            key={index}
            reverse={index % 2 !== 0}
            title={data.title}
            description={data.description}
            date={data.date}
            icon={data.icon}
          />
        ))}
        <ExperienceCard
          reverse={experienceData.length % 2 !== 0}
          title="My Resume"
          description="Download my Resume"
          date=""
          icon={<IdCard size={32} />}
        >
          <div className="p-6 items-center">
            <Link
              href={contactsData.resume}
              className="bg-black text-white p-5 rounded-md text-xl"
            >
              My Resume
            </Link>
          </div>
        </ExperienceCard>
      </div>
    </div>
  );
}

export default Experience;
