interface Props {
  styling?: HTMLElement["className"];
  symbol: JSX.Element;
  content: {
    title: string;
    description: string;
  };
}

const StatementCard = ({ content, symbol, styling }: Props) => {
  return (
    <div
      className={`transform md:hover:-translate-y-10 duration-500 ease-in-out min-h-[30rem] flex flex-col ${styling}`}
    >
      <h3 className="font-bold text-[2.2rem] text-black text-opacity-70">
        {content.title}
      </h3>
      <div className="flex flex-auto flex-col border rounded-3xl border-black px-[1rem] py-[1rem] self-start">
        <div className="flex flex-1 justify-center items-center">{symbol}</div>
        <span className="flex-1 text-[1.4rem]">{content.description}</span>
      </div>
    </div>
  );
};

export default StatementCard;
