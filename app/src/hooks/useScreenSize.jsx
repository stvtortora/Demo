import { useMediaQuery } from "react-responsive";

export const SCREEN_SIZES = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
  XLARGE: "XLARGE",
};

export const useScreenSize = () => {
  const isXL = useMediaQuery({ minWidth: 1100 });
  const isL = useMediaQuery({ minWidth: 985 });
  const isM = useMediaQuery({ minWidth: 768 });

  if (isXL) {
    return SCREEN_SIZES.XLARGE;
  }
  if (isL) {
    return SCREEN_SIZES.LARGE;
  }
  if (isM) {
    return SCREEN_SIZES.MEDIUM;
  }
  return SCREEN_SIZES.SMALL;
};
