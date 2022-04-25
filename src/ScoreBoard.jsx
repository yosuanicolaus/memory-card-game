import React, { useState, useEffect } from "react";

export function ScoreBoard({ score }) {
  const [best, setBest] = useState(0);

  useEffect(() => {
    setBest(Math.max(best, score));
  }, [best, score]);

  return (
    <div className="fixed-bottom bg-dark bg-gradient text-light">
      <div>
        Score: {score}, Best: {best}
      </div>
    </div>
  );
}
