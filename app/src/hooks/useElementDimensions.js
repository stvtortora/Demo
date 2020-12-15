import { useEffect, useState } from "react";

export const useElementDimensions = (elementId) => {
  const [elementDimensions, setElementDimensions] = useState(null);

  useEffect(() => {
    const el = document.getElementById(elementId);
    if (el) {
      setElementDimensions({ height: el.clientHeight, width: el.clientWidth });
    }
  }, []);

  return elementDimensions;
};
