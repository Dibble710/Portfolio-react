import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"] {
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-for-all min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive title">My Projects</h1>
        <h2 className="text-lg text-blue-100 flex justify-center mb-12">
          Here are a few of my completed projects!
        </h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-for-project p-16">
                <h3 className="text-blue-100 text-3xl font-bold mb-2 project-links">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-blue-100 text-xs space-x-4">
                  <span>
                    <strong className="font-bold text-black">Finished on: </strong>{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold text-black">Company: </strong>{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold text-black">Type: </strong>{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-xl text-black  leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-blue-100 font-bold hover:underline project-links text-xl"
                  >
                    View The Project{" "}
                    
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
