"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
              className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
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
                <h2 className="text-xl font-bold mb-4 text-amber-700">Cesta cafe da manha</h2>
                <p className="text-gray-700 mb-6">
                  Cesto em linhão
                  Flores naturais
                  1 bolo caseiro
                  1 suco natural
                  1 cappuccino artesanal
                  1 waffle
                  requeijao
                  2 Frutas
                  1 mini quiche queijo
                  mini pães
                  Croassant
                  Pretzel
                  Mini paes Doces
                  Suspiros

                  R$ 280 + Entrega
                </p>
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
