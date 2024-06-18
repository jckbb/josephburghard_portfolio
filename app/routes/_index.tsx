import type { MetaFunction } from "@remix-run/node";
import WebsiteIcon from "../assets/websiteicon.svg";
import iOSIcon from "../assets/iosicon.svg";
import HeroImage from "../assets/img0001.webp";
import GithubIcon from "../assets/github-mark.svg";
import MailIcon from "../assets/mail.svg";
import LinkedinIcon from "../assets/linkedin.svg";

export const meta: MetaFunction = () => {
  return [
    { title: "Joseph Burghard Portfolio" },
    { name: "description", content: "Welcome to My Portfolio!" },
  ];
};

const infomationList = [
  {
    label: "contact",
    link: "josephburghard@gmail.com",
    type: "mail",
  },
  {
    label: "linkedin",
    link: "https://www.linkedin.com/in/joecburghard/",
    type: "url",
  },
  {
    label: "github",
    link: "https://github.com/jckbb",
    type: "url",
  },
];

const projectList = [
  {
    name: "Watchfitness",
    subtitle: "iOS app",
    platform: "ios_app",
    url: "https://apps.apple.com/us/app/watchfitness/id6451427168",
  },
  {
    name: "Inforapenny",
    subtitle: "Website",
    platform: "website",
    url: "https://inforapenny.news/",
  },
];

export default function Index() {
  // === HERO ===
  const IntroSection = (
    <div className="bg-[#F3F3F3] col-span-1 md:col-span-4 row-span-2 md:items-center md:flex md:flex-col md:overflow-hidden">
      <div className="flex flex-col col-span-4 row-span-2 lg:w-[50rem] px-[1rem] pb-[1rem]">
        <div className="flex flex-col gap-[1rem]">
          <div className="flex justify-center pt-[2rem]">
            <img
              className="rounded-full w-[30rem]"
              alt="heroimage"
              src={HeroImage}
            />
          </div>
          <div className="relative items-center flex flex-1 flex-col gap-[2rem]">
            <span className="lg:absolute lg:right-[4.6rem] lg:top-[1.2rem] text-white text-[1.3rem] font-sans bg-[#0984E3] py-[1rem] px-[2rem] flex items-center justify-center rounded-full">
              Mobile/Frontend Developer
            </span>
            <h1 className="text-center md:text-start text-[3rem] md:text-[3.5rem] lg:text-[5rem] leading-tight font-sans font-bold">
              Hi! I Am
              <br />
              Joseph Burghard
            </h1>
            <span className=" text-center font-sans text-[1.2rem] leading-tight">
              Cross Platform Development Specialist with a focus on leveraging
              new technologies and implementations
            </span>
          </div>
        </div>
      </div>
    </div>
  );
  // === PROJECTS ===
  const ProjectsSection = (
    <div className="col-span-1 md:col-span-3 row-span-3 md:overflow-y-scroll">
      <div className="p-[3rem] w-full flex flex-col flex-1 gap-[2rem]">
        <h2 className="text-[2rem] font-sans font-bold">{"Projects"}</h2>
        {projectList.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="bg-[#222222] gap-[1rem] items-center px-[2rem] lg:px-[3rem] rounded-full flex h-[8rem] lg:h-[13rem] hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:shadow-lg"
          >
            <div>
              <div className="h-[4rem] w-[4rem] lg:h-[8rem] lg:w-[8rem] flex justify-center items-center rounded-full bg-white">
                <img
                  alt="thumbnail"
                  src={project.platform === "ios_app" ? iOSIcon : WebsiteIcon}
                  className="h-[3rem] w-[3rem] lg:h-[5rem] lg:w-[5rem]"
                />
              </div>
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-white text-[1.5rem] lg:text-[2rem] truncate">
                {project.name}
              </span>
              <span className="text-white text-[0.8rem] lg:text-[1rem] truncate">
                {project.subtitle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
  // === CONTACT ===
  const ContactSection = (
    <div className="py-[3rem] bg-[#222222] md:col-span-4 md:row-span-1 px-[5rem] justify-center flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infomationList.map((info, index) => {
          const Icon =
            info.label === "github"
              ? GithubIcon
              : info.label === "contact"
              ? MailIcon
              : LinkedinIcon;
          return (
            <div key={index}>
              <a
                href={info.type === "mail" ? `mailto:${info.link}` : info.link}
                rel="noreferrer"
                target="_blank"
                className="flex flex-col overflow-hidden gap-[0.2rem]"
              >
                <div className="flex gap-4 md:gap-2 items-center">
                  <img
                    src={Icon}
                    alt={info.label}
                    className="h-[3rem] md:h-[1.5rem] w-[3rem] md:w-[1.5rem]"
                  />
                  <span className="font-sans font-bold text-white text-[2.5rem] md:text-[1.3rem] capitalize">
                    {info.label}
                  </span>
                </div>
                <span className="invisible md:visible hover:underline decoration-white font-sans text-white text-[1.3rem] text-opacity-80 truncate">
                  {info.link}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main className="h-screen w-screen grid grid-cols-1 grid-flow-row md:grid-cols-7 md:grid-rows-3">
      {IntroSection}
      {ProjectsSection}
      {ContactSection}
    </main>
  );
}
