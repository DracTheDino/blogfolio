import React from "react";

function Blog() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl pt-3 font-semibold text-white">
        Blog
      </h1>
      <p className="text-xl pt-5 text-white font-semibold px-16">
        This part is still under construction. What a pity...
        <br />
        Maybe you could check my temporary site{" "}
        <a
          href="https://dracthedino.github.io/"
          target="_blank"
          className="text-green-300 italic underline hover:bg-green-600 transition duration-500 transform"
        >
          over here
        </a>
        .
      </p>
    </div>
  );
}

export default Blog;
