import React from "react";

function ErrorMessage({ message }) {
  return (
    <div className="error-message bg-red-500 text-white text-center mt-4 p-3 rounded-lg shadow-md">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
