import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [element1, setElement1] = useState("Life");
  const [element2, setElement2] = useState("Water");
  const [resto, setResto] = useState(false);
  const [wild, setWild] = useState(false);
  const [glyph, setGlyph] = useState(false);
  const [pyro, setPyro] = useState(false);
  const [shift, setShift] = useState(false);
  const [surge, setSurge] = useState(false);
  const [hex, setHex] = useState(false);
  const [war, setWar] = useState(false);
  const [dead, setDead] = useState(false);

  function magicCheck() {
    if (
      element1 === "Life" ||
      element1 === "Water" ||
      element2 === "Life" ||
      element2 === "Water"
    ) {
      setResto(true);
    } else {
      setResto(false);
    }
    if (
      element1 === "Life" ||
      element1 === "Nature" ||
      element2 === "Life" ||
      element2 === "Nature"
    ) {
      setWild(true);
    } else {
      setWild(false);
    }
    if (
      element1 === "Life" ||
      element1 === "Air" ||
      element2 === "Life" ||
      element2 === "Air"
    ) {
      setGlyph(true);
    } else {
      setGlyph(false);
    }
    if (
      element1 === "Water" ||
      element1 === "Stone" ||
      element2 === "Water" ||
      element2 === "Stone"
    ) {
      setPyro(true);
    } else {
      setPyro(false);
    }
    if (
      element1 === "Water" ||
      element1 === "Light" ||
      element2 === "Water" ||
      element2 === "Light"
    ) {
      setShift(true);
    } else {
      setShift(false);
    }
    if (
      element1 === "Water" ||
      element1 === "Electricity" ||
      element2 === "Water" ||
      element2 === "Electricity"
    ) {
      setSurge(true);
    } else {
      setSurge(false);
    }
    if (
      element1 === "Nature" ||
      element1 === "Electricity" ||
      element2 === "Nature" ||
      element2 === "Electricity"
    ) {
      setHex(true);
    } else {
      setHex(false);
    }
    if (
      element1 === "Light" ||
      element1 === "Air" ||
      element2 === "Light" ||
      element2 === "Air"
    ) {
      setWar(true);
    } else {
      setWar(false);
    }
    if (
      element1 === "Stone" ||
      element1 === "Blood" ||
      element2 === "Stone" ||
      element2 === "Blood"
    ) {
      setDead(true);
    } else {
      setDead(false);
    }
  }

  useEffect(() => {
    magicCheck();
  });

  return (
    <>
      <h1>Try It Out Below!</h1>
      <table class="main">
        <tbody>
          <tr>
            <td class="first">
              <h2>Pick Your Magical Elements!</h2>
              <h3 class="elementhead">
                Your first element is:{" "}
                <span style={{ textDecoration: "underline" }}>{element1}</span>{" "}
                <br />
                Your second element is:{" "}
                <span style={{ textDecoration: "underline" }}>{element2}</span>
              </h3>
              <h3>Change first element to:</h3>
              <div class="buttongroup">
                <button onClick={() => setElement1("Life")}>Life</button>
                <button onClick={() => setElement1("Water")}>Water</button>
                <button onClick={() => setElement1("Electricity")}>
                  Electricity
                </button>
                <button onClick={() => setElement1("Nature")}>Nature</button>
                <button onClick={() => setElement1("Air")}>Air</button>
                <button onClick={() => setElement1("Light")}>Light</button>
                <button onClick={() => setElement1("Stone")}>Stone</button>
                <button onClick={() => setElement1("Blood")}>Blood</button>
              </div>
              <h3>Change second element to:</h3>
              <div class="buttongroup">
                <button onClick={() => setElement2("Life")}>Life</button>
                <button onClick={() => setElement2("Water")}>Water</button>
                <button onClick={() => setElement2("Electricity")}>
                  Electricity
                </button>
                <button onClick={() => setElement2("Nature")}>Nature</button>
                <button onClick={() => setElement2("Air")}>Air</button>
                <button onClick={() => setElement2("Light")}>Light</button>
                <button onClick={() => setElement2("Stone")}>Stone</button>
                <button onClick={() => setElement2("Blood")}>Blood</button>
              </div>
            </td>

            <td>
              <table class="results">
                <thead>
                  <tr>
                    <td colspan="2">
                      <h3>Your Results</h3>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      style={
                        resto ? { color: "#556b2f" } : { color: "#800000" }
                      }
                    >
                      {resto
                        ? "You can be a Restoration Mage."
                        : "You cannot be a Restoration Mage."}
                    </td>
                    <td
                      style={
                        shift ? { color: "#556b2f" } : { color: "#800000" }
                      }
                    >
                      {shift
                        ? "You can be a Shift Mage."
                        : "You cannot be a Shift Mage."}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={wild ? { color: "#556b2f" } : { color: "#800000" }}
                    >
                      {wild
                        ? "You can be a Wild Mage."
                        : "You cannot be a Wild Mage."}
                    </td>
                    <td
                      style={
                        surge ? { color: "#556b2f" } : { color: "#800000" }
                      }
                    >
                      {surge
                        ? "You can be a Surge Mage."
                        : "You cannot be a Surge Mage."}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={
                        glyph ? { color: "#556b2f" } : { color: "#800000" }
                      }
                    >
                      {glyph
                        ? "You can be a Glyph Mage."
                        : "You cannot be a Glyph Mage."}
                    </td>
                    <td
                      style={hex ? { color: "#556b2f" } : { color: "#800000" }}
                    >
                      {hex
                        ? "You can be a Hex Mage."
                        : "You cannot be a Hex Mage."}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={pyro ? { color: "#556b2f" } : { color: "#800000" }}
                    >
                      {pyro
                        ? "You can be a Pyro Mage."
                        : "You cannot be a Pyro Mage."}
                    </td>

                    <td
                      style={war ? { color: "#556b2f" } : { color: "#800000" }}
                    >
                      {war
                        ? "You can be a War Mage."
                        : "You cannot be a War Mage."}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2">
                      <p
                        style={
                          dead ? { color: "#556b2f" } : { color: "#800000" }
                        }
                      >
                        {dead
                          ? "You can be a Death Mage - Be Careful!"
                          : "You cannot be a Death Mage."}
                      </p>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    </>
  );
}

export default App;
