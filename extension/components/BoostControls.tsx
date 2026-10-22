// components/BoostControls.tsx

import { MAX, MIN, useBoost } from "@/hooks/useBoost";

export default function BoostControls() {
  const { enabled, level, toggle, changeLevel } = useBoost();

  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-on-surface">Audio boost</span>
        <div className="flex items-center gap-3">
          <span
            className={`text-sm font-bold ${
              enabled ? "text-tertiary" : "text-on-surface-variant"
            }`}
          >
            {enabled ? "ON" : "OFF"}
          </span>
          <button
            role="switch"
            aria-checked={enabled}
            onClick={toggle}
            className={`relative h-7 w-12 rounded-full cursor-pointer ${
              enabled ? "bg-primary-container" : "bg-surface-container-highest"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 size-6 rounded-full bg-white ${
                enabled ? "translate-x-5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-on-surface">Volume level</span>
          <span className="rounded-full bg-surface-container px-3 py-0.5 text-sm font-bold text-primary">
            {level}%
          </span>
        </div>
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={10}
          value={level}
          disabled={!enabled}
          onChange={(e) => changeLevel(Number(e.target.value))}
          className="w-full cursor-pointer accent-primary-container"
        />
        <div className="flex justify-between text-sm text-on-surface-variant">
          <span>{MIN}%</span>
          <span>{MAX}%</span>
        </div>
      </div>
    </>
  );
}
