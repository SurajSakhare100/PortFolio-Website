// src/components/Projects.js
import React from 'react';
import ProjectItem from '../components/ProjectItems';
import Headers from '../components/Headers';
const Projects = () => {

    return (
        <section id="projects" className="py-20 px-6 lg:w-2/3 mx-auto ">
            <div className="">
                <Headers headers={'Projects'} />
                <div className="flex flex-col gap-32 mt-28">
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                    <ProjectItem />
                </div>
            </div>
        </section>
    );
}

export default Projects;
