interface HamburguerProps {
  menuState: boolean;
  setMenuStateFn: () => void;
}

export default function HamburguerMenu({
  menuState,
  setMenuStateFn,
}: HamburguerProps) {
  return (
    <>
      <button
        className={`${menuState ? "open" : "closed"} menu-toggle`}
        role="button"
        onClick={setMenuStateFn}
      >
        <div className="hamburger"></div>
      </button>
    </>
  );
}
