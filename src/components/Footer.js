import React from "react";

const Footer = () => {
  return (
    <div className="fixed h-8 bottom-0 px-2 py-1 flex items-center justify-center w-full text-xs text-gray-500">
      <span>
        Built with{" "}
        <svg
          height="2500"
          viewBox="175.7 78 490.6 436.9"
          width="2194"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline-block"
        >
          <g fill="#61dafb">
            <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4..." />
            <circle cx="420.9" cy="296.5" r="45.7" />
          </g>
        </svg>{" "}
        and{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 122.88 73.29"
          fill="#22d3ee"
          className="h-4 w-4 inline-block"
        >
          <path d="M61.44,0Q36.87,0,30.72,24.43..." />
        </svg>
        . Code at{" "}
        <a
          href="https://github.com/ARjunRajednrna"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:bg-red-500 hover:text-white font-medium"
        >
          GitHub
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
