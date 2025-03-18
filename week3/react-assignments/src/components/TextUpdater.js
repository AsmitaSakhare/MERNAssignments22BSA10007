import React, { useState } from "react";

const TextUpdater: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div className="p-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md w-full"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-lg font-semibold">You typed: {text}</p>
    </div>
  );
};

export default TextUpdater;