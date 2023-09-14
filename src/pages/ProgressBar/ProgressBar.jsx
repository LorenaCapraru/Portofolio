import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
          backgroundImage:
            "linear-gradient(92deg, rgb(48, 207, 208) 10%, rgb(113, 46, 195) 50%, rgba(219, 66, 198, 0) 95%)",
          width: `${scrollProgress}%`,
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
