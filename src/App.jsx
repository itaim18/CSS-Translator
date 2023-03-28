import { useState, useEffect } from "react";
import "./App.css";
import Select from "react-select";
import {
  trFromInlineToModule,
  trFromModuleToInline,
} from "./utils/translations";
function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [optionFrom, setOptionFrom] = useState("");
  const [optionTo, setOptionTo] = useState("");

  const options = [
    { value: "in", label: "Inline Style" },
    { value: "mo", label: "Module Style" },
    { value: "ta", label: "Tailwind" },
  ];
  useEffect(() => {
    const translateText = (input) => {
      let translatedText = "";
      if (optionFrom.value === optionTo.value) {
        translatedText = text;
      } else if (optionFrom.value === "in" && optionTo.value === "mo") {
        translatedText = trFromInlineToModule(input);
      } else if (optionFrom.value === "mo" && optionTo.value === "in") {
        translatedText = trFromModuleToInline(input);
      }
      return translatedText;
    };
    setOutput(translateText(text));
  }, [text, optionFrom, optionTo]);
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
