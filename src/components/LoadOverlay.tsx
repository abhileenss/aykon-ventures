import { useEffect, useState } from "react";
import { Seal } from "./Seal";

export function LoadOverlay() {
  const [stage, setStage] = useState<"show" | "lift" | "gone">("show");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("lift"), 1500);
    const t2 = setTimeout(() => setStage("gone"), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (stage === "gone") return null;

  return (
    <div
      className={`load-overlay ${stage === "lift" ? "is-lifting" : ""}`}
      aria-hidden="true"
    >
      <div className="load-inner">
        <Seal size={72} className="text-limestone load-seal" />
        {/* padding-left compensates for CSS letter-spacing trailing space on the last glyph */}
        <p className="load-word wordmark text-limestone text-sm mt-10" style={{ paddingLeft: "0.32em" }}>
          AYKON&nbsp;VENTURES
        </p>
        <p className="load-word load-word-late eyebrow text-limestone/45 mt-4" style={{ paddingLeft: "0.22em" }}>
          EST.&nbsp;MMXXVI&nbsp;·&nbsp;DUBAI
        </p>
      </div>
    </div>
  );
}
