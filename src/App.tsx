/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, MessageCircle, Flame, Gift, AlertTriangle, Users, ArrowRight, ShoppingBag, HelpCircle, ShieldCheck, Clock } from 'lucide-react';

const COMMENTS = [
  { text: "Mano, o conteúdo de hoje tá surreal... 😈", name: "Fábio", avatar: "https://picsum.photos/seed/fabio/100/100" },
  { text: "Melhor investimento que fiz esse mês, sem dúvidas.", name: "João", avatar: "https://picsum.photos/seed/joao/100/100" },
  { text: "Alguém viu o vídeo novo? Quase caí da cadeira kkkk", name: "Ricardo", avatar: "https://picsum.photos/seed/ricardo/100/100" },
  { text: "O VIP é outro nível, o Insta não chega nem perto.", name: "André", avatar: "https://picsum.photos/seed/andre/100/100" },
  { text: "Vale cada centavo, as fotos são perfeitas.", name: "Bruno", avatar: "https://picsum.photos/seed/bruno/100/100" },
  { text: "Não acredito que demorei tanto pra entrar.", name: "Carlos", avatar: "https://picsum.photos/seed/carlos/100/100" },
  { text: "A exclusividade aqui é real, nada de censura.", name: "Daniel", avatar: "https://picsum.photos/seed/daniel/100/100" },
  { text: "Fiquei de queixo caído com a última atualização.", name: "Eduardo", avatar: "https://picsum.photos/seed/eduardo/100/100" },
  { text: "O suporte no privado é top, ela responde mesmo!", name: "Felipe", avatar: "https://picsum.photos/seed/felipe/100/100" },
  { text: "Gente, o que foi aquilo que ela postou agora pouco? 🔥", name: "Gabriel", avatar: "https://picsum.photos/seed/gabriel/100/100" },
  { text: "Tô viciado em olhar esse grupo todo dia.", name: "Henrique", avatar: "https://picsum.photos/seed/henrique/100/100" },
  { text: "Privacidade total e conteúdo de qualidade.", name: "Igor", avatar: "https://picsum.photos/seed/igor/100/100" },
  { text: "Já vi muita coisa por aí, mas esse VIP é diferenciado.", name: "Jorge", avatar: "https://picsum.photos/seed/jorge/100/100" },
  { text: "A curiosidade me matou e agora não quero mais sair.", name: "Leonardo", avatar: "https://picsum.photos/seed/leonardo/100/100" },
  { text: "Simplesmente impecável, recomendo pra todo mundo.", name: "Marcelo", avatar: "https://picsum.photos/seed/marcelo/100/100" },
  { text: "O vídeo de 10 minutos... sem palavras.", name: "Nelson", avatar: "https://picsum.photos/seed/nelson/100/100" },
  { text: "Melhor que qualquer outro site que já assinei.", name: "Otávio", avatar: "https://picsum.photos/seed/otavio/100/100" },
  { text: "Ela é muito atenciosa no chat, amei.", name: "Paulo", avatar: "https://picsum.photos/seed/paulo/100/100" },
  { text: "Conteúdo raiz, do jeito que a gente gosta.", name: "Rafael", avatar: "https://picsum.photos/seed/rafael/100/100" },
  { text: "Cada foto é um flash, literalmente kkkk", name: "Samuel", avatar: "https://picsum.photos/seed/samuel/100/100" },
  { text: "Não espalhem muito senão ela fecha o grupo!", name: "Tiago", avatar: "https://picsum.photos/seed/tiago/100/100" },
  { text: "O bônus de boas-vindas já valeu o preço.", name: "Victor", avatar: "https://picsum.photos/seed/victor/100/100" },
  { text: "Tô aqui há 3 meses e cada dia melhora.", name: "Wagner", avatar: "https://picsum.photos/seed/wagner/100/100" },
  { text: "Privado de verdade, nada de enrolação.", name: "Xavier", avatar: "https://picsum.photos/seed/xavier/100/100" },
  { text: "As prévias do Insta não mostram nem 1% do que tem aqui.", name: "Yuri", avatar: "https://picsum.photos/seed/yuri/100/100" },
  { text: "Minha namorada nem sonha que eu tô aqui kkkk", name: "Zeca", avatar: "https://picsum.photos/seed/zeca/100/100" },
  { text: "O conteúdo é tão bom que nem parece real.", name: "Adriano", avatar: "https://picsum.photos/seed/adriano/100/100" },
  { text: "A qualidade dos vídeos em 4K é absurda.", name: "Bernardo", avatar: "https://picsum.photos/seed/bernardo/100/100" },
  { text: "Sempre tem coisa nova, nunca fica parado.", name: "Caio", avatar: "https://picsum.photos/seed/caio/100/100" },
  { text: "Valeu a pena cada segundo de espera.", name: "Diogo", avatar: "https://picsum.photos/seed/diogo/100/100" },
  { text: "O grupo mais quente que já participei.", name: "Elias", avatar: "https://picsum.photos/seed/elias/100/100" },
  { text: "Ela se supera a cada postagem, incrível.", name: "Fernando", avatar: "https://picsum.photos/seed/fernando/100/100" },
  { text: "Se você tá na dúvida, só entra. Não vai se arrepender.", name: "Guilherme", avatar: "https://picsum.photos/seed/guilherme/100/100" },
  { text: "O acesso foi liberado na hora, muito rápido.", name: "Hugo", avatar: "https://picsum.photos/seed/hugo/100/100" },
  { text: "Tô recomendando pros parças tudo.", name: "Ítalo", avatar: "https://picsum.photos/seed/italo/100/100" },
  { text: "O que acontece no VIP, fica no VIP 🤫", name: "Jonas", avatar: "https://picsum.photos/seed/jonas/100/100" },
  { text: "A última foto me deixou sem dormir kkkk", name: "Kleber", avatar: "https://picsum.photos/seed/kleber/100/100" },
  { text: "Conteúdo autêntico e sem filtros, amei.", name: "Lucas", avatar: "https://picsum.photos/seed/lucas/100/100" },
  { text: "O preço tá muito baixo pra qualidade que entrega.", name: "Murilo", avatar: "https://picsum.photos/seed/murilo/100/100" },
  { text: "Já garanti meu acesso vitalício, não perco por nada.", name: "Nicolas", avatar: "https://picsum.photos/seed/nicolas/100/100" },
  { text: "Simplesmente a melhor do Brasil no momento.", name: "Orlando", avatar: "https://picsum.photos/seed/orlando/100/100" },
  { text: "Obrigado por esse conteúdo maravilhoso!", name: "Pedro", avatar: "https://picsum.photos/seed/pedro/100/100" },
  { text: "A cada atualização eu fico mais surpreso.", name: "Quim", avatar: "https://picsum.photos/seed/quim/100/100" },
  { text: "Não tem como não viciar nesse conteúdo.", name: "Rodrigo", avatar: "https://picsum.photos/seed/rodrigo/100/100" },
  { text: "O VIP é a minha parte favorita do dia.", name: "Sandro", avatar: "https://picsum.photos/seed/sandro/100/100" }
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
    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-500">
      <Icon size={16} className="sm:w-5 sm:h-5" />
    </div>
    <span className="text-base sm:text-lg font-medium">{text}</span>
  </div>
);

