import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollingText from "./ScrollingText";
import Card from "./Hoverimg";


export default function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/cabbage1L/repos")
            .then((res) => res.json())
            .then((data) => {
                //  repo public
                const filtered = data.filter((repo) => !repo.fork);
                setRepos(filtered);
            });
    }, []);

    return (
        <section id="Project" className="min-h-screen scroll-mt-[2rem] bg-black text-white px-0 sm:px-8 py-8 sm:py-12 mt-0">
            <ScrollingText title={" Coding is my life, and yes it's money 💖 , Coding is my life, and yes it's money 😗 , Coding is my life, and yes it's money 😎 , Coding is my life, and yes it's money"} duration={15} />
            <div className="">
                <div className="flex item-center justify-center mb-10 sm:mb-10 pt-10 sm:pt-25 sm:px-[2.5rem]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 h-100 w-[800px]">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Project.</h1>
                            <p className="text-gray-400 max-w-md">
                                Here you will find some of the personal projects that I created with each project containing its own case study
                            </p>
                        </div>
                        <Card />
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.slice(0, 9).map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition"
                    >
                        <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
                        <p className="text-gray-400 text-sm line-clamp-3">{repo.description}</p>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 text-sm mt-4 inline-block"
                        >
                            View on GitHub →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
