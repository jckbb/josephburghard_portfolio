interface Props {
  light: boolean;
  onToggle: () => void;
}

const LightModeToggleButton = ({ light, onToggle }: Props) => {
  return (
    <button className="dark:text-white" onClick={onToggle}>
      <span>{light ? "light" : "dark"}</span>
    </button>
  );
};

export default LightModeToggleButton;