const LiveViewers = () => {
  const [count, setCount] = useState(1842);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const change = Math.floor(Math.random() * 21) - 10; // -10 to +10
        const next = prev + change;
        if (next < 1300) return 1300;
        if (next > 2500) return 2500;
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 text-zinc-400 font-bold text-[10px] sm:text-sm uppercase tracking-wider whitespace-nowrap">
      <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500"></span>
      </span>
      Mais de <span className="text-white tabular-nums">{count.toLocaleString()}</span> estão vendo isso agora
    </div>
  );
};

const ScrollingComments = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % COMMENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentComment = COMMENTS[index];

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 py-6 sm:py-8 mt-4">
      <div className="relative min-h-[160px] sm:h-32 flex items-center justify-center overflow-hidden bg-zinc-900/30 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center px-4 sm:px-8 py-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <img 
                src={currentComment.avatar} 
                alt={currentComment.name}
                className="w-10 h-10 rounded-full border border-emerald-500/30 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <p className="text-sm font-bold text-white leading-none">{currentComment.name}</p>
                <div className="flex gap-0.5 mt-1 text-emerald-500">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle2 key={i} size={10} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-zinc-200 font-medium italic text-sm sm:text-base leading-tight">
              "{currentComment.text}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const VoiceMessage = () => {
  return (
    <div className="mt-8 sm:mt-12 flex flex-col items-center px-4 w-full max-w-md mx-auto">
      {/* VIP Access Card Container */}
      <div className="w-full bg-zinc-950 p-8 rounded-[2.5rem] border-2 border-emerald-500/30 animate-pulse-glow shadow-2xl backdrop-blur-sm flex flex-col items-center gap-6">
        
        {/* Eye-catching Title */}
        <div className="text-center">
          <h3 className="text-emerald-400 font-bold text-lg sm:text-xl tracking-tight drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
            Você tem 1 nova mensagem de voz privada. 📩
          </h3>
          <p className="text-emerald-500/60 italic text-xs sm:text-sm mt-1">
            Clique no play para ouvir...
          </p>
        </div>

        {/* Native Audio Player with Filter */}
        <div className="w-full">
          <audio 
            controls 
            className="w-full invert opacity-80 hover:opacity-100 transition-opacity duration-300"
            src="https://dl.dropboxusercontent.com/scl/fi/951zp009qdqip2hdcna37/VID_20260326_145034_524.aac?rlkey=xvlthyxkufq3juiivm1z4on58&st=rkxdjh9p"
          >
            Seu navegador não suporta o elemento de áudio.
          </audio>
        </div>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-4 sm:py-8 group">
      <LiveViewers />
      
      <ScrollingComments />
      <VoiceMessage />
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
          className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto z-50 flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md shadow-2xl"
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
      <header className="relative pt-12 sm:pt-20 pb-8 sm:pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial from-emerald-500/10 to-transparent opacity-50 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tighter mb-4 sm:mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent px-2 sm:px-4">
              Você não deveria estar vendo isso… 😈
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
              Conteúdos exclusivos, sem censura, só pra quem entra no privado. Se você chegou até aqui… já sabe o que quer.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content Section */}
      <MainContent />

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 px-6 bg-zinc-950/50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-10 text-center uppercase tracking-widest text-zinc-500">
            Aqui dentro você vai encontrar:
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <Benefit icon={Flame} text="Conteúdos +18 exclusivos" />
            <Benefit icon={MessageCircle} text="Respostas diretas no privado" />
            <Benefit icon={CheckCircle2} text="Fotos e vídeos que não vão pro Insta" />
            <Benefit icon={Gift} text="Atualizações frequentes" />
          </div>

          <div className="mt-12 sm:mt-16 max-w-sm mx-auto">
            <video 
              src="https://www.dropbox.com/scl/fi/5vjwgusu97lasla6a08h3/VID_20260410_171644_355.mp4?rlkey=cgx65huimo7o6v5nn2f38kuex&st=luuv635j&raw=1"
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full rounded-3xl border border-zinc-800 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Urgency & Social Proof */}
      <section className="py-12 sm:py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 mb-6 sm:mb-8">
            <AlertTriangle size={14} className="sm:w-4 sm:h-4" />
            <span className="text-[10px] sm:text-sm font-bold uppercase tracking-tighter">Acesso liberado por tempo limitado</span>
          </div>
          
          <p className="text-zinc-400 italic mb-8 sm:mb-12 text-sm sm:text-base">
            Depois pode sair do ar sem aviso
          </p>

          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm shadow-lg">
            <div className="flex justify-center gap-1.5 mb-4 text-emerald-500">
              <Users size={20} className="sm:w-6 sm:h-6" />
              <span className="font-bold text-sm sm:text-base">+1.000 pessoas já entraram</span>
            </div>
            <blockquote className="text-lg sm:text-xl font-medium text-zinc-200 leading-snug">
              “Entrei achando que era mais do mesmo… mas é outro nível 🔥”
            </blockquote>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="pb-24 sm:pb-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-md mx-auto">
            <div className="mb-8">
              <span className="text-zinc-500 line-through text-lg sm:text-xl">De R$97,90</span>
              <div className="text-4xl sm:text-5xl font-black mt-2">
                <span className="text-zinc-400 text-xl sm:text-2xl font-medium align-top mr-1">por apenas:</span>
                <span className="text-emerald-500">R$ 19,99</span>
              </div>
            </div>

            <motion.a
              href="https://linkpriv.app/NjgyMDE="
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center w-full py-5 sm:py-6 px-6 sm:px-8 rounded-2xl bg-emerald-500 text-black font-black text-lg sm:text-xl tracking-tight overflow-hidden transition-all hover:bg-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                ENTRAR AGORA NO PRIVADO 😈
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
            
            <p className="mt-6 text-zinc-500 text-sm">
              Pagamento único. Acesso imediato.
            </p>

            {/* New Sections */}
            <div className="mt-16 space-y-12 text-left">
              {/* FAQ Section */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-emerald-500 mb-4">
                  <HelpCircle size={24} />
                  <h3 className="text-xl font-bold uppercase tracking-wider">Dúvidas Frequentes</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white mb-1">Como recebo o acesso?</p>
                    <p className="text-zinc-400 text-sm">O link de acesso é enviado instantaneamente para o seu e-mail após a confirmação do pagamento.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white mb-1">O conteúdo é atualizado?</p>
                    <p className="text-zinc-400 text-sm">Sim! Temos postagens novas e exclusivas toda semana para manter o VIP sempre quente.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white mb-1">A compra é discreta?</p>
                    <p className="text-zinc-400 text-sm">Totalmente. A cobrança no seu cartão aparecerá com um nome genérico, garantindo sua privacidade.</p>
                  </div>
                </div>
              </div>

              {/* Guarantee Section */}
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Garantia de Acesso</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Sua satisfação e segurança são nossa prioridade. Garantimos a entrega de todo o conteúdo prometido ou devolvemos seu investimento.
                  </p>
                </div>
              </div>

              {/* Updates Section */}
              <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0">
                  <Clock size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Atualizações Vitalícias</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Ao entrar hoje, você garante acesso a todas as fotos e vídeos futuros sem precisar pagar nada a mais por isso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 text-[10px] sm:text-xs uppercase tracking-widest px-6">
        &copy; {new Date().getFullYear()} Privado Exclusivo • Todos os direitos reservados
      </footer>
    </div>
  );
}
