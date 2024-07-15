import type { MetaFunction } from "@remix-run/node";
import Asset01 from "~/assets/asset01.svg";
import Asset02 from "../assets/asset02.svg";
import Asset03 from "../assets/asset03.svg";
import Asset04 from "../assets/asset04.svg";
import StarIcon from "../assets/star.svg";
import SpikesIcon from "../assets/spikes.svg";
import InforapennyLogo from "../assets/inforapenny.svg";
import RightArrowIcon from "../assets/rightarrow.svg";
import WatchfitnessLogo from "../assets/watchfitness.svg";
import MeImg from "../assets/me.png";
import Footer from "~/components/Footer";
import Section from "~/components/Section";
import ProfessionalLinksBar from "~/components/ProfessionalLinksBar";
import Content from "~/components/Content";
import { useAnimateObjects } from "~/utils/useAnimateObjects";
import StatementCard from "~/components/StatementCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Joseph C Burghard Portfolio" },
    { name: "Portfolio", content: "Welcome to My Portfolio!" },
  ];
};

export default function Index() {
  useAnimateObjects();

  return (
    <main
      className={`
      bg-gradient-to-b from-[#1DF8B6] from-0% via-[#17C591] via-59% to-[#11926C] to-82%
      min-h-screen w-screen
      overflow-hidden
    `}
    >
      <Section styling="relative flex flex-col gap-[2.5rem]">
        <Content styling="z-10 px-[1rem] flex flex-1 w-full">
          <div className="flex flex-col justify-around gap-[2.5rem]">
            <div className="gap-[0.5rem] flex flex-col">
              <h1 className="font-bold text-[2.2rem]">Joseph C Burghard</h1>
              <div className="gap-[1.5rem] flex flex-col border rounded-3xl border-black pl-[2rem] md:pr-[8rem] py-[1rem] self-start">
                <span className="text-[2rem] leading-none">
                  Frontend mobile developer
                  <br />
                  with 10 years of experience
                </span>
                <span className="rounded-xl px-[1rem] bg-[#D9D9D9] text-[1.2rem] text-black text-opacity-90 self-start">
                  Specializing in cross-platform
                </span>
              </div>
            </div>
            <ProfessionalLinksBar />
          </div>
        </Content>
        <div
          className={`
            z-10
            relative h-[25rem]
            bg-gradient-to-b from-[#2C2B2B] to-[#252525]
          `}
        >
          <Content styling={"px-[1rem] flex items-center h-full"}>
            <div
              className={`text-white text-[4rem] md:text-[5rem] leading-none font-bold z-50`}
            >
              <span className="text-white capitalize drop-shadow-md">
                crafting
                <br />
                seamless
                <br />
                mobile
                <br />
                experiences.
              </span>
            </div>
            <div className="z-10 absolute right-0 bottom-0 transform md:-translate-x-2/3">
              <img alt="me" src={MeImg} width={440} />
            </div>
            <img
              alt="asset04"
              id="object"
              data-value="-2"
              className="invisible md:visible absolute left-[35rem] top-[0rem] transform"
              src={Asset04}
              width={280}
            />
          </Content>
        </div>
        <img
          className="z-0 invisible md:visible absolute top-1/4 -left-[8rem] transform"
          src={Asset03}
          height={300}
          width={300}
          id="object"
          data-value="1"
          alt="loop"
        />
        <img
          className="z-0 absolute md:-top-[8.5rem] -top-[10rem] -right-[8rem] md:right-[10rem] transform"
          src={Asset02}
          height={300}
          width={300}
          id="object"
          data-value="1"
          alt="spikey"
        />
        <img
          className="z-0 invisible md:visible absolute bottom-[25rem] -right-[0rem] transform"
          src={Asset01}
          height={300}
          width={300}
          id="object"
          data-value="-2"
          alt="cube"
        />
      </Section>
      <Section styling="relative flex flex-col py-[5rem] md:justify-center">
        <Content styling="px-[1rem] flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem] md:h-[35rem]">
            <StatementCard
              styling="col-span-1"
              symbol={
                <img src={StarIcon} height={200} width={200} alt="star" />
              }
              content={{
                title: "Experience",
                description: `Specializing in React Native with Expo and TypeScript, and I'm
                  proficient in Kotlin, Swift, web development, and backend
                  development with Go.`,
              }}
            />
            <StatementCard
              styling="col-span-1"
              symbol={
                <img src={SpikesIcon} height={200} width={200} alt="spikey" />
              }
              content={{
                title: "Passion",
                description: ` Passionate about cross-platform development, reveling in the
                  building process and thriving on the opportunity to share
                  knowledge and learn from others.`,
              }}
            />
            <StatementCard
              styling="col-span-1"
              symbol={
                <div className="h-[10rem] w-[10rem] rounded-full bg-[#231F20]" />
              }
              content={{
                title: "Soft skills",
                description: `Expert in collaborative problem-solving and teamwork, fostering a
              cooperative and innovative development environment.`,
              }}
            />
          </div>
        </Content>
        <img
          className="invisible md:visible absolute -bottom-[6rem] -right-[6rem] transform"
          src={Asset03}
          height={300}
          width={300}
          id="object"
          data-value="-1"
          alt="loop"
        />
      </Section>
      <Section
        styling={`
          bg-gradient-to-b from-[#2C2B2B] to-[#252525]
          flex flex-col justify-center
        `}
      >
        <Content styling="w-full px-[1rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-[#ffffffCC] gap-[4rem]">
            <div className="flex flex-1 flex-col items-center justify-center md:items-start">
              <div className="flex gap-[1rem] md:gap-[4rem]">
                <span className="font-bold text-white text-[1.5rem] md:text-[2rem] text-opacity-80">
                  Checkout some of my
                  <br />
                  recent Projects
                </span>
                <img
                  className="rotate-90 md:rotate-0 opacity-80 w-[2rem] md:w-[3rem]"
                  src={RightArrowIcon}
                  alt="rightarrow"
                />
              </div>
            </div>
            <ul className="flex flex-col justify-center items-center gap-[8rem]">
              <li>
                <a
                  href={
                    "https://apps.apple.com/us/app/watchfitness/id6451427168"
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="opacity-60 hover:opacity-100"
                    src={WatchfitnessLogo}
                    height={300}
                    width={300}
                    alt="watchfitness"
                  />
                </a>
              </li>
              <li>
                <a
                  href={"https://inforapenny.news"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="opacity-60 hover:opacity-100"
                    src={InforapennyLogo}
                    height={300}
                    width={300}
                    alt="inforapenny"
                  />
                </a>
              </li>
            </ul>
          </div>
        </Content>
      </Section>
      <Footer />
    </main>
  );
}
