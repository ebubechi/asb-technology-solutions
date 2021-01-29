import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <ul id="parent">
          <li>
            <strong>FE Engineer test 1</strong>
          </li>
          <li>
            <strong>Home</strong>
          </li>
          <li>
            <strong>Entries</strong>
          </li>
          <li>
            <strong>Divisions</strong>
          </li>
          
          <li>
            <div style={{ maxWidth: 400, }}>
              <div class="input-icons">
                <i class="fa fa-search icon"></i>
                <input class="input-field" type="text" />
              </div>
            </div>
          </li>
        </ul>
      </header>
      <hr />
    </div>
  );
};

export default Header;
