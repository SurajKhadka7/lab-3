import ColorBox from "./ColorBox";
import colors from "../data/data";

export default function ColorBoxesContainer() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      
      {Array.from({ length: 25 }).map((_, index) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return <ColorBox key={index} initialColor={randomColor} />;
      })}
    </div>
  );
}
