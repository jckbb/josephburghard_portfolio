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

export const meta: MetaFunction = () => {
  return [
    { title: "Joseph Burghard Portfolio" },
    { name: "description", content: "Welcome to My Portfolio!" },
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
      <Section styling="relative flex flex-col">
        <Content styling="flex flex-1 w-full">
          <div className="flex flex-col justify-around">
            <div className="gap-[0.5rem] flex flex-col">
              <h1 className="font-bold text-[2.2rem]">{`Hi! I'm Joseph`}</h1>
              <div className="gap-[1.5rem] flex flex-col border rounded-3xl border-black pl-[2rem] pr-[8rem] py-[1rem] self-start">
                <span className="text-[2rem] leading-none">
                  Frontend mobile developer
                  <br />
                  with 10 years of experience
                </span>
                <span className="text-[1.2rem] font-light">
                  Specializing in cross-platform
                </span>
              </div>
            </div>
            <ProfessionalLinksBar />
          </div>
        </Content>
        <div
          className={`
            relative h-[25rem]
            bg-gradient-to-b from-[#2C2B2B] to-[#252525]
          `}
        >
          <Content styling={"flex items-center h-full"}>
            <div
              className={`text-white text-[5rem] leading-none font-bold z-50`}
            >
              <span className="text-white capitalize">
                crafting
                <br />
                seamless
                <br />
                mobile
                <br />
                experiences.
              </span>
            </div>
            <div className="absolute right-0 bottom-0 transform -translate-x-2/3">
              <img alt="me" src={MeImg} width={440} />
            </div>
            <img
              alt="asset04"
              id="object"
              data-value="-2"
              className="absolute left-[35rem] top-[0rem] transform"
              src={Asset04}
              width={280}
            />
          </Content>
        </div>
        <img
          className="absolute top-1/4 -left-[8rem] transform"
          src={Asset03}
          height={300}
          width={300}
          id="object"
          data-value="1"
          alt="loop"
        />
        <img
          className="absolute -top-[8.5rem] right-[10rem] transform"
          src={Asset02}
          height={300}
          width={300}
          id="object"
          data-value="1"
          alt="spikey"
        />
        <img
          className="absolute bottom-[25rem] -right-[0rem] transform"
          src={Asset01}
          height={300}
          width={300}
          id="object"
          data-value="-2"
          alt="cube"
        />
      </Section>
      <Section styling="relative flex flex-col justify-center">
        <Content styling="flex flex-col justify-center h-[30rem]">
          <div className="grid grid-cols-3 gap-[1rem]">
            <div className="flex flex-col col-span-1">
              <h3 className="font-bold text-[2.2rem] text-black text-opacity-70">
                Experience
              </h3>
              <div className="gap-[1.5rem] flex flex-auto flex-col border rounded-3xl border-black p-[1rem] py-[1rem] self-start">
                <div className="flex-1 flex justify-center items-center">
                  <img src={StarIcon} height={200} width={200} alt="star" />
                </div>
                <p className="flex-1 text-[1.4rem]">
                  Specializing in React Native with Expo and TypeScript, and I'm
                  proficient in Kotlin, Swift, web development, and backend
                  development with Go.
                </p>
              </div>
            </div>
            <div className="flex flex-col col-span-1">
              <h3 className="font-bold text-[2.2rem] text-black text-opacity-70">
                Passion
              </h3>
              <div className="gap-[1.5rem] flex flex-auto flex-col border rounded-3xl border-black p-[1rem] py-[1rem] self-start">
                <div className="flex-1 flex justify-center items-center">
                  <img src={SpikesIcon} height={200} width={200} alt="spikey" />
                </div>
                <p className="flex-1 text-[1.4rem]">
                  Passionate about cross-platform development, reveling in the
                  building process and thriving on the opportunity to share
                  knowledge and learn from others.
                </p>
              </div>
            </div>
            <div className="flex flex-col col-span-1">
              <h3 className="font-bold text-[2.2rem] text-black text-opacity-70">
                Soft skills
              </h3>
              <div className="gap-[1.5rem] flex flex-auto flex-col border rounded-3xl border-black px-[1rem] py-[1rem] self-start">
                <div className="flex flex-1 justify-center items-center">
                  <div className="h-[10rem] w-[10rem] rounded-full bg-[#231F20]" />
                </div>
                <p className="flex-1 text-[1.4rem]">
                  Expert in collaborative problem-solving and teamwork,
                  fostering a cooperative and innovative development
                  environment.
                </p>
              </div>
            </div>
          </div>
        </Content>
        <img
          className="absolute -bottom-[6rem] -right-[6rem] transform"
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
        <Content styling="w-full">
          <div className="grid grid-cols-2 divide-x divide-[#ffffffCC]">
            <div className="flex flex-1 flex-col justify-center items-start">
              <div className="flex gap-[4rem]">
                <span className="font-bold text-white text-[2rem] text-opacity-80">
                  Checkout some of my
                  <br />
                  recent Projects
                </span>
                <img
                  className="opacity-80"
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
