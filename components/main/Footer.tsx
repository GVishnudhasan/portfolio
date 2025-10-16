import React from "react";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mb-[20px] text-[15px] text-center flex items-center gap-2">
          <span> Made with</span>
          <span className="bg-white/10 text-purple-300 px-2 py-1 rounded text-sm font-mono">{`</>`}</span>
          <span>by Vishnudhasan Govindarajan</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
