import BBoost1 from "@/app/(frontend)/assets/images/bboost-1.png";
import BBoost2 from "@/app/(frontend)/assets/images/bboost-2.png";
import ChatPage1 from "@/app/(frontend)/assets/images/chat-1.png";
import ChatPage2 from "@/app/(frontend)/assets/images/chat-2.png";
import QuranVerse1 from "@/app/(frontend)/assets/images/quran-verse-1.png";
import QuranVerse2 from "@/app/(frontend)/assets/images/quran-verse-2.png";
import PokemonPage1 from "@/app/(frontend)/assets/images/pokemon-1.png";
import PokemonPage2 from "@/app/(frontend)/assets/images/pokemon-2.png";
import PokemonPage3 from "@/app/(frontend)/assets/images/pokemon-3.png";
import Wedding1 from "@/app/(frontend)/assets/images/wedding-1.png";

export const PERSONAL_PROJECTS = [
  {
    title: "Quran Verse",
    description:
      "Quran Verse is a Canva app that allows users to easily create beautiful designs featuring Quran verses. It provides a seamless experience for selecting Quran verses, making it simple to create visually appealing content.",
    images: [QuranVerse1, QuranVerse2],
    github: "https://github.com/rafdspace/quran-verse-app",
    tools: ["React", "Typescript", "Canva App SDK", "Canva Selection API"],
  },
  {
    title: "Quran Verse API",
    description:
      "A middleware API for fetching Quran verses and translations from the Quran Foundation API built with Node.js and Express.",
    github: "https://github.com/rafdspace/quran-verse-api",
    tools: ["Node.js", "Express", "Quran Foundation API"],
  },
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
    title: "Pokemon - Gotta Catch 'em All",
    description:
      "A web-app used for collecting pokemons created using Create-React-App with PWA (progressive web application). The design is inspired by Pokemon Wiki - Fandom.",
    github: "https://github.com/rafdspace/gotcha-catch-em-all",
    images: [PokemonPage1, PokemonPage2, PokemonPage3],
    preview: "https://pokedex-rafdian.vercel.app/",
    tools: ["React", "Redux", "Emotion CSS", "GraphQL"],
  },
 // {
  //  title: "Wedding Invitation",
  //  description:
  //    "A custom wedding invitation platform built with React and integrated with the Google Sheets API for managing guest invitations efficiently.",
   // github: "https://github.com/rafdspace/wedding-invitation",
    //images: [Wedding1],
   // preview: "https://rafdspace-wedding.vercel.app/",
   // tools: ["React", "Typescript", "Emotion CSS", "Google Sheets API"],
  //},
];
