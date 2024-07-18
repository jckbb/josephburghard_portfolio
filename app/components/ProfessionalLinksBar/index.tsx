import MailIcon from "../../assets/mail_icon.svg";
import ResumeIcon from "../../assets/resume_icon.svg";
import LinkedInIcon from "../../assets/linkedin_icon.svg";
import GithubIcon from "../../assets/github_icon.svg";

const ProfessionalLinksBar = () => {
  return (
    <div className="flex border rounded-full border-black h-[3rem] items-center justify-evenly">
      <a
        className="relative group"
        href="public/Joseph_Burghard_Resume.pdf"
        download="Joseph_Burghard_Resume.pdf"
      >
        <span className="invisible group-hover:visible absolute -top-[2rem] left-1/2 transform -translate-x-1/2">
          Resume
        </span>
        <img
          className="hover:opacity-100 opacity-90"
          src={ResumeIcon}
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
          id="mail"
          width={35}
          src={MailIcon}
          alt="mail"
        />
      </a>
    </div>
  );
};

export default ProfessionalLinksBar;
