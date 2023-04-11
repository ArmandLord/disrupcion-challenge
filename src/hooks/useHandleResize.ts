import { useEffect, useState } from "react";

export const useHandleResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return {
    isMobile,
  };
};
