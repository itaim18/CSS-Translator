import { useState, useEffect } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [optionFrom, setOptionFrom] = useState("");
  const [optionTo, setOptionTo] = useState("");

  const options = [
    { value: "inline", label: "Inline Style" },
    { value: "module", label: "Module Style" },
    { value: "tailwind", label: "Tailwind" },
  ];
  useEffect(() => {
    const translateText = (input) => {
      return input
        .replaceAll(`,`, `;`)
        .replaceAll(`'`, ` `)
        .replaceAll(`"`, ` `)
        .replaceAll(" ", "")
        .replace(/^(.*?){{/, "")
        .replace("}}", "")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase();
    };
    setOutput(translateText(text));
  }, [text]);
  console.log(optionFrom, optionTo);
  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>I "Know" CSS</h1>
      <div style={{ display: "flex" }}>
        <div>
          <Select
            options={options}
            onChange={setOptionFrom}
            styles={{
              option: (base) => ({
                ...base,
                color: "#333",
                height: "100%",
              }),
            }}
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="30"
            rows="10"
            style={{ resize: "none", borderRadius: "8px" }}
          ></textarea>
        </div>
        <div>
          <Select
            options={options}
            onChange={setOptionTo}
            styles={{
              option: (base) => ({
                ...base,
                color: "#333",
                height: "100%",
              }),
            }}
          />
          <textarea
            style={{
              color: "rgb(200,200,200)",
              resize: "none",
              borderRadius: "8px",
            }}
            value={output}
            cols="30"
            rows="10"
            onChange={() => setOutput((prevState) => prevState)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
