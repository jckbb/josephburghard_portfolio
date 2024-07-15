import Asset01 from "~/assets/asset01.svg";
import Asset04 from "~/assets/asset04.svg";

const Footer = () => {
  return (
    <div className="relative h-[20rem]">
      <img
        alt="asset04"
        className="invisible md:visible absolute -left-[5rem] -top-[10rem]"
        id="object"
        data-value="2"
        src={Asset04}
        width={280}
      />
      <img
        alt="asset01"
        className="absolute -right-[3rem] -bottom-[5rem]"
        src={Asset01}
        id="object"
        data-value="-1"
        width={280}
      />
    </div>
  );
};

export default Footer;
