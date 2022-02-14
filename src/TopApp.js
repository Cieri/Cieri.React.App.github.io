import React from "react";
import "./App.css";

function TopApp() {
  return (
    <div class="top">
      <h1>Magic Types Based on Elements</h1>
      <table class="main">
        <tbody>
          <tr>
            <td class="topfirst">
              <h2>Explanation</h2>
              <p>
                There are nine magic types available to mages based on the two
                elements a mage possesses. Like each mage, each magic type is
                associated with two of the eight elements. As long as a mage
                possesses <em>at least one</em> of those elements, they can
                study and utilize that magic type. The magic types and their
                associated elements are as follows in proceeding table.
              </p>
            </td>
            <td>
              <table class="innertable">
                <tbody>
                  <tr>
                    <th scope="row">Restoration Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Life</td>
                    <td>Water</td>
                  </tr>
                  <tr>
                    <th scope="row">Wild Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Life</td>
                    <td>Nature</td>
                  </tr>
                  <tr>
                    <th scope="row">Glyph Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Life</td>
                    <td>Air</td>
                  </tr>
                  <tr>
                    <th scope="row">Pyro Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Water</td>
                    <td>Stone</td>
                  </tr>
                  <tr>
                    <th scope="row">Shift Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Water</td>
                    <td>Light</td>
                  </tr>
                  <tr>
                    <th scope="row">Surge Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Water</td>
                    <td>Electricity</td>
                  </tr>
                  <tr>
                    <th scope="row">Hex Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Nature</td>
                    <td>Electricity</td>
                  </tr>
                  <tr>
                    <th scope="row">War Magic &nbsp;&nbsp;&ndash;</th>
                    <td>Light</td>
                    <td>Air</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      Dead Magic (Forbidden) &nbsp;&nbsp;&ndash;
                    </th>
                    <td>Stone</td>
                    <td>Blood</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TopApp;
