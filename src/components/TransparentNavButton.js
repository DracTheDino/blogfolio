import React from "react";

function TransparentNavButton({ buttonText }) {
  return (
    <button className="bg-transparent-500 hover:bg-transparent-600 transition duration-500 transform hover:-translate-y-1 text-white font-bold py-2 px-4 rounded">
      {buttonText}
      <buttonIcon />
    </button>
  );
}

export default TransparentNavButton;
