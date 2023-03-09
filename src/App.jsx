import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    const translateText = (input) => {
      return input
        .replaceAll(`,`, `;`)
        .replaceAll(`'`, ` `)
        .replaceAll(`"`, ` `)
        .replace("style={{", "")
        .replace("}}", "")
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .toLowerCase();
    };
    setOutput(translateText(text));
  }, [text]);

  return (
    <div className="App">
      <h1 style={{ color: "purple" }}>CSS translator</h1>
      <div style={{ display: "flex" }}>
        <div>
          <h3 style={{ color: "purple", opacity: "0.8" }}>Inline style</h3>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="30"
            rows="10"
            style={{ resize: "none", borderRadius: "8px" }}
          ></textarea>
        </div>
        <div>
          {" "}
          <h3 style={{ color: "purple", opacity: "0.8" }}>Style rules</h3>
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
