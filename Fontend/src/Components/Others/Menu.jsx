import React from "react";

const Menu = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <div className="menu-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clipPath="url(#clip0_1_5)">
                <path
                  d="M2.81494 8.07717C2.81494 7.15178 3.56511 6.40161 4.4905 6.40161H34.6505C35.5759 6.40161 36.326 7.15178 36.326 8.07717C36.326 9.00255 35.5759 9.75272 34.6505 9.75272H4.4905C3.56511 9.75272 2.81494 9.00255 2.81494 8.07717Z"
                  fill="white"
                />
                <path
                  d="M2.81494 18.1305C2.81494 17.2051 3.56511 16.4549 4.4905 16.4549H34.6505C35.5759 16.4549 36.326 17.2051 36.326 18.1305C36.326 19.0559 35.5759 19.806 34.6505 19.806H4.4905C3.56511 19.806 2.81494 19.0559 2.81494 18.1305Z"
                  fill="white"
                />
                <path
                  d="M4.4905 26.5083C3.56511 26.5083 2.81494 27.2584 2.81494 28.1838C2.81494 29.1092 3.56511 29.8594 4.4905 29.8594H34.6505C35.5759 29.8594 36.326 29.1092 36.326 28.1838C36.326 27.2584 35.5759 26.5083 34.6505 26.5083H4.4905Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5">
                  <rect
                    width="29.6309"
                    height="29.6309"
                    fill="white"
                    transform="translate(0.345703 0.228516)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="menu-Title">Notes++</div>
        </div>
      </div>
    </>
  );
};

export default Menu;
