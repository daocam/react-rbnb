import { DropdownContent } from "../components/DropdownContent";
import Hero from "../components/Hero";
import data from "../datas/about.json";
import { AboutProps } from "../types";

const About = () => {
  const aboutData: AboutProps[] = data;

  return (
    <>
      <Hero>Nos valeurs</Hero>
      <div className="sm:w-[80%] w-full mx-auto py-12 flex flex-col gap-6">
        {aboutData.map((about, index) => (
          <DropdownContent
            key={index}
            title={about.title}
            content={about.text}
          />
        ))}
      </div>
    </>
  );
};

export default About;
