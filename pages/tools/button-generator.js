import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ClipboardJS from "clipboard";

if (typeof window !== "undefined") {
  new ClipboardJS(".button");
}

function ToolButton() {
  const [backgroundColor, setbackgroundColor] = useState("#d7f21d");
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize] = useState(16);
  const [borderActive, setBorderActive] = useState(false);
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderPx, setBorderPx] = useState(2);
  const [cta, setCta] = useState("Button");
  const [paddingH, setPaddingH] = useState(15);
  const [paddingV, setPaddingV] = useState(40);
  const [borderSingle, setBorderSingle] = useState(false);
  const [gradient, setGradient] = useState(false);
  const [gradientDeg, setGradientDeg] = useState(0);
  const [firstGradient, setFirstGradient] = useState("#d7f21d");
  const [boxShadow, setBoxShadow] = useState(false);
  const [boxShadowColor, setBoxShadowColor] = useState("#d7f21d");
  const [boxShadowBlur, setBoxShadowBlur] = useState(40);
  const [boxShadowSpread, setBoxShadowSpread] = useState(0);
  const [secondGradient, setSecondGradient] = useState("#f2ce1c");
  const [firstGradientPercentage, setFirstGradientPercentage] = useState(0);
  const [secondGradientPercentage, setSecondGradientPercentage] = useState(100);
  const [radius, setRadius] = useState(40);
  const [borderUpLeft, setBorderUpLeft] = useState(0);
  const [borderUpRight, setBorderUpRight] = useState(0);
  const [borderDownLeft, setBorderDownLeft] = useState(0);
  const [borderDownRight, setBorderDownRight] = useState(0);
  const [bold, setBold] = useState(false);
  const [borderStyle, setBorderStyle] = useState("solid");

  const css = `  
  background: ${
    gradient === true
      ? `linear-gradient(${gradientDeg}deg, ${firstGradient} ${firstGradientPercentage}%, ${secondGradient} ${secondGradientPercentage}%)`
      : `${backgroundColor}`
  };
  font-size: ${textSize}px,
  padding: ${paddingH}px ${paddingV}px;
  color: ${textColor};
  cursor: pointer;
  font-weight: ${bold === true ? `bold` : "400"};
  border-radius: ${
    borderSingle === true
      ? `${borderUpLeft}px ${borderUpRight}px ${borderDownRight}px ${borderDownLeft}px`
      : `${radius}px`
  };
  ${
    borderActive === true
      ? `border:${borderColor} ${borderPx}px ${borderStyle};`
      : ""
  }
  ${
    boxShadow === true
      ? `${
          boxShadow === true
            ? `box-shadow: ${boxShadowColor} 0px 0px ${boxShadowBlur}px ${boxShadowSpread}px`
            : ``
        } `
      : ``
  }

  `;
  const handleOnChange = (e) => {
    setBorderStyle(e.target.value);
  };

  function handleClick(e) {
    e.preventDefault();
    alert("Copied!");
  }

  useEffect(() => {
    borderStyle === "product" ? "" : "";
    borderStyle === "website" ? "" : "";
    borderStyle === "breadcrumb" ? "" : "";
  }, [borderStyle]);

  return (
    <div>
      <div className="tool-btn-tool-cnt">
        <section className="tool-bnt-first-cnt">
          <h1>Button generator</h1>
          <div className="tool-bnt-input-cnt">
            <label htmlFor="cta">Call to action</label>
            <div className="name-input-cnt">
              <input
                id="cta"
                name="cta"
                type="text"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
              />

              <label htmlFor="bold">Activate bold:</label>
              <input
                id="bold"
                name="bold"
                type="checkbox"
                value={bold}
                onChange={() => setBold(!bold)}
              />
            </div>
            <label htmlFor="textSize">Text size</label>
            <div className="div-input-cnt">
              <label className="label-text" htmlFor="textSizeText">
                Text size
              </label>
              <input
                id="textSizeText"
                name="textSizeText"
                type="text"
                min="10"
                max="100"
                value={textSize}
                onChange={(e) => setTextSize(e.target.value)}
              />
              <input
                id="textSize"
                name="textSize"
                type="range"
                min="10"
                max="100"
                step="1"
                value={textSize}
                onChange={(e) => setTextSize(e.target.value)}
              />
            </div>
            <div className="div-input-large-cnt">
              <div className="flex-50">
                <label htmlFor="TextColor">Text Color</label>
                <input
                  id="TextColor"
                  name="TextColor"
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                />
              </div>
              {gradient === false ? (
                <div className="flex-50">
                  <label htmlFor="backgroundColor">Background Color</label>
                  <input
                    id="backgroundColor"
                    name="backgroundColor"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setbackgroundColor(e.target.value)}
                  />
                </div>
              ) : (
                ""
              )}
            </div>

            {gradient === true ? (
              <div className="flex-column">
                <label htmlFor="gradientDeg">Gradient angle degree</label>
                <input
                  id="gradientDeg"
                  name="gradientDeg"
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={gradientDeg}
                  onChange={(e) => setGradientDeg(e.target.value)}
                />
                <label htmlFor="firstGradient">First gradient</label>
                <input
                  id="firstGradient"
                  name="firstGradient"
                  type="color"
                  value={firstGradient}
                  onChange={(e) => setFirstGradient(e.target.value)}
                />
                <label htmlFor="firstGradientPercentage">
                  First gradient percentage
                </label>
                <input
                  id="firstGradientPercentage"
                  name="firstGradientPercentage"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={firstGradientPercentage}
                  onChange={(e) => setFirstGradientPercentage(e.target.value)}
                />
                <label htmlFor="secondGradient">Second gradient</label>
                <input
                  id="secondGradient"
                  name="secondGradient"
                  type="color"
                  value={secondGradient}
                  onChange={(e) => setSecondGradient(e.target.value)}
                />
                <label htmlFor="secondGradientPercentage">
                  Second gradient percentage
                </label>
                <input
                  id="secondGradientPercentage"
                  name="secondGradientPercentage"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={secondGradientPercentage}
                  onChange={(e) => setSecondGradientPercentage(e.target.value)}
                />
              </div>
            ) : (
              ""
            )}
            <div className="div-input-cnt margin-element">
              <label htmlFor="gradient">Activate gradient background:</label>
              <input
                id="gradient"
                name="gradient"
                type="checkbox"
                value={gradient}
                onChange={(e) => setGradient(!gradient)}
              />
            </div>
            <label htmlFor="paddingV">Horizontal Padding</label>
            <div className="div-input-cnt">
              <label className="label-text" htmlFor="paddingVText">
                Horizontal Padding
              </label>
              <input
                id="paddingVText"
                name="paddingVText"
                type="text"
                min="10"
                max="100"
                value={paddingV}
                onChange={(e) => setPaddingV(e.target.value)}
              />
              <input
                id="paddingV"
                name="paddingV"
                type="range"
                min="10"
                max="100"
                step="1"
                value={paddingV}
                onChange={(e) => setPaddingV(e.target.value)}
              />
            </div>
            <label htmlFor="paddingH">Vertical Padding</label>
            <div className="div-input-cnt">
              <label className="label-text" htmlFor="paddingHText">
                Vertical Padding
              </label>
              <input
                id="paddingHText"
                name="paddingHText"
                type="text"
                min="7"
                max="100"
                value={paddingH}
                onChange={(e) => setPaddingH(e.target.value)}
              />
              <input
                id="paddingH"
                name="paddingH"
                type="range"
                min="7"
                max="100"
                step="1"
                value={paddingH}
                onChange={(e) => setPaddingH(e.target.value)}
              />
            </div>

            {borderSingle === true ? (
              <>
                <label htmlFor="radiusUpLeft">Radius Up Left</label>
                <input
                  id="radiusUpLeft"
                  name="radiusUpLeft"
                  type="range"
                  min="0"
                  max="60"
                  step="0.01"
                  value={borderUpLeft}
                  onChange={(e) => setBorderUpLeft(e.target.value)}
                />
                <label htmlFor="radiusUpReft">Radius Up Right</label>
                <input
                  id="radiusUpRight"
                  name="radiusUpRight"
                  type="range"
                  min="0"
                  max="60"
                  step="0.01"
                  value={borderUpRight}
                  onChange={(e) => setBorderUpRight(e.target.value)}
                />
                <label htmlFor="radiusDownLeft">Radius Down Left</label>
                <input
                  id="radiusDownLeft"
                  name="radiusDownLeft"
                  type="range"
                  min="0"
                  max="60"
                  step="0.01"
                  value={borderDownLeft}
                  onChange={(e) => setBorderDownLeft(e.target.value)}
                />
                <label htmlFor="radiusDownRight">Radius Down Right</label>
                <input
                  id="radiusDownRight"
                  name="radiusDownRight"
                  type="range"
                  min="0"
                  max="60"
                  step="0.01"
                  value={borderDownRight}
                  onChange={(e) => setBorderDownRight(e.target.value)}
                />
              </>
            ) : (
              <>
                <label htmlFor="radius">Radius</label>
                <div className="div-input-cnt">
                  <input
                    id="radiusText"
                    name="radiusText"
                    type="text"
                    min="0"
                    max="90"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                  />
                  <label className="label-text" htmlFor="radiusText">
                    Radius
                  </label>
                  <input
                    id="radius"
                    name="radius"
                    type="range"
                    min="0"
                    max="90"
                    step="1"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className="div-input-cnt margin-element">
              <label htmlFor="singleRadius">
                Activate single angle radius:
              </label>
              <input
                id="singleRadius"
                name="singleRadius"
                type="checkbox"
                value={borderSingle}
                onChange={(e) => setBorderSingle(!borderSingle)}
              />
            </div>
            <div className="div-input-cnt">
              <label htmlFor="boxShadow">Activate box shadow:</label>
              <input
                id="boxShadow"
                name="boxShadow"
                type="checkbox"
                value={boxShadow}
                onChange={(e) => setBoxShadow(!boxShadow)}
              />
            </div>
            {boxShadow === true ? (
              <>
                <label htmlFor="boxShadowColor">Box shadow color</label>
                <input
                  id="boxShadowColor"
                  name="boxShadowColor"
                  type="color"
                  value={boxShadowColor}
                  onChange={(e) => setBoxShadowColor(e.target.value)}
                />
                <label htmlFor="boxShadowBlur">Box shadow blur</label>
                <input
                  id="boxShadowBlur"
                  name="boxShadowBlur"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={boxShadowBlur}
                  onChange={(e) => setBoxShadowBlur(e.target.value)}
                />
                <label htmlFor="boxShadowSpread">Box shadow spread</label>
                <input
                  id="boxShadowSpread"
                  name="boxShadowSpread"
                  type="range"
                  min="0"
                  max="15"
                  step="0.1"
                  value={boxShadowSpread}
                  onChange={(e) => setBoxShadowSpread(e.target.value)}
                />
              </>
            ) : (
              ""
            )}

            <div className="div-input-cnt">
              <label htmlFor="border">Activate borders:</label>
              <input
                id="border"
                name="border"
                type="checkbox"
                value={borderActive}
                onChange={() => setBorderActive(!borderActive)}
              />
            </div>

            {borderActive === true ? (
              <>
                <label htmlFor="borderColor">Border Color</label>
                <input
                  id="borderColor"
                  name="borderColor"
                  type="color"
                  value={borderColor}
                  onChange={(e) => setBorderColor(e.target.value)}
                />

                <label htmlFor="borderPx">Border Dimension</label>
                <input
                  id="borderPx"
                  name="borderPx"
                  min="0"
                  max="60"
                  step="0.01"
                  type="range"
                  value={borderPx}
                  onChange={(e) => setBorderPx(e.target.value)}
                />
                <select
                  name="borderStyle"
                  id="borderStyle"
                  value={borderStyle}
                  onChange={handleOnChange}
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                  <option value="double">Double</option>
                  <option value="groove">Groove</option>
                  <option value="ridge">Ridge</option>
                  <option value="inset">Inset</option>
                  <option value="outset">Outset</option>
                </select>
              </>
            ) : null}
            <SyntaxHighlighter
              id="css"
              className="script"
              language="javascript"
            >
              {css}
            </SyntaxHighlighter>
            <button
              onClick={handleClick}
              className="button"
              data-clipboard-action="copy"
              data-clipboard-target="#css"
            >
              Copy To Clipboard
            </button>
          </div>
        </section>
        <section className="tool-bnt-second-cnt">
          <div className="tool-bnt-second">
            <button
              style={{
                cursor: "pointer",
                fontSize: `${textSize}px`,
                padding: `${paddingH}px ${paddingV}px `,
                color: `${textColor}`,
                fontWeight: `${bold === true ? "bold" : "400"}`,
                background: `${
                  gradient === true
                    ? `linear-gradient(${gradientDeg}deg,${firstGradient} ${firstGradientPercentage}%, ${secondGradient} ${secondGradientPercentage}%)`
                    : `${backgroundColor}`
                }`,
                border: `${
                  borderActive === true
                    ? `${borderColor} ${borderPx}px ${borderStyle}`
                    : "0px "
                }`,
                boxShadow: `${
                  boxShadow === true
                    ? `${boxShadowColor} 0px 0px ${boxShadowBlur}px ${boxShadowSpread}px`
                    : `${boxShadowColor} 0px 0px 0px 0px`
                } `,
                borderRadius: `${
                  borderSingle === true
                    ? `${borderUpLeft}px ${borderUpRight}px ${borderDownRight}px ${borderDownLeft}px`
                    : `${radius}px`
                }`,
              }}
            >
              {cta}
            </button>
          </div>
        </section>
      </div>
      <div className="paragraph-cnt">
        <div className="paragraph-title-cnt flex-center">
          <div>
            <h2>01/TOOLS</h2>
            <h3>A complex button generator</h3>
          </div>
        </div>
        <div className="paragraph-p-cnt flex-center">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quia,
            ducimus fuga doloribus ea non suscipit praesentium modi temporibus
            placeat eius officiis enim, voluptas autem reprehenderit quidem ab
            in deleniti. Vel eius, voluptate, fuga suscipit quis quibusdam
            soluta ratione iure sunt, consectetur possimus assumenda eos odit
            distinctio obcaecati necessitatibus! Reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToolButton;
