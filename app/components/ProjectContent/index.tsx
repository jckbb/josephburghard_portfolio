interface Props {
  children: React.ReactNode;
}

const ProjectContent = ({ children }: Props) => {
  return (
    <div className="w-3/4">
      <div className="flex flex-1 items-center justify-end">
        <div className="h-[30rem] w-[30rem] rounded bg-white">{children}</div>
      </div>
    </div>
  );
};

export default ProjectContent;
