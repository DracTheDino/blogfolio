import React from "react";

function NavButton({ buttonText }) {
  return (
    <button className="bg-pink-500 hover:bg-pink-600 transition duration-500 transform `hover:-translate-y-1` text-white font-bold py-2 px-4 rounded">
      {buttonText}
      <buttonIcon />
    </button>
  );
}

export default NavButton;
