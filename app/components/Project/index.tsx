interface Props {
  title: string;
  link: string;
  details: string;
  subtitle: string;
  id: "inforapenny" | "watchfitness";
}

const Project = ({ id, link, title, subtitle, details }: Props) => {
  const titleColor =
    id === "inforapenny"
      ? "from-[#ffe78a] to-[#ffd73c]"
      : "from-[#d32f2f] to-[#23234c]";

  return (
    <div className="h-1/2 w-3/4 grid grid-cols-2">
      <div className="mb-4">
        <a href={link} rel="noreferrer" target="_blank">
          <div
            className={`decoration-white bg-gradient-to-r ${titleColor} text-transparent bg-clip-text`}
          >
            <h2 className="font-codec font-bold text-[5rem]">{title}</h2>
          </div>
          <span className="text-[2rem] font-codec text-opacity-85 text-white">
            {subtitle}
          </span>
          <p className="text-white font-codec text-opacity-95">{details}</p>
        </a>
      </div>
    </div>
  );
};

export default Project;
