import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <header className="text-center p-6">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to My React App</h1>
        <p className="mt-2 text-lg">Edit <code className="bg-gray-200 px-2 py-1 rounded-md">src/App.tsx</code> and save to reload.</p>
        <a
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;