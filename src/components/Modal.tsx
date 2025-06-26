"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import cafesolo from "../img/cestas/cafeManhaSolo.jpg";

type ModalItemProps = {
  nome: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  itemsCompleto: string[];
  preco: string;
};

export default function Modal({ nome, image, itemsCompleto, preco }: ModalItemProps) {
  const [open, setOpen] = useState(false);

  const whatsappMessage = `Olá, gostaria de comprar a ${nome}.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5579991750501&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 bg-[#dd7630] text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
      >
        + Detalhes
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop com transparência real */}
            <div
              className="absolute inset-0 bg-[rgba(0,0,0,0.55)]"
              onClick={() => setOpen(false)}
            />

            {/* Modal em si */}
            <motion.div
              className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-6 border-4 border-amber-700 border-double border-opacity-80"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // bloqueia clique dentro
            >
              <div className="text-center">
                <div className="flex items-center mb-4">
                  <Image
                    src={image || cafesolo}
                    alt="Cesta de Café da Manhã"
                    width={100}
                    height={100}
                    className=" mr-2 rounded-full border-amber-700 border-4 w-24 h-24"
                  />
                  <h2 className="text-xl font-bold mb-4 text-amber-700">{nome}</h2>
                </div>
                <div className="border-b-2 border-dashed border-amber-700 mb-4"></div>
                <ul className="list-disc pl-5 mb-4 text-left text-gray-700">
                  <li>
                    <span className="font-semibold">Itens incluídos:</span>
                  </li>
                  {itemsCompleto?.map((item, index) => (
                    <li key={index} className="text-sm">{item}</li>
                  ))}

                </ul>
                <p className="text-gray-700 font-bold mb-6">
                  {preco} + Entrega
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#dd7630] text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
                >
                  Comprar
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
                >
                  X
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
