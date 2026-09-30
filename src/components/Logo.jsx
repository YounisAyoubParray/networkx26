export default function Logo({ onClick, size = "nav" }) {
  const wordmark = size === "lg" ? "text-3xl sm:text-4xl" : "text-xl";
  return (
    <a
      href="#top"
      onClick={onClick}
      className="flex flex-col leading-none sm:flex-row sm:items-baseline sm:gap-2.5"
    >
      <span className={`font-extrabold tracking-tight ${wordmark}`}>
        <span className="text-logoblue">Network</span>
        <span className="text-logored">X</span>
      </span>
      <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:mt-0 sm:text-xs">
        NIT Srinagar
      </span>
    </a>
  );
}