import React from "react";
import Form from "./Components/Form";

export default function App() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <div className="bg-gray-100 hidden relative w-1/2 lg:flex h-full items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-tr from-orange-500 to-pink-500 rounded-full animate-spin-slow" />
        <div className="w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0" />
      </div>
    </div>
  );
}