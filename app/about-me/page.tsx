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
                Ola! meu nome é Gustavo e sou um desenvolvedor Full Stack.
              </p>
              <p className="mt-4 leading-relaxed" />
              <p className="mt-4 leading-relaxed">
                Sou apaixonado por programaçao, a curiosidade e funcionamento de cada
                codigo, cada linha, sao oque me inspiram a produzir, venho estudando e  
                trabalhando como freelancer a mais de 1 ano e meio, e recentemente 
                iniciei na faculdade de Ciencias da Computaçao.
              </p>
              <p className="mt-4 leading-relaxed">
                Durante esse tempo, aprendi e consolidei muitos conhecimentos tanto
                no Back End quanto no Front End, realizei projetos desafiadores que
                me inspiraram mais a aprender tal como o RifaCoin, na qual tive que
                aprender a lidar com a blockchain.
              </p>
              <p className="mt-4  leading-relaxed ">
                Me considero uma pessoa extrovertida, capaz de me comunicar com qualquer
                um, que adora trabalhar em equipe e desenvolver ideias. Tenho uma afinidade 
                natural pela análise e adoro enfrentar desafios complexos.
              </p>
              <p className="mt-4  leading-relaxed ">
                Sou Brasileiro com raízes firmemente plantadas em terras mineiras.
                Sou daqueles que nasceu com um pão de queijo debaixo do braço, uma paixão
                por futebol e amante da tecnologia.
                
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
