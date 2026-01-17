"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";

const SkillSection = () => {
  const SKILLS = [
    {
      category: "Languages",
      value: ": C/C++, Java, Ruby, JavaScript, TypeScript, HTML5, CSS3, SQL",
    },
    {
      category: "Frameworks/ Libraries",
      value:
        "Spring Boot, Spring MVC, Ruby On Rails, Microservices, JPA/Hibernate, React.js, Tailwind CSS",
    },
    {
      category: "Tools and technologies",
      value: " Docker, Redis, Kafka, AWS(S3, Lambda, SQS, DynamoDB), PostgresSQL, Git, Postman, Jira",
    },
    {
      category: "Area of interest",
      value: "Data Structures, Algorithms, System Design",
    },
  ];
  return (
    <BackgroundGradient className="rounded-[22px] w-[100%] p-4 sm:p-10  dark:bg-dark-color-2">
      <div className="mx-auto">
        {SKILLS.map((skill, key) => (
          <div key={key} className="flex gap-1 md:gap-3 mt-5 text-sm md:text-base">
            <div className="text-white text-lg font-bold">{skill.category}:</div>
            <div className="m-0.5">{skill.value}</div>
          </div>
        ))}
      </div>
    </BackgroundGradient>
  );
};

export default SkillSection;
