import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl pt-3 font-semibold text-white">
                Projects
            </h1>
            <div className="px-50">
                <ProjectCard />
            </div>

        </div>
    );
}

export default Projects;
