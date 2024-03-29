import React from "react";

const SideOptions = ({ addNoteBtn }) => {
  return (
    <>
      <div className="side-bar-container">
        <div className="side-bar-options">
          <div className="option op-add" onClick={addNoteBtn}>
            <div className="svg-asset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
              >
                <g clipPath="url(#clip0_2_38)">
                  <path
                    d="M8.61904 24.5971C7.78511 24.5971 7.10909 25.2731 7.10909 26.1071C7.10909 26.941 7.78511 27.617 8.61904 27.617L24.1923 27.617L24.1923 43.1902C24.1923 44.0241 24.8683 44.7002 25.7022 44.7002C26.5361 44.7002 27.2122 44.0241 27.2122 43.1902L27.2122 27.617L42.7854 27.617C43.6193 27.617 44.2953 26.941 44.2953 26.1071C44.2953 25.2731 43.6193 24.5971 42.7854 24.5971L27.2122 24.5971L27.2122 9.02389C27.2122 8.18996 26.5361 7.51393 25.7022 7.51393C24.8683 7.51394 24.1923 8.18996 24.1923 9.02389L24.1923 24.5971L8.61904 24.5971Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_38">
                    <rect
                      width="36.2389"
                      height="36.2389"
                      fill="white"
                      transform="translate(0.0775146 26.1071) rotate(-45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="name">Add New</div>
          </div>
          <div className="option">
            <div className="svg-asset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.1795 4.29029C5.1795 2.85664 6.34171 1.69443 7.77537 1.69443H24.6485C26.0822 1.69443 27.2444 2.85664 27.2444 4.29029V28.951C27.2444 29.4199 26.9915 29.8523 26.5829 30.0822C26.1743 30.3121 25.6735 30.3038 25.2728 30.0604L16.2119 24.5585L7.1511 30.0604C6.75036 30.3038 6.24953 30.3121 5.84094 30.0822C5.43235 29.8523 5.1795 29.4199 5.1795 28.951V4.29029ZM24.6485 4.29029L7.77537 4.29029V26.6444L15.5383 21.9306C15.9522 21.6792 16.4717 21.6792 16.8856 21.9306L24.6485 26.6444V4.29029Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="name">Notes</div>
          </div>
          <div className="option">
            <div className="svg-asset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.72227 5.44173C9.72227 3.29124 11.4656 1.54793 13.6161 1.54793H18.8078C20.9583 1.54793 22.7016 3.29124 22.7016 5.44173V6.73966H27.8933C28.6102 6.73966 29.1913 7.32076 29.1913 8.03759C29.1913 8.75442 28.6102 9.33553 27.8933 9.33553H26.5168L25.4471 26.4515C25.3188 28.5037 23.617 30.1025 21.5608 30.1025H10.863C8.80685 30.1025 7.10507 28.5037 6.97681 26.4515L5.90706 9.33553H4.53054C3.81371 9.33553 3.2326 8.75442 3.2326 8.03759C3.2326 7.32076 3.81371 6.73966 4.53054 6.73966H9.72227V5.44173ZM12.3181 6.73966H20.1057V5.44173C20.1057 4.7249 19.5246 4.14379 18.8078 4.14379H13.6161C12.8992 4.14379 12.3181 4.7249 12.3181 5.44173V6.73966ZM8.50799 9.33553L9.56762 26.2896C9.61037 26.9737 10.1776 27.5066 10.863 27.5066H21.5608C22.2462 27.5066 22.8135 26.9737 22.8562 26.2896L23.9159 9.33553H8.50799Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="name">Trash</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideOptions;
