"use client";

import { PERSONAL_PROJECTS } from "@/constants/projects";
import { TOOLS_COLORS } from "@/constants/colors";
import { ExternalLink, Github } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const toolColors = TOOLS_COLORS;

export default function ProjectsPage() {
  return (
    <div className="flex flex-1 flex-col gap-10">
      <div className="text-left md:text-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">
          A collection of my favorite projects and experiments.
        </p>
      </div>

      <div className="columns-1 space-y-6 gap-6 sm:columns-2">
        {PERSONAL_PROJECTS.map((project, index) => (
          <div
            key={`project-${index + 1}`}
            className="break-inside-avoid overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900"
          >
            {project.images && <ImageCarousel images={project.images} />}

            <div className="flex flex-col gap-4 p-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      toolColors[tool] || "bg-gray-300 text-gray-800"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-3 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-700 hover:underline dark:text-gray-200"
                >
                  <Github size={16} />
                  Code
                </a>

                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 hover:underline dark:text-gray-200"
                  >
                    <ExternalLink size={16} />
                    Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageCarousel({ images }: { images: (string | StaticImageData)[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || !hasMultiple) return;

    const interval = setInterval(() => {
      const next =
        api.selectedScrollSnap() === images.length - 1
          ? 0
          : api.selectedScrollSnap() + 1;

      api.scrollTo(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [api, hasMultiple, images.length]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        loop: hasMultiple,
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-52 w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {hasMultiple && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1 rounded-full bg-black/30 py-1 px-1.5 backdrop-blur-sm">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 w-2 rounded-full border transition-all ${
                current === index
                  ? "border-white bg-white"
                  : "border-white/70 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </Carousel>
  );
}
