import { useState } from "react";
import colors from "../data/data";


export default function ColorBox({ initialColor }) {
  const [color, setColor] = useState(initialColor);

  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div
      onClick={handleColorChange}
      style={{
        backgroundColor: color,
        width: "60px",
        height: "60px",
      }}
    ></div>
  );
}
