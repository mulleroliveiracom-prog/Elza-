/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle, Flame, Gift, AlertTriangle, Users, ArrowRight, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/1.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/2.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/3.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/4.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/5.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/6.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/7.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/8.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/9.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/10.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/11.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/12.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/13.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/14.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/15.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/16.png",
  "https://storage.googleapis.com/mcp-archive/ais-dev-cgv2ugbwfqogg2nf7mty5z-12866266735.us-east5.run.app/17.png"
];

const MALE_NAMES = [
  "Fábio", "João", "Ricardo", "André", "Bruno", "Carlos", "Daniel", "Eduardo", "Felipe", "Gabriel",
  "Henrique", "Igor", "Jorge", "Leonardo", "Marcelo", "Nelson", "Otávio", "Paulo", "Rafael", "Samuel",
  "Tiago", "Victor", "Wagner", "Xavier", "Yuri", "Zeca", "Adriano", "Bernardo", "Caio", "Diogo",
  "Elias", "Fernando", "Guilherme", "Hugo", "Ítalo", "Jonas", "Kleber", "Lucas", "Murilo", "Nicolas",
  "Orlando", "Pedro", "Quim", "Rodrigo", "Sandro", "Tales", "Ulisses", "Vinícius", "Wilson", "Yan",
  "Alan", "Bento", "Cássio", "Davi", "Enzo", "Mateus", "Gustavo", "Renan", "Diego", "Arthur"
];

const Benefit = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-3 text-zinc-300">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
      <Icon size={20} />
    </div>
    <span className="text-lg font-medium">{text}</span>
  </div>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-12 group">
      <div className="relative aspect-[3/4] md:aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={IMAGES[currentIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-emerald-500 hover:text-black"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-emerald-500 hover:text-black"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-emerald-500" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const PurchaseNotification = () => {
  const [currentName, setCurrentName] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomName = MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)];
      setCurrentName(randomName);
      setIsVisible(true);

      // Hide after 3 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    };

    // Initial delay
    const initialTimeout = setTimeout(showNotification, 2000);
    
    // Interval every 5 seconds
    const interval = setInterval(showNotification, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-2xl"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <ShoppingBag size={20} />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-tight">
              {currentName} comprou agora 🔥
            </p>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              Acesso Liberado
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30">
      <PurchaseNotification />
      
      {/* Hero Section */}
      <header className="relative pt-20 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-emerald-500/10 to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              Você não deveria estar vendo isso… 😈
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Conteúdos exclusivos, sem censura, só pra quem entra no privado. Se você chegou até aqui… já sabe o que quer.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Carousel Section */}
      <Carousel />

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center uppercase tracking-widest text-zinc-500">
            Aqui dentro você vai encontrar:
          </h2>
          <div className="space-y-6">
            <Benefit icon={Flame} text="Conteúdos +18 exclusivos" />
            <Benefit icon={MessageCircle} text="Respostas diretas no privado" />
            <Benefit icon={CheckCircle2} text="Fotos e vídeos que não vão pro Insta" />
            <Benefit icon={Gift} text="Atualizações frequentes" />
          </div>
        </div>
      </section>

      {/* Urgency & Social Proof */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-8">
            <AlertTriangle size={16} />
            <span className="text-sm font-bold uppercase tracking-tighter">Acesso liberado por tempo limitado</span>
          </div>
          
          <p className="text-zinc-400 italic mb-12">
            Depois pode sair do ar sem aviso
          </p>

          <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
            <div className="flex justify-center gap-1 mb-4 text-emerald-500">
              <Users size={24} />
              <span className="font-bold">+1.000 pessoas já entraram</span>
            </div>
            <blockquote className="text-xl font-medium text-zinc-200">
              “Entrei achando que era mais do mesmo… mas é outro nível 🔥”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="pb-32 px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <span className="text-zinc-500 line-through text-xl">De R$97,90</span>
            <div className="text-5xl font-black mt-2">
              <span className="text-zinc-400 text-2xl font-medium align-top mr-1">por apenas:</span>
              <span className="text-emerald-500">R$27,90</span>
            </div>
          </div>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center w-full py-6 px-8 rounded-2xl bg-emerald-500 text-black font-black text-xl tracking-tight overflow-hidden transition-all hover:bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              ENTRAR AGORA NO PRIVADO 😈
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </motion.a>
          
          <p className="mt-6 text-zinc-500 text-sm">
            Pagamento único. Acesso imediato.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Privado Exclusivo • Todos os direitos reservados
      </footer>
    </div>
  );
}
