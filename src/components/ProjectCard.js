import React from "react";
import NavButton from "./NavButton";

function ProjectCard() {
    return (
        <div className="text-center bg-blue-400 rounded">
            <h1 className="text-2xl pt-3 font-semibold text-white">Test</h1>
            <p>Test description</p>
            <NavButton buttonText="Test" />
        </div>
    );
}

export default ProjectCard;