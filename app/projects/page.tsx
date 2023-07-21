"use client"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import ArrowIcon from "@components/icons/ArrowIcon";
import PlaceholderImage from "@components/PlaceholderImage";
import { DOMAIN } from "@lib/globals";
import { ProjectProps } from "@lib/types";

import projects from "../../public/projects/list.json";

export const metadata = {
  title: "Projetos",
  description: "Meu portifolio.",
  openGraph: {
    title: "Projetos",
    url: `${DOMAIN}/Projetos`,
  },
  alternates: {
    canonical: `${DOMAIN}/Projetos`,
  },
};

export default function Projetos() {
  return (
    <AnimatePresence mode="wait">
    <motion.div
    initial="initialState"
    animate="animateState"
    exit="exitState"
    transition={{
      duration: 0.75,
    }}
    variants={{
      initialState: {
        opacity: 0,
      },
      animateState: {
        opacity: 1,
      },
      exitState: {

      },
    }}
    className="base-page-size"
    >
    <section className="relative m-auto mb-40 w-full max-w-2xl space-y-20">
      <div className="m-auto w-full pt-5 text-center uppercase text-gray-600">
        Principais Projetos <ArrowIcon />
      </div>
      {projects.map((project: ProjectProps) => {
        return (
          <div className="flex flex-wrap" key={project.title}>
            {project.image && (
              <div className="mb-2 w-full pt-4 md:pt-0">
                <div className="max-w-full bg-transparent">
                  <Image
                    alt="..."
                    placeholder="blur"
                    blurDataURL={PlaceholderImage(
                      project.width,
                      project.height
                    )}
                    src={`/${project.image}`}
                    width={project.width}
                    height={project.height}
                  />
                </div>
              </div>
            )}
            <div>
              <div className="md:pr-12">
                <div className="text-xl font-semibold md:text-3xl">
                  {project.title}
                </div>
                <p className="mt-1 text-gray-800">{project.summary}</p>
                <div className="mt-3 leading-relaxed text-gray-800">
                  <b>Funçao:</b> {project.projRole}
                </div>
                {project.tools && (
                  <div className="mt-1 leading-relaxed text-gray-800">
                    <b>Ferramentas:</b> {project.tools}
                  </div>
                )}
                {project.url && (
                  <div className="mt-1 text-lg leading-relaxed text-gray-600">
                    <a
                      className="text-sm underline  bg-gradient-to-r decoration-indigo-800/30 ease-in-out hover:opacity-50"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver Projeto
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </section>
    </motion.div>
    </AnimatePresence>
  );
}
