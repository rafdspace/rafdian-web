"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import BBoost1 from "@/app/(frontend)/assets/images/bboost-1.png";
import BBoost2 from "@/app/(frontend)/assets/images/bboost-2.png";
import ChatPage1 from "@/app/(frontend)/assets/images/chat-1.png";
import ChatPage2 from "@/app/(frontend)/assets/images/chat-2.png";
import PokemonPage1 from "@/app/(frontend)/assets/images/pokemon-1.png";
import PokemonPage2 from "@/app/(frontend)/assets/images/pokemon-2.png";
import PokemonPage3 from "@/app/(frontend)/assets/images/pokemon-3.png";
import Wedding1 from "@/app/(frontend)/assets/images/wedding-1.png";

const projects = [
  {
    title: "Ask me anything",
    description:
      "A conversational AI chatbot built with Next.js and the Gemini API for my personal website. It can answer questions about my experience, projects, and tools that I used.",
    images: [ChatPage1, ChatPage2],
    github: "https://github.com/rafdianramadhan/ai-chat",
    preview: "https://rafdspace.vercel.app/chat",
    tools: ["Next.js", "Typescript", "Tailwind CSS", "Gemini API"],
  },
  {
    title: "Background Boost",
    description:
      "BackgroundBoost is Canva app for effortlessly enhancing images with stunning background effects. Whether you want to add a classic black and white look, a dreamy blur, or a vintage sepia tone, our app makes it simple to transform your photos and make them stand out.",
    images: [BBoost1, BBoost2],
    github: "https://github.com/rafdspace/background-boost",
    tools: [
      "React",
      "Typescript",
      "Canva App SDK",
      "Canva Selection API",
      "Canva Image Overlay API",
    ],
  },
  {
    title: "Background Remover API",
    description:
      "The Background Remover API is a Node.js application built with Express that processes images to remove backgrounds using the Photoroom API. This API provides an endpoint for clients to submit image URLs, download the image, and return a version with the background removed.",
    github: "https://github.com/rafdspace/process-background-image-api",
    tools: ["Node.js", "Express", "Photoroom API"],
  },
  {
    title: "Wedding Invitation",
    description:
      "A custom wedding invitation platform built with React and integrated with the Google Sheets API for managing guest invitations efficiently.",
    github: "https://github.com/rafdspace/wedding-invitation",
    images: [Wedding1],
    preview: "https://rafdspace-wedding.vercel.app/",
    tools: ["React", "Typescript", "Emotion CSS", "Google Sheets API"],
  },
  {
    title: "Pokemon - Gotta Catch 'em All",
    description:
      "A web-app used for collecting pokemons created using Create-React-App with PWA (progressive web application). The design is inspired by Pokemon Wiki - Fandom.",
    github: "https://github.com/rafdspace/gotcha-catch-em-all",
    images: [PokemonPage1, PokemonPage2, PokemonPage3],
    preview: "https://pokedex-rafdian.vercel.app/",
    tools: ["React", "Redux", "Emotion CSS", "GraphQL"],
  },
];

const toolColors: Record<string, string> = {
  "Next.js": "bg-black text-white",
  "Gemini API": "bg-indigo-600 text-white",
  Typescript: "bg-blue-600 text-white",
  "Tailwind CSS": "bg-cyan-400 text-gray-900",
  React: "bg-sky-500 text-white",
  "Canva App SDK": "bg-teal-500 text-white",
  "Canva Selection API": "bg-teal-600 text-white",
  "Canva Image Overlay API": "bg-teal-700 text-white",
  "Node.js": "bg-green-600 text-white",
  Express: "bg-gray-700 text-white",
  "Photoroom API": "bg-amber-600 text-white",
  GraphQL: "bg-fuchsia-600 text-white",
  Redux: "bg-purple-600 text-white",
  "Emotion CSS": "bg-rose-400 text-white",
  "Google Sheets API": "bg-green-500 text-white",
};

export default function ProjectsPage() {
  return (
    <div className="flex-1 flex gap-10 flex-col">
      <div className="text-left md:text-center">
        <h2 className="text-3xl font-bold">Projects 🚀</h2>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of my favorite projects and experiments.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 gap-6 space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={`project-${index + 1}`}
            layout
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="break-inside-avoid rounded-xl overflow-hidden shadow-xs bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
          >
            {project.images && <ImageCarousel images={project.images} />}

            <div className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`text-xs px-2 py-1 rounded-full font-medium ${toolColors[tool] || "bg-gray-300 text-gray-800"}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 text-sm hover:underline text-gray-700 dark:text-gray-200"
                >
                  <Github size={16} /> Code
                </a>
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    className="flex items-center gap-1 text-sm hover:underline text-gray-700 dark:text-gray-200"
                  >
                    <ExternalLink size={16} /> Preview
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ImageCarousel({ images }: { images: (string | StaticImageData)[] }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!hasMultiple) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, hasMultiple]);

  return (
    <div className="relative w-full h-52 bg-gray-200 dark:bg-gray-800 overflow-hidden">
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full h-full"
      >
        <Image
          src={images[index]}
          alt={`Project image ${index + 1}`}
          fill
          className="object-cover"
        />
      </motion.div>

      {hasMultiple && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <button
              type="button"
              key={`image-${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-gray-400/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
