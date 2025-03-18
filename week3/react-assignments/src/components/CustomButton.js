import React from "react";

const CustomButton: React.FC = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

export default CustomButton;