import html2canvas from "html2canvas";
import { useState } from "react";
import ReactDOM from "react-dom/client";

const useScreenshot = () => {
  const [images, setImages] = useState({});

  const createScreenshot = async (Component, key) => {
    return new Promise((resolve) => {
      const container = document.createElement("div");
      container.style.position = "absolute";
      container.style.left = "-9999px";
      document.body.appendChild(container);
      const root = ReactDOM.createRoot(container);
      root.render(<Component />);
      requestIdleCallback(async () => {
        try {
          const canvas = await html2canvas(container);
          const imgData = canvas.toDataURL("image/png");
          setImages((prev) => ({ ...prev, [key]: imgData }));
          resolve(imgData);
        } catch (error) {
          console.error("Screenshot failed:", error);
          resolve(null);
        } finally {
          document.body.removeChild(container);
          root.unmount();
        }
      });
    });
  };
  return { images, createScreenshot };
};

export default useScreenshot;
