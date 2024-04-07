import { useEffect, useState } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: position.x + 10 + "px", top: position.y + 15 + "px" }}
    ></div>
  );
};

export default Cursor;
