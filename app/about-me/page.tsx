"use client"
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Certificados from "@components/cft";
import Footer from "@components/Footer";
import ArrowIcon from "@components/icons/ArrowIcon";

import profilePic from "../../public/me.jpg";

export default function SobreMim() {
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
    <>
      <section
        id="sobre-mim"
        className="relative m-auto mb-40 w-full max-w-2xl space-y-20"
      >
        <div className="m-auto w-full pt-5 text-center uppercase text-gray-600">
          Sobre Mim <ArrowIcon />
        </div>
        <div className="flex flex-wrap-reverse">
          <div className="w-full text-gray-800 md:w-4/5 md:pr-12">
            <div className="md:pr-12">
              <p className="mt-4 leading-relaxed">
                Ola! meu nome é Gustavo e sou um desenvolvedor com 3 anos de experiência.
              </p>
              <p className="mt-4 leading-relaxed" />
              <p className="mt-4 leading-relaxed">
              Atualmente estou cursando a faculdade de Ciências da Computação e sempre buscando novas oportunidades para crescer e contribuir com projetos inovadores.
              </p>
              <p className="mt-4 leading-relaxed">
              <p>Minhas principais habilidades técnicas são:</p>
              <p>Node.js (3 anos de experiência)</p>
              <p>TypeScript (2 anos de experiência)</p>
              <p>JavaScript (3 anos de experiência)</p>
              <p>React (2 anos de experiência)</p>
              <p>MySQL (2 anos de experiência)</p>

              </p>
              <p className="mt-4  leading-relaxed ">
              Sou uma pessoa que adora desenvolver ideias e enfrentar novos desafios. Estou animado para fazer parte de equipes que compartilham minha paixão pela tecnologia e criar soluções incríveis juntos.
              </p>
              <p className="mt-4  leading-relaxed ">
              Você pode me encontrar em:
              <br />
              <a className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50" href="https://www.instagram.com/gustavo_henr7/">Instagram</a><br />
              <a className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50" href="https://github.com/Gustavohenribra">GitHub</a><br />
              Ou entre em contato comigo diretamente por <a className="text-blue-700 bg-gradient-to-r underline decoration-indigo-500/30 ease-in-out hover:opacity-50" href="mailto:gustavohenriquebm7@outlook.com">E-mail</a>
              </p>
            </div>
          </div>
          <div className="mx-auto w-1/2 pt-4 md:ml-auto md:w-1/5 md:pl-4 md:pt-0">
            <div className="max-w-full">
            <Image
                alt="..."
                src={profilePic}
                placeholder="blur"
                className="rounded-full h-full w-full
                border-slate-400 border-2
                shadow-2xl drop-shadow-2xl
                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      <Certificados />
      <Footer />
    </>
    </motion.div>
    </AnimatePresence>
  );
}
