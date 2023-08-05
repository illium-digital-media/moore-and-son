interface TabButtonProps {
  label: string;
  active: boolean;
  classes?: string;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({
  label,
  classes,
  active,
  onClick,
}) => {
  return (
    <button
      className={`${classes} p-6 uppercase font-bold border-b border-black border-opacity-10 w-1/3 flex-1 ${
        active ? "bg-primary text-white" : "bg-gray-100 text-black"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TabButton;
