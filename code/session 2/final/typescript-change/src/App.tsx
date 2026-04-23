import React, { useState, type JSX } from "react";

type DevCampButtonProps = {
  origin: string;
  handleClick: () => void;
  children: React.ReactNode;
};

const DevCampButton = ({ origin, handleClick, children }: DevCampButtonProps): JSX.Element => {
  return (
    <>
      <label htmlFor="newBtn">Button comes from {origin}</label>
      <button id="newBtn" onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <DevCampButton origin="123" handleClick={() => setCount(count + 1)}>
      <span
        // "color: blue; font-size: 15pt"
        style={{
          color: "blue",
          fontSize: "15pt",
          paddingRight: "4px"
        }}
      >
        Hello there
      </span>
      Count is {count}
    </DevCampButton>
  );
};

export default App;
