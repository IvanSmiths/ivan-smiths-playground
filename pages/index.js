import React, { useState } from "react";
import ClipboardJS from "clipboard";

if (typeof window !== "undefined") {
  new ClipboardJS(".button");
}

export default function Home() {
  const [opacity, setOpacity] = useState(0.5);
  const [blur, setBlur] = useState(0.5);

  function handleClick(e) {
    e.preventDefault();
    alert("Copied!");
  }

  return (
    <div>
      <label htmlFor="opacity">Opacity</label>
      <input
        id="opacity"
        name="opacity"
        min="0"
        max="1"
        step="0.01"
        value={opacity}
        onChange={(e) => setOpacity(e.target.value)}
        type="range"
      />
      <span>{opacity}</span>
      <label htmlFor="blur">blur</label>
      <input
        id="blur"
        name="blur"
        min="0"
        max="100"
        step="0.01"
        value={blur}
        onChange={(e) => setBlur(e.target.value)}
        type="range"
      />
      <span>{blur}</span>
      <div
        style={{
          backgroundColor: "black",
          height: "20px",
          width: "20px",
          opacity: `${opacity}`,
          backdropFilter: `blur(${blur}px)`,
        }}
      ></div>
      <h1 id="css">
        css: opacity: {opacity}; <br />
        backdrop-filter: blur({blur})px;
      </h1>
      <button
        onClick={handleClick}
        className="button"
        data-clipboard-action="copy"
        data-clipboard-target="#css"
      >
        Copy To Clipboard
      </button>
    </div>
  );
}
