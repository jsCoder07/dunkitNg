import React from "react";

function CustomizedProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-200 relative cursor-pointer bg-red-500">
          <div className="absolute w-10 h-10 ring-2 ring-blue-500 top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2"/>
        </li>
        <li className="w-8 h-8 rounded-full relative cursor-pointer bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full relative cursor-not-allowed bg-orange-500">
        <div className="absolute w-10 h-[2px] bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"/>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-green-500 text-sm cursor-pointer py-1 px-4 rounded-md text-green-500">Small</li>
        <li className="ring-1 ring-green-500 text-sm cursor-pointer py-1 px-4 rounded-md text-white bg-green-500">Medium</li>
        <li className="ring-1 ring-green-200 text-sm cursor-not-allowed py-1 px-4 rounded-md bg-green-300 text-white">Large</li>
      </ul>
    </div>
  );
}

export default CustomizedProducts;
