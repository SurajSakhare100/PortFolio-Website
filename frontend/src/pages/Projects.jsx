// src/components/Projects.js
import React, { useRef } from 'react';
import ProjectItem from '../components/ProjectItems';
import Headers from '../components/Headers';
import YoutubeIndia from '/webpages/youtubeindia.png'; // Ensure the correct path
import habitpulse from '/webpages/habitpulse.png'; // Ensure the correct path
import OrganicStore from '/webpages/organicstore.png'; // Ensure the correct path
import readspark from '/webpages/readspark.png'; // Ensure the correct path

const data = {
    habitpulse: {
        name: "Habit Pulse",
        desc: "A habit tracking app to help users build good habits.",
        weblink: "https://habitpulse.xyz/",
    },
    readspark: {
        name: "Read Spark",
        desc: "React web app for discovering and sharing articles...",
        weblink: "https://readspark.vercel.app/",
        gitlink: "https://github.com/SurajSakhare100/ReadSpark",
    },
    youtubeindia: {
        name: "YouTube India",
        desc: "A clone of YouTube India with features like video playback, search, and user authentication.",
        weblink: "https://youtubeindia.vercel.app/",
        gitlink: "https://github.com/SurajSakhare100/youtube-clone"
    },
    organicstore: {
        name: "Organic Store",
        desc: "Organic store to sell various products.",
        weblink: "https://ecommercesuraj.netlify.app/",
        gitlink: "https://github.com/SurajSakhare100/E-Commerce",
    }
};

const Projects = () => {
    const projectref = useRef(null);
    return (

        <section id="projects" className="py-20 px-6 lg:w-3/4 mx-auto" ref={projectref}>
            <div>
            <Headers headers={'Project'} triggerElement={projectref.current} />
                <div className="flex flex-col gap-32 sm:mt-28">
                    <ProjectItem image={habitpulse} data={data?.habitpulse} />
                    <ProjectItem image={readspark} data={data?.readspark} />
                    <ProjectItem image={YoutubeIndia} data={data?.youtubeindia} />
                    <ProjectItem image={OrganicStore} data={data?.organicstore} />
                </div>
            </div>
        </section>
    );
}

export default Projects;
