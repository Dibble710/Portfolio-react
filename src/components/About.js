import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import background from "../games.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{  
        name,
        bio,
        "authorImage": image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={background} alt="mountains" className="absolute" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="about-background rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            alt={author.name}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mb-8"
          />
          <div className="text-lg flex flex-col justify-center p-6">
            <h1 className="cursive text-6xl text-blue-900 mb-4">
              Hi there, I'm{" "}
              <span className="text-blue-200">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="65wj1w2j"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
