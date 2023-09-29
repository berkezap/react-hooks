import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [myList, setMyList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    const myArray = [];
    for (let i = 0; i < 2000; i++) {
      myArray.push(e.target.value);
    }
    setMyList(myArray);
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      {myList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </>
  );
}

export default App;
