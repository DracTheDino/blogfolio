import React from "react";

function About() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl pt-3 font-semibold text-white">
        About Me
      </h1>
      <p className="text-xl pt-5 text-white font-semibold px-16">
        Programming, motorsports, 3D modelling, cars, tech, music and TV 💻.
        Preferably all at once 🤔. <br />
        <br />
        📖 High school student. <br />
        🌱 In love with Blender and DiscordKt. <br />
        📘 Currently working on this site. <br />
        📔 Software of choice: VSCode/IntelliJ IDEA/Blender. <br />
        🖥️ Operating system: Windows 11 (+ WSL2, sometimes). <br />
        🎵{" "}
        <a
          href="https://open.spotify.com/playlist/16c8EwGMSEp9NSRW8uZOSL?si=7e55cb3e583649eb"
          target="_blank"
          className="text-green-300 italic underline hover:bg-green-600 transition duration-500 transform"
        >
          My Spotify playlist.
        </a>
      </p>
    </div>
  );
}

export default About;
