import MailIcon from "../../assets/mail_icon.svg";
import ResumeIcon from "../../assets/resume_icon.svg";
import LinkedInIcon from "../../assets/linkedin_icon.svg";
import GithubIcon from "../../assets/github_icon.svg";
import { useEffect, useRef } from "react";

const ProfessionalLinksBar = () => {
  const craterRef = useRef();
  useEffect(() => {}, [craterRef]);

  return (
    <div className="flex border rounded-full border-black h-[3rem] items-center justify-evenly">
      <a
        className="relative group"
        href="app/Joseph_C_Burghard_Resume.pdf"
        download
      >
        <span className="invisible group-hover:visible absolute -top-[2rem] left-1/2 transform -translate-x-1/2">
          Resume
        </span>
        <img
          className="hover:opacity-100 opacity-90"
          src={ResumeIcon}
          onFocus={() => {}}
          onMouseOver={(e) => {}}
          id="resume"
          height={25}
          width={25}
          alt="resume"
        />
      </a>
      <a
        className="relative group"
        href={"https://www.linkedin.com/in/joecburghard/"}
        target="_blank"
        rel="noreferrer"
      >
        <span className="invisible group-hover:visible absolute -top-[2rem] left-1/2 transform -translate-x-1/2">
          Linkedin
        </span>
        <img
          className="hover:opacity-100 opacity-90"
          src={LinkedInIcon}
          onFocus={() => {}}
          // onMouseOver={(e) => {
          //   craterRef?.current?.classList.toggle("move");
          //   console.log(e.currentTarget.id, e.clientX, e.clientY);
          // }}
          id="linkedin"
          height={35}
          width={35}
          alt="linkedin"
        />
      </a>
      <a
        className="relative group"
        href={"https://github.com/jckbb"}
        target="_blank"
        rel="noreferrer"
      >
        <span className="invisible group-hover:visible absolute -top-[2rem] left-1/2 transform -translate-x-1/2">
          Github
        </span>
        <img
          className="peer hover:opacity-100 opacity-90"
          src={GithubIcon}
          onFocus={() => {}}
          onMouseOver={(e) => {
            console.log(e.currentTarget.id, e.clientX, e.clientY);
          }}
          id="github"
          height={35}
          width={35}
          alt="github"
        />
      </a>
      <a
        className="relative group"
        href="mailto:josephburghard@gmali.com"
        target="_blank"
        rel="noreferrer"
      >
        <span className="invisible group-hover:visible absolute -top-[2rem] left-1/2 transform -translate-x-1/2">
          Contact
        </span>
        <img
          className="peer/mail hover:opacity-100 opacity-90"
          height={35}
          onFocus={() => {}}
          id="mail"
          width={35}
          src={MailIcon}
          alt="mail"
        />
      </a>
    </div>
  );

  // return (
  //   <div className="relative self-start">
  //     <BarOutline className="w-[33rem]" />
  //     <div
  //       ref={(ref) => {
  //         craterRef.current = ref;
  //       }}
  //       id="crater"
  //       className={`bg-red-100 absolute bottom-0 left-0`}
  //     >
  //       <Crater />
  //     </div>
  //     <div className="top-1/2 left-0 right-0 absolute flex justify-evenly flex-1 transform -translate-y-1/2">
  //       <a
  //         className="peer"
  //         href={"https://www.linkedin.com/in/joecburghard/"}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <img
  //           className="hover:opacity-100 opacity-90"
  //           src={ResumeIcon}
  //           onFocus={() => {}}
  //           onMouseOver={(e) => {
  //             console.log(e.currentTarget.id, e.clientX, e.clientY);
  //           }}
  //           id="resume"
  //           height={25}
  //           width={25}
  //           alt="resume"
  //         />
  //       </a>
  //       <a
  //         href={"https://www.linkedin.com/in/joecburghard/"}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <img
  //           className="hover:opacity-100 opacity-90"
  //           src={LinkedInIcon}
  //           onFocus={() => {}}
  //           onMouseOver={(e) => {
  //             craterRef?.current?.classList.toggle("move");
  //             console.log(e.currentTarget.id, e.clientX, e.clientY);
  //           }}
  //           id="linkedin"
  //           height={35}
  //           width={35}
  //           alt="linkedin"
  //         />
  //       </a>
  //       <a
  //         href={"https://www.linkedin.com/in/joecburghard/"}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <img
  //           className="peer hover:opacity-100 opacity-90"
  //           src={GithubIcon}
  //           onFocus={() => {}}
  //           onMouseOver={(e) => {
  //             console.log(e.currentTarget.id, e.clientX, e.clientY);
  //           }}
  //           id="github"
  //           height={35}
  //           width={35}
  //           alt="github"
  //         />
  //       </a>
  //       <a
  //         href={"https://www.linkedin.com/in/joecburghard/"}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <img
  //           className="peer/mail hover:opacity-100 opacity-90"
  //           height={35}
  //           onFocus={() => {}}
  //           onMouseOver={(e) => {
  //             console.log(e.currentTarget.id, e.clientX, e.clientY);
  //             // const craterEle = document.getElementById('crater');
  //             // craterEle?.attributes.
  //           }}
  //           id="mail"
  //           width={35}
  //           src={MailIcon}
  //           alt="mail"
  //         />
  //       </a>
  //     </div>
  //   </div>
  // );
};

export default ProfessionalLinksBar;
