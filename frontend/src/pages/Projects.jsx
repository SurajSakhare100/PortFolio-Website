// src/components/Projects.js
import React, { useRef } from 'react';
import ProjectItem from '../components/ProjectItems';
import Headers from '../components/Headers';
import YoutubeIndia from '/webpages/youtubeindia.png'; // Ensure the correct path
import SpotifyIndia from '/webpages/spotifyindia.png'; // Ensure the correct path
import OrganicStore from '/webpages/organicstore.png'; // Ensure the correct path
import DevNet from '/webpages/devnet.png'; // Ensure the correct path

const data = {
    devnet: {
        name: "Dev Net",
        desc: "Full-stack social media platform for developers...",
        weblink: "https://itsdevnet.vercel.app/",
        gitlink: "https://github.com/SurajSakhare100/Social-Media-App",
    },
    youtubeindia: {
        name: "Youtube India",
        desc: "React web app replicating YouTube's features...",
        weblink: "https://youtubeindia.vercel.app/",
        gitlink: "https://github.com/SurajSakhare100/youtube-clone",
    },
    spotifyindia: {
        name: "Spotify India",
        desc: "React web app replicating Spotify's features...",
        weblink: "https://spotifyindia.vercel.app/",
        gitlink: "https://github.com/SurajSakhare100/SpotifyCloneApp",
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
                    <ProjectItem image={DevNet} data={data.devnet} />
                    <ProjectItem image={OrganicStore} data={data.organicstore} />
                    <ProjectItem image={YoutubeIndia} data={data.youtubeindia} />
                    <ProjectItem image={SpotifyIndia} data={data.spotifyindia} />
                </div>
            </div>
        </section>
    );
}

export default Projects;
