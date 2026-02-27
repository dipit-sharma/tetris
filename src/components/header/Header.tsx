export const Header = ({ start }: { start: () => void }) => {
  return (
    <div className="header">
      <button className="start-button" onClick={start}>
        Start
      </button>
    </div>
  );
};
