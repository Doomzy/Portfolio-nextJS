import { projects } from "@/lib/constants";
import SectionHeader from "./fragments/SectionHeader";
import ProjectCard from "./fragments/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      id="Projects"
      className="px-10 md:px-24 lg:px-36 xl:px-64 pt-32 pb-20 overflow-hidden"
    >
      <SectionHeader title="Projects" subTitle="What I've been working on" />
      <Slider {...settings}>
        {projects.map((project, i) => (
          <ProjectCard key={i} indexNum={i + 1} projectData={project} />
        ))}
      </Slider>
    </div>
  );
}

export default Projects;
