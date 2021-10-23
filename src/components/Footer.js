import React from "react";

function Footer() {
    return (
        <div className="bg-indigo-600 text-white font-bold text-center font-bold py-2 px-4 h-20 shadow-inner">
            <span className="pt-10">
                Made with ❤ by Siddharth.
                <br/>
                <a href="https://github.com/DracTheDino/blogfolio"
                   className="text-blue-200 italic underline hover:bg-blue-700 transition duration-500 transform">
                    Check out the source code on GitHub.
                </a>
            </span>
        </div>
    );
}

export default Footer;
