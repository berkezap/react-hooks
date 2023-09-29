import { useRef } from "react";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    console.log(inputRef.current);
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>benim adım {name}</div>
      <div>{renderCount.current} defa render oldu</div>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
export default App;
