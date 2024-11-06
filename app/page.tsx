"use client"
import { motion, AnimatePresence } from "framer-motion";

import HomeLinks from "@components/HomeLinks";

export default function Home() {
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
    <div className="relative mx-auto mt-10 flex w-full max-w-2xl items-center py-16 md:pb-32">
      <div className="mb-16 flex flex-col items-start justify-center">
        <div className="w-full">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">
            Gustavo Motta
          </h1>
          <h2 className="mb-2 text-gray-700 sm:text-lg">
            Desenvolvedor Full Stack
          </h2>
          <p className="mt-1 text-gray-800 sm:text-lg">
            Desenvolvedor de Sistemas.<br/>
            Atualmente cursando Ciências da Computação e Ciências Contábeis.<br/>
            Entre em contato comigo nas redes sociais, ou me mande
            um email diretamente.{" "}
          </p>
          <HomeLinks />
        </div>
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
  )

}
