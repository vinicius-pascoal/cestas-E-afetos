"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import cafesolo from "../img/cestas/cafeManhaSolo.jpg";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir o modal */}
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
              className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()} // bloqueia clique dentro
            >
              <div className="text-center">
                <div className="flex items-center mb-4">
                  <Image
                    src={cafesolo}
                    alt="Cesta de Café da Manhã"
                    width={100}
                    height={100}
                    className=" mr-2 rounded-full border-amber-700 border-4 w-24 h-24"
                  />
                  <h2 className="text-xl font-bold mb-4 text-amber-700">Cesta cafe da manha</h2>
                </div>
                <div className="border-b-2 border-amber-700 mb-4"></div>
                <ul className="list-disc pl-5 mb-4 text-left text-gray-700">
                  <li>
                    <span className="font-semibold">Itens incluídos:</span>
                  </li>
                  <li>Cesto em linhão</li>
                  <li>Flores naturais</li>
                  <li>1 bolo caseiro</li>
                  <li>1 suco natural</li>
                  <li>1 cappuccino artesanal</li>
                  <li>1 waffle</li>
                  <li>Requeijão</li>
                  <li>2 Frutas</li>
                  <li>1 mini quiche queijo</li>
                  <li>Mini pães</li>
                  <li>Croissant</li>
                  <li>Pretzel</li>
                  <li>Mini pães doces</li>
                  <li>Suspiros</li>

                </ul>
                <p className="text-gray-700 mb-6">
                  R$ 280 + Entrega
                </p>
                <a
                  href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1,%20gostaria%20de%20comprar%20a%20Cesta%20de%20Caf%C3%A9%20da%20Manh%C3%A3!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#dd7630] text-white px-4 py-2 rounded hover:bg-amber-700 transition-colors"
                >
                  Comprar
                </a>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
