import React, { useState, useId } from 'react';
import {
  MessageCircle,
  Flame,
  CheckCircle2,
  Dumbbell,
  Target,
  Zap,
  MapPin,
  ShieldCheck,
  Users,
  Lock,
  Code2,
  Copy,
  Check,
  Download,
  Smartphone,
  Monitor,
  Settings2,
  Eye,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const feedBannerImg = '/banner-feed-projeto90.jpg';
const storiesBannerImg = '/banner-stories-projeto90.jpg';

export default function App() {
  // Configuração do WhatsApp (o usuário pode alterar e testar na hora)
  const [phoneNumber, setPhoneNumber] = useState('5511999999999');
  const [remainingSpots, setRemainingSpots] = useState(9);
  const [viewMode, setViewMode] = useState<'responsive' | 'mobile-preview'>('responsive');
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showCreativesModal, setShowCreativesModal] = useState(false);
  const [activeCreativeTab, setActiveCreativeTab] = useState<'feed' | 'stories' | 'copy'>('feed');
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [showConfigBar, setShowConfigBar] = useState(true);

  const phoneInputId = useId();

  // Mensagem pré-definida otimizada para alta conversão no WhatsApp
  const heroWhatsAppMessage = encodeURIComponent(
    'Olá! Vi o anúncio do Projeto 90 na Academia Inspire com 50% OFF e quero garantir minha vaga no acompanhamento presencial!'
  );
  const offerWhatsAppMessage = encodeURIComponent(
    'Olá! Quero aproveitar o desconto de 50% e garantir uma das 9 vagas no Projeto 90 presencial na Inspire!'
  );
  const floatingWhatsAppMessage = encodeURIComponent(
    'Olá! Tenho interesse no Projeto 90 com 50% OFF na Academia Inspire. Como faço para garantir minha vaga?'
  );

  const heroWhatsAppUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${heroWhatsAppMessage}`;
  const offerWhatsAppUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${offerWhatsAppMessage}`;
  const floatingWhatsAppUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${floatingWhatsAppMessage}`;

  // Código HTML standalone gerado dinamicamente com o número informado
  const standaloneHTML = `<!DOCTYPE html>
<html lang="pt-BR" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projeto 90 | Academia Inspire - 50% OFF Presencial</title>
  <meta name="description" content="90 dias para transformar seu corpo e construir uma rotina duradoura. Acompanhamento 100% presencial na Academia Inspire. Apenas ${remainingSpots} vagas com 50% OFF.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            athletic: ['"Barlow Condensed"', 'sans-serif']
          },
          keyframes: {
            pulseGlow: {
              '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(250, 204, 21, 0.4)' },
              '50%': { transform: 'scale(1.02)', boxShadow: '0 0 25px 6px rgba(250, 204, 21, 0.55)' }
            },
            badgeBlink: {
              '0%, 100%': { opacity: '1' },
              '50%': { opacity: '0.4' }
            }
          },
          animation: {
            'pulse-cta': 'pulseGlow 2.2s infinite ease-in-out',
            'urgent-badge': 'badgeBlink 1.4s infinite'
          }
        }
      }
    }
  </script>

  <!-- Google Fonts: Plus Jakarta Sans + Barlow Condensed -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,700;0,800;0,900;1,700;1,800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    .font-athletic { font-family: 'Barlow Condensed', sans-serif; letter-spacing: 0.03em; }
  </style>
</head>

<body class="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-[#FACC15] selection:text-black">

  <!-- 1. HEADER / BARRA DE TOPO (ALERTA EM VERMELHO) -->
  <header class="sticky top-0 z-50 bg-[#dc2626] border-b border-red-500/40 text-white py-2.5 px-4 shadow-lg shadow-red-950/40">
    <div class="max-w-5xl mx-auto flex items-center justify-center text-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wide font-athletic">
      <span class="inline-block w-2.5 h-2.5 rounded-full bg-white animate-urgent-badge"></span>
      <span class="text-white drop-shadow">🔴 RESTAM APENAS ${remainingSpots} VAGAS COM 50% OFF | CONDIÇÃO DE FIM DE ANO</span>
    </div>
  </header>

  <!-- 2. SEÇÃO HERO (DOBRA PRINCIPAL) -->
  <section class="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-yellow-500/10 via-red-500/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
    
    <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
      
      <!-- Tag/Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-yellow-500/30 text-yellow-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-inner">
        <i data-lucide="flame" class="w-4 h-4 text-red-500"></i>
        <span>PROJETO 90 | 3 MESES DE ACOMPANHAMENTO PRESENCIAL</span>
      </div>

      <!-- Headline Impactante -->
      <h1 class="font-athletic text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4">
        VOCÊ NÃO PRECISA <br>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 underline decoration-red-600 decoration-4 sm:decoration-8 underline-offset-4">
          TREINAR SOZINHO.
        </span>
      </h1>

      <!-- Box de Promessa Central & Slogan -->
      <div class="max-w-2xl mx-auto my-4 p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-yellow-500/40 shadow-lg shadow-yellow-500/5">
        <p class="font-athletic text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide text-yellow-400 leading-tight">
          "90 DIAS PARA TRANSFORMAR SEU CORPO E CONSTRUIR UMA ROTINA QUE VOCÊ CONSIGA MANTER."
        </p>
        <p class="text-xs sm:text-sm text-zinc-300 mt-2 font-medium">
          Acompanhamento 100% presencial de um Personal Trainer ao seu lado na <strong class="text-white">Academia Inspire</strong>.
        </p>
      </div>

      <!-- BOTÃO DE AÇÃO HERO (CTA AMARELO EM DESTAQUE) -->
      <!-- ========================================================================= -->
      <!-- LINK DO WHATSAPP ABAIXO: EDITE O NÚMERO (Ex: https://wa.me/5511999999999) -->
      <!-- ========================================================================= -->
      <a 
        id="hero-cta-btn"
        href="${heroWhatsAppUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-base sm:text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-yellow-500/25 transform transition hover:-translate-y-0.5 active:translate-y-0 animate-pulse-cta"
      >
        <i data-lucide="message-circle" class="w-6 h-6 fill-black text-black"></i>
        <span>QUERO GARANTIR MINHA VAGA NO WHATSAPP</span>
      </a>

      <!-- Prova social e diferenciais -->
      <div class="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
        <span class="flex items-center gap-1.5"><i data-lucide="map-pin" class="w-4 h-4 text-red-500"></i> Treino 100% presencial na Inspire</span>
        <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="w-4 h-4 text-yellow-400"></i> 50% de Desconto Garantido</span>
        <span class="flex items-center gap-1.5"><i data-lucide="users" class="w-4 h-4 text-emerald-400"></i> Apenas ${remainingSpots} vagas disponíveis</span>
      </div>

    </div>
  </section>

  <!-- 3. SEÇÃO "COMO FUNCIONA O PROJETO 90" (3 PILARES RÁPIDOS) -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-[#121215] border-y border-zinc-800/80">
    <div class="max-w-5xl mx-auto">
      
      <div class="text-center mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-red-500 font-athletic text-base">MÉTODO COMPROVADO</span>
        <h2 class="font-athletic text-3xl sm:text-5xl font-black uppercase text-white mt-1">
          COMO FUNCIONA O <span class="text-yellow-400">PROJETO 90</span>
        </h2>
        <p class="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mt-2">
          3 meses de treinamento focado em resultados físicos rápidos + desenvolvimento de hábitos para manter os resultados no longo prazo.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Pilar 1 -->
        <div class="bg-[#18181b] border border-zinc-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-5 text-yellow-400">
              <i data-lucide="dumbbell" class="w-6 h-6"></i>
            </div>
            <div class="text-xs font-extrabold uppercase tracking-wider text-yellow-400 mb-1 font-athletic text-sm">PILAR 01</div>
            <h3 class="text-xl font-extrabold text-white mb-3">Treino Presencial Individualizado</h3>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Ajustes de execução, segurança e evolução constante na Academia Inspire. Sem risco de lesão e com a carga exata para o seu corpo responder.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-zinc-400">
            <i data-lucide="check" class="w-4 h-4 text-yellow-400"></i> Evolução física contínua
          </div>
        </div>

        <!-- Pilar 2 -->
        <div class="bg-[#18181b] border border-zinc-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-5 text-red-500">
              <i data-lucide="target" class="w-6 h-6"></i>
            </div>
            <div class="text-xs font-extrabold uppercase tracking-wider text-red-400 mb-1 font-athletic text-sm">PILAR 02</div>
            <h3 class="text-xl font-extrabold text-white mb-3">Mudança de Hábitos</h3>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Método focado em construir uma rotina sustentável sem efeito sanfona. Você aprende a gostar do processo e manter os resultados para sempre.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-zinc-400">
            <i data-lucide="check" class="w-4 h-4 text-red-400"></i> Resultados duradouros
          </div>
        </div>

        <!-- Pilar 3 -->
        <div class="bg-[#18181b] border border-zinc-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-5 text-yellow-400">
              <i data-lucide="zap" class="w-6 h-6"></i>
            </div>
            <div class="text-xs font-extrabold uppercase tracking-wider text-yellow-400 mb-1 font-athletic text-sm">PILAR 03</div>
            <h3 class="text-xl font-extrabold text-white mb-3">Acompanhamento de Perto</h3>
            <p class="text-sm text-zinc-300 leading-relaxed">
              Motivação diária e alinhamento de metas por 90 dias. Eu estou ao seu lado para não deixar você desistir ou faltar aos treinos.
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-zinc-400">
            <i data-lucide="check" class="w-4 h-4 text-yellow-400"></i> Suporte pessoal e contínuo
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 4. SEÇÃO "PARA QUEM É O PROJETO 90" (CHECKLIST QUALIFICADOR) -->
  <section class="py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      
      <div class="text-center mb-10">
        <span class="text-xs font-bold uppercase tracking-widest text-yellow-400 font-athletic text-base">SELEÇÃO DE ALUNOS</span>
        <h2 class="font-athletic text-3xl sm:text-5xl font-black uppercase text-white mt-1">
          PARA QUEM É O <span class="text-yellow-400">PROJETO 90</span>
        </h2>
        <p class="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mt-2">
          Este programa presencial na Academia Inspire é exatamente para você se:
        </p>
      </div>

      <div class="space-y-4">
        <div class="flex items-start gap-4 p-5 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/40 transition">
          <div class="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
            <i data-lucide="check" class="w-5 h-5 stroke-[3]"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white">Para quem quer resultados rápidos mas permanentes</h3>
            <p class="text-sm text-zinc-400 mt-1">
              Treinos intensos, seguros e direcionados para gerar queima calórica e hipertrofia desde as primeiras semanas, mantendo o corpo ativo e saudável.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-5 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/40 transition">
          <div class="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
            <i data-lucide="check" class="w-5 h-5 stroke-[3]"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white">Para quem se sente perdido na academia sem saber o que fazer</h3>
            <p class="text-sm text-zinc-400 mt-1">
              Nunca mais fique olhando para aparelhos ou esperando um instrutor desatento. Cada minuto do seu treino na Academia Inspire será planejado e monitorado.
            </p>
          </div>
        </div>

        <div class="flex items-start gap-4 p-5 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/40 transition">
          <div class="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
            <i data-lucide="check" class="w-5 h-5 stroke-[3]"></i>
          </div>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white">Para quem já tentou várias vezes e desistiu por falta de acompanhamento</h3>
            <p class="text-sm text-zinc-400 mt-1">
              O compromisso presencial cria a consistência que faltava para você não faltar, mantendo sua motivação em alta até os 90 dias.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 5. SEÇÃO OFERTA + ESCASSEZ (FECHAMENTO) -->
  <section class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121215] to-[#09090b]">
    <div class="max-w-2xl mx-auto">
      
      <div class="relative bg-gradient-to-b from-[#202025] to-[#141417] border-2 border-yellow-400 rounded-3xl p-6 sm:p-10 text-center shadow-2xl shadow-yellow-500/10 overflow-hidden">
        
        <div class="absolute -top-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase tracking-wider py-1 px-6 rounded-b-xl shadow-md font-athletic">
          🚨 CONDIÇÃO DE FIM DE ANO • APENAS ${remainingSpots} VAGAS
        </div>

        <div class="mt-4 mb-3">
          <span class="inline-block px-3 py-1 bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase rounded-full tracking-wider">
            OFERTA IRRESISTÍVEL
          </span>
        </div>

        <h2 class="font-athletic text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-4">
          50% DE DESCONTO
        </h2>
        
        <p class="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto mb-6 leading-relaxed">
          No programa completo de <strong class="text-yellow-400 font-bold">90 dias para transformar seu corpo e construir uma rotina que você consiga manter</strong>, com acompanhamento 100% presencial na Academia Inspire.
        </p>

        <!-- Contador e Aviso de Escassez -->
        <div class="bg-black/60 border border-red-500/50 rounded-2xl p-4 mb-8 text-left sm:text-center">
          <div class="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
            <span class="text-red-400 flex items-center gap-1.5 font-athletic tracking-wide uppercase">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-urgent-badge"></span>
              Aviso de Vagas
            </span>
            <span class="text-yellow-400 font-extrabold font-athletic text-base">Restam apenas ${remainingSpots} vagas</span>
          </div>

          <div class="w-full bg-zinc-800 rounded-full h-3 overflow-hidden p-0.5 border border-zinc-700">
            <div class="bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 h-full rounded-full w-[80%]"></div>
          </div>

          <p class="text-xs text-zinc-400 mt-2.5 leading-tight">
            ⚠️ <strong class="text-zinc-200">Apenas ${remainingSpots} vagas disponíveis</strong> para garantir a máxima qualidade de atendimento presencial.
          </p>
        </div>

        <!-- BOTÃO CTA PRINCIPAL GIGANTE -->
        <!-- ========================================================================= -->
        <!-- LINK DO WHATSAPP ABAIXO: EDITE O NÚMERO (Ex: https://wa.me/5511999999999) -->
        <!-- ========================================================================= -->
        <a 
          id="main-offer-cta-btn"
          href="${offerWhatsAppUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-5 bg-[#FACC15] hover:bg-[#EAB308] active:bg-yellow-500 text-black font-black text-lg sm:text-xl uppercase tracking-wider rounded-2xl shadow-2xl shadow-yellow-500/30 transform transition hover:scale-[1.02] active:scale-[0.99] animate-pulse-cta"
        >
          <i data-lucide="message-circle" class="w-7 h-7 fill-black text-black shrink-0"></i>
          <span>GARANTIR MINHA VAGA COM 50% OFF AGORA</span>
        </a>

        <div class="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <i data-lucide="lock" class="w-3.5 h-3.5 text-zinc-500"></i>
          <span>Atendimento direto no WhatsApp oficial. Resposta rápida.</span>
        </div>

      </div>

    </div>
  </section>

  <!-- 6. FOOTER / RODAPÉ -->
  <footer class="py-10 px-4 border-t border-zinc-800/80 bg-[#09090b] text-center text-zinc-500 text-xs sm:text-sm">
    <div class="max-w-4xl mx-auto flex flex-col items-center gap-3">
      <div class="flex items-center gap-2 text-white font-extrabold font-athletic text-xl tracking-wider uppercase">
        <i data-lucide="flame" class="w-5 h-5 text-yellow-400"></i>
        <span>ACADEMIA INSPIRE • PROJETO 90</span>
      </div>
      <p class="text-zinc-400 text-xs max-w-md">
        Acompanhamento 100% presencial com Personal Trainer na Academia Inspire.
      </p>
      <p class="text-zinc-600 text-[11px] mt-2">
        &copy; 2026 Academia Inspire. Todos os direitos reservados.
      </p>
    </div>
  </footer>

  <!-- BOTÃO FLUTUANTE MOBILE -->
  <div class="fixed bottom-0 left-0 right-0 p-3 bg-black/85 backdrop-blur-md border-t border-yellow-500/30 sm:hidden z-40">
    <a 
      id="floating-mobile-cta"
      href="${floatingWhatsAppUrl}"
      target="_blank"
      rel="noopener noreferrer"
      class="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-yellow-400 active:bg-yellow-500 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-yellow-500/30"
    >
      <i data-lucide="message-circle" class="w-5 h-5 fill-black"></i>
      <span>GARANTIR VAGA COM 50% OFF (WHATSAPP)</span>
    </a>
  </div>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(standaloneHTML);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleDownloadHTML = () => {
    const blob = new Blob([standaloneHTML], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'projeto-90-landing-page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-yellow-400 selection:text-black">
      
      {/* BARRA DE FERRAMENTAS DO DESENVOLVEDOR / USUÁRIO (Pode ser minimizada com 1 clique) */}
      <div className="bg-[#18181b] border-b border-zinc-800 text-xs text-zinc-300 py-2 px-3 sm:px-6 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="font-bold text-white uppercase tracking-wider">Painel do Copywriter & Dev</span>
            <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-zinc-800 text-[11px] text-zinc-400 border border-zinc-700">
              Personalize seu WhatsApp abaixo
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-2">
            {/* Input para testar o WhatsApp na hora */}
            <div className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-lg border border-zinc-700">
              <label htmlFor={phoneInputId} className="text-zinc-400 text-[11px] font-medium">WhatsApp:</label>
              <input
                id={phoneInputId}
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="5511999999999"
                className="bg-transparent text-yellow-400 font-mono text-xs w-32 focus:outline-none"
                title="Insira o código do país (55) + DDD + número"
              />
            </div>

            {/* Alternador de visualização Desktop vs Mobile */}
            <div className="hidden md:flex items-center bg-black/60 rounded-lg p-0.5 border border-zinc-700">
              <button
                id="view-mode-responsive-btn"
                onClick={() => setViewMode('responsive')}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition ${
                  viewMode === 'responsive' ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                Desktop
              </button>
              <button
                id="view-mode-mobile-btn"
                onClick={() => setViewMode('mobile-preview')}
                className={`flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium transition ${
                  viewMode === 'mobile-preview' ? 'bg-yellow-400 text-black font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                Mobile View
              </button>
            </div>

            {/* Botão de Criativos para Instagram */}
            <button
              id="open-creatives-modal-btn"
              onClick={() => setShowCreativesModal(true)}
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold rounded-lg text-xs transition shadow-sm"
              title="Ver e baixar banners para Feed e Stories do Instagram"
            >
              <ImageIcon className="w-3.5 h-3.5 text-yellow-300" />
              <span>Banners Instagram</span>
            </button>

            {/* Botão para Baixar e Copiar HTML Puro */}
            <button
              id="open-code-modal-btn"
              onClick={() => setShowCodeModal(true)}
              className="flex items-center gap-1.5 px-3 py-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-lg text-xs transition"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Ver/Copiar HTML Puro</span>
            </button>

            <button
              id="download-html-direct-btn"
              onClick={handleDownloadHTML}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg text-xs border border-zinc-700 transition"
              title="Baixar arquivo HTML puro pronto para hospedagem"
            >
              <Download className="w-3.5 h-3.5 text-yellow-400" />
              <span>Baixar .html</span>
            </button>
          </div>

        </div>
      </div>

      {/* CONTAINER PRINCIPAL DA LANDING PAGE (Com suporte a emulação de mobile) */}
      <main className={`flex-1 transition-all ${
        viewMode === 'mobile-preview' 
          ? 'py-8 px-4 flex justify-center bg-zinc-950/80 min-h-screen' 
          : 'w-full'
      }`}>
        <div className={`${
          viewMode === 'mobile-preview' 
            ? 'w-full max-w-[420px] bg-[#09090b] border-4 border-zinc-700 rounded-[38px] shadow-2xl overflow-hidden relative' 
            : 'w-full'
        }`}>

          {/* ========================================================================= */}
          {/* 1. HEADER / BARRA DE TOPO (BANNER DE ALERTA EM VERMELHO) */}
          {/* ========================================================================= */}
          <header 
            id="top-alert-banner"
            className="sticky top-0 z-40 bg-[#dc2626] border-b border-red-500/40 text-white py-2.5 px-3 sm:px-4 shadow-lg shadow-red-950/40"
          >
            <div className="max-w-5xl mx-auto flex items-center justify-center text-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wide font-athletic">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              <span className="text-white drop-shadow">
                🔴 RESTAM APENAS {remainingSpots} VAGAS COM 50% OFF | CONDIÇÃO DE FIM DE ANO
              </span>
            </div>
          </header>

          {/* ========================================================================= */}
          {/* 2. SEÇÃO HERO (DOBRA PRINCIPAL) */}
          {/* ========================================================================= */}
          <section id="hero-section" className="relative pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Brilho de fundo esportivo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-yellow-500/10 via-red-500/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
            
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              
              {/* Tag / Badge */}
              <div 
                id="hero-badge"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-yellow-500/30 text-yellow-400 text-xs sm:text-sm font-bold tracking-wider uppercase mb-6 shadow-inner"
              >
                <Flame className="w-4 h-4 text-red-500 shrink-0" />
                <span>PROJETO 90 | 3 MESES DE ACOMPANHAMENTO PRESENCIAL</span>
              </div>

              {/* Headline Impactante */}
              <h1 
                id="hero-headline"
                className="font-athletic text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] mb-4"
              >
                VOCÊ NÃO PRECISA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 underline decoration-red-600 decoration-4 sm:decoration-8 underline-offset-4">
                  TREINAR SOZINHO.
                </span>
              </h1>

              {/* Box de Promessa Central & Slogan em Destaque */}
              <div 
                id="hero-promise-box"
                className="max-w-2xl mx-auto my-5 p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-yellow-500/40 shadow-lg shadow-yellow-500/5 backdrop-blur-sm"
              >
                <p className="font-athletic text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wide text-yellow-400 leading-tight">
                  &ldquo;90 DIAS PARA TRANSFORMAR O SEU CORPO E CONSTRUIR UMA ROTINA QUE VOCÊ CONSIGA MANTER.&rdquo;
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 font-medium">
                  Acompanhamento 100% presencial com Personal Trainer na <strong className="text-white font-bold">Academia Inspire</strong>.
                </p>
              </div>

              {/* Botão de Ação (CTA Amarelo em Destaque) */}
              {/* Comentário: Link direto para WhatsApp com mensagem pré-definida */}
              <div className="w-full sm:w-auto flex flex-col items-center">
                <a
                  id="hero-whatsapp-cta-btn"
                  href={heroWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black font-extrabold text-base sm:text-lg uppercase tracking-wider rounded-xl shadow-xl shadow-yellow-500/25 transform transition hover:-translate-y-0.5 active:translate-y-0 animate-pulse-subtle"
                >
                  <MessageCircle className="w-6 h-6 fill-black text-black shrink-0" />
                  <span>QUERO GARANTIR MINHA VAGA NO WHATSAPP</span>
                </a>

                {/* Sub-garantia sob o botão */}
                <span className="mt-2.5 text-[11px] sm:text-xs text-zinc-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-yellow-400" />
                  Resposta direta do Personal • Sem compromisso
                </span>
              </div>

              {/* Prova e Selos de Confiança */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-500" />
                  100% Presencial na Academia Inspire
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-yellow-400" />
                  Garantia de 50% de Desconto
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  Apenas 9 vagas
                </span>
              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* 3. SEÇÃO "COMO FUNCIONA O PROJETO 90" (3 PILARES RÁPIDOS) */}
          {/* ========================================================================= */}
          <section id="how-it-works-section" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#121215] border-y border-zinc-800/80">
            <div className="max-w-5xl mx-auto">
              
              <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-athletic text-base">
                  MÉTODO COMPROVADO
                </span>
                <h2 className="font-athletic text-3xl sm:text-5xl font-black uppercase text-white mt-1">
                  COMO FUNCIONA O <span className="text-yellow-400">PROJETO 90</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mt-2">
                  3 meses de treinamento focado em resultados físicos rápidos + desenvolvimento de hábitos para manter os resultados no longo prazo.
                </p>
              </div>

              {/* Grid de 3 Cards de Pilares */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pilar 1 */}
                <div 
                  id="pilar-1-card"
                  className="bg-[#18181b] border border-zinc-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-5 text-yellow-400 group-hover:scale-105 transition-transform">
                      <Dumbbell className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-yellow-400 mb-1 font-athletic text-sm">
                      PILAR 01
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-3">
                      Treino Presencial Individualizado
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Ajustes de execução, segurança e evolução constante na <strong className="text-white font-semibold">Academia Inspire</strong>. Cada série monitorada para você extrair o máximo resultado sem risco de lesão.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Evolução progressiva toda semana</span>
                  </div>
                </div>

                {/* Pilar 2 */}
                <div 
                  id="pilar-2-card"
                  className="bg-[#18181b] border border-zinc-800 hover:border-red-500/50 rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-5 text-red-500 group-hover:scale-105 transition-transform">
                      <Target className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-red-400 mb-1 font-athletic text-sm">
                      PILAR 02
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-3">
                      Mudança de Hábitos
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Método focado em construir uma rotina sustentável sem efeito sanfona. Você aprende a encaixar o exercício e a alimentação saudável na sua rotina real, de forma natural e definitiva.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Resultados mantidos no longo prazo</span>
                  </div>
                </div>

                {/* Pilar 3 */}
                <div 
                  id="pilar-3-card"
                  className="bg-[#18181b] border border-zinc-800 hover:border-yellow-500/50 rounded-2xl p-6 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-5 text-yellow-400 group-hover:scale-105 transition-transform">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-extrabold uppercase tracking-wider text-yellow-400 mb-1 font-athletic text-sm">
                      PILAR 03
                    </div>
                    <h3 className="text-xl font-extrabold text-white mb-3">
                      Acompanhamento de Perto
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      Motivação diária e alinhamento de metas por 90 dias. Tenha alguém cobrando sua presença, comemorando cada conquista e recalculando rotas sempre que necessário.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs font-bold text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>Apoio total para nunca desistir</span>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* 4. SEÇÃO "PARA QUEM É O PROJETO 90" (CHECKLIST COM ÍCONES) */}
          {/* ========================================================================= */}
          <section id="for-whom-section" className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-yellow-400 font-athletic text-base">
                  FILTRO DE PERFIL
                </span>
                <h2 className="font-athletic text-3xl sm:text-5xl font-black uppercase text-white mt-1">
                  PARA QUEM É O <span className="text-yellow-400">PROJETO 90</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 max-w-lg mx-auto mt-2">
                  Se você se identifica com pelo menos uma das situações abaixo, este programa foi feito sob medida para você:
                </p>
              </div>

              {/* Checklist com ícones (Check verde/amarelo) */}
              <div className="space-y-4">
                
                <div 
                  id="checklist-item-1"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/40 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Para quem quer resultados rápidos mas permanentes
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      Você quer ver mudanças no espelho nas próximas semanas, mas está cansado de fórmulas milagrosas que fazem você recuperar tudo depois. O foco aqui é consistência real.
                    </p>
                  </div>
                </div>

                <div 
                  id="checklist-item-2"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/40 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Para quem se sente perdido na academia sem saber o que fazer
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      Chega de entrar na academia sem saber por onde começar ou fazer séries aleatórias sem critério. Você terá hora marcada e a orientação presencial de um profissional na Academia Inspire.
                    </p>
                  </div>
                </div>

                <div 
                  id="checklist-item-3"
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/40 transition"
                >
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Para quem já tentou várias vezes e desistiu por falta de acompanhamento
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                      A motivação inicial acaba em 15 dias. O que faz a diferença é o compromisso firmado com alguém que está lá te esperando. Nós vamos garantir que você vá até o final dos 90 dias.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* 5. SEÇÃO OFERTA + ESCASSEZ (FECHAMENTO) */}
          {/* ========================================================================= */}
          <section id="offer-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121215] to-[#09090b]">
            <div className="max-w-2xl mx-auto">
              
              {/* Card com Destaque Máximo */}
              <div 
                id="main-offer-card"
                className="relative bg-gradient-to-b from-[#202025] to-[#141417] border-2 border-yellow-400 rounded-3xl p-6 sm:p-10 text-center shadow-2xl shadow-yellow-500/10 overflow-hidden"
              >
                
                {/* Faixa superior de urgência */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-black uppercase tracking-wider py-1 px-6 rounded-b-xl shadow-md font-athletic">
                  🚨 CONDIÇÃO DE FIM DE ANO • APENAS {remainingSpots} VAGAS
                </div>

                <div className="mt-4 mb-3">
                  <span className="inline-block px-3 py-1 bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 text-xs font-bold uppercase rounded-full tracking-wider">
                    OFERTA IRRESISTÍVEL
                  </span>
                </div>

                <h2 className="font-athletic text-4xl sm:text-6xl font-black uppercase text-white tracking-tight leading-none mb-3">
                  50% DE DESCONTO
                </h2>
                
                <p className="text-sm sm:text-base text-zinc-300 max-w-lg mx-auto mb-6 leading-relaxed">
                  No programa completo de <strong className="text-yellow-400 font-bold">90 dias para transformar seu corpo e construir uma rotina duradoura</strong>, com acompanhamento 100% presencial na Academia Inspire.
                </p>

                {/* Contador / Aviso de Escassez */}
                <div 
                  id="scarcity-box"
                  className="bg-black/60 border border-red-500/50 rounded-2xl p-4 mb-8 text-left sm:text-center"
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
                    <span className="text-red-400 flex items-center gap-1.5 font-athletic tracking-wide uppercase">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      Alerta de Vagas
                    </span>
                    <span className="text-yellow-400 font-extrabold font-athletic text-base">
                      Restam apenas {remainingSpots} vagas
                    </span>
                  </div>

                  {/* Barra de progresso */}
                  <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden p-0.5 border border-zinc-700">
                    <div 
                      className="bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 h-full rounded-full transition-all duration-700"
                      style={{ width: '82%' }}
                    ></div>
                  </div>

                  <p className="text-xs text-zinc-400 mt-2.5 leading-tight">
                    ⚠️ <strong className="text-zinc-200">Apenas {remainingSpots} vagas disponíveis</strong> com essa condição especial para garantir a máxima qualidade e atenção em cada atendimento presencial.
                  </p>
                </div>

                {/* Botão CTA Principal Gigante com Animação de Pulso */}
                {/* Comentário: Link direto para WhatsApp com mensagem pré-definida */}
                <a
                  id="main-offer-whatsapp-cta-btn"
                  href={offerWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 sm:px-10 py-5 bg-[#FACC15] hover:bg-[#EAB308] active:bg-yellow-500 text-black font-black text-lg sm:text-xl uppercase tracking-wider rounded-2xl shadow-2xl shadow-yellow-500/30 transform transition hover:scale-[1.02] active:scale-[0.99] animate-pulse-subtle"
                >
                  <MessageCircle className="w-7 h-7 fill-black text-black shrink-0" />
                  <span>GARANTIR MINHA VAGA COM 50% OFF AGORA</span>
                </a>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-400">
                  <Lock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Atendimento direto pelo WhatsApp oficial. Sem intermediários.</span>
                </div>

              </div>

            </div>
          </section>

          {/* ========================================================================= */}
          {/* 6. FOOTER / RODAPÉ */}
          {/* ========================================================================= */}
          <footer id="footer-section" className="py-10 px-4 border-t border-zinc-800/80 bg-[#09090b] text-center text-zinc-500 text-xs sm:text-sm">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
              
              <div className="flex items-center gap-2 text-white font-extrabold font-athletic text-xl tracking-wider uppercase">
                <Flame className="w-5 h-5 text-yellow-400" />
                <span>ACADEMIA INSPIRE • PROJETO 90</span>
              </div>

              <p className="text-zinc-400 text-xs max-w-md">
                Treinamento presencial de alta performance na Academia Inspire. Transforme seu corpo e sua rotina com metodologia comprovada.
              </p>

              <div className="flex items-center justify-center gap-4 text-xs text-zinc-500 mt-2">
                <span>📍 Academia Inspire</span>
                <span>•</span>
                <span>Acompanhamento 100% Presencial</span>
              </div>

              <p className="text-zinc-600 text-[11px] mt-2">
                &copy; {new Date().getFullYear()} Academia Inspire. Todos os direitos reservados.
              </p>
            </div>
          </footer>

          {/* BOTÃO FLUTUANTE NO MOBILE (Fixado no rodapé para smartphones) */}
          <div className="fixed bottom-0 left-0 right-0 p-3 bg-black/90 backdrop-blur-md border-t border-yellow-500/30 sm:hidden z-40">
            <a
              id="mobile-sticky-whatsapp-btn"
              href={floatingWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-yellow-400 active:bg-yellow-500 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-yellow-500/30"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>GARANTIR VAGA COM 50% OFF (WHATSAPP)</span>
            </a>
          </div>

        </div>
      </main>

      {/* MODAL PARA COPIAR O CÓDIGO HTML PURO SINGLE-FILE */}
      <AnimatePresence>
        {showCodeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#18181b] border border-zinc-700 rounded-2xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/70">
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-5 h-5 text-yellow-400" />
                  <div>
                    <h3 className="font-bold text-white text-base">Código HTML5 Puro (Single-File)</h3>
                    <p className="text-xs text-zinc-400">Tailwind CSS CDN + Lucide Icons + Comentários do WhatsApp</p>
                  </div>
                </div>
                <button
                  id="close-code-modal-btn"
                  onClick={() => setShowCodeModal(false)}
                  className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800 text-sm font-bold"
                >
                  ✕ Fechar
                </button>
              </div>

              <div className="p-4 bg-[#121215] flex-1 overflow-auto font-mono text-xs text-zinc-300">
                <div className="mb-3 p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-yellow-300 text-xs flex items-center justify-between">
                  <span>
                    💡 Número atual inserido nos links: <strong>{phoneNumber}</strong>. Você pode copiar o código abaixo ou baixar o arquivo pronto.
                  </span>
                </div>
                <pre className="p-3 bg-black/60 rounded-lg border border-zinc-800 overflow-x-auto selection:bg-yellow-400 selection:text-black">
                  <code>{standaloneHTML}</code>
                </pre>
              </div>

              <div className="p-4 border-t border-zinc-800 bg-zinc-900/90 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-zinc-400">
                  Total de linhas: {standaloneHTML.split('\n').length} linhas limpas
                </span>
                <div className="flex items-center gap-2">
                  <button
                    id="modal-download-btn"
                    onClick={handleDownloadHTML}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs border border-zinc-700 transition"
                  >
                    <Download className="w-4 h-4 text-yellow-400" />
                    Baixar index.html
                  </button>
                  <button
                    id="modal-copy-btn"
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-xs transition shadow-lg shadow-yellow-500/20"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copiado para a Área de Transferência!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar Código Completo
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL DE CRIATIVOS PARA INSTAGRAM (BANNERS FEED & STORIES + COPY) */}
      <AnimatePresence>
        {showCreativesModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#18181b] border border-zinc-700 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Header do Modal */}
              <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-500 to-amber-400 flex items-center justify-center text-black font-black">
                    <ImageIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-athletic text-xl font-black uppercase text-white tracking-wide">
                      Criativos Prontos para Instagram (Projeto 90)
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Banners em alta resolução para Feed (1:1), Stories (9:16) e legendas de alta conversão
                    </p>
                  </div>
                </div>
                <button
                  id="close-creatives-modal-btn"
                  onClick={() => setShowCreativesModal(false)}
                  className="text-zinc-400 hover:text-white p-1.5 rounded-xl hover:bg-zinc-800 text-sm font-bold transition"
                >
                  ✕ Fechar
                </button>
              </div>

              {/* Seletor de Abas do Modal */}
              <div className="px-5 pt-3 border-b border-zinc-800 bg-[#141417] flex items-center gap-2 overflow-x-auto">
                <button
                  onClick={() => setActiveCreativeTab('feed')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition border-b-2 ${
                    activeCreativeTab === 'feed'
                      ? 'border-yellow-400 text-yellow-400 bg-zinc-900'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  Banner Feed (1:1)
                </button>
                <button
                  onClick={() => setActiveCreativeTab('stories')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition border-b-2 ${
                    activeCreativeTab === 'stories'
                      ? 'border-yellow-400 text-yellow-400 bg-zinc-900'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  Banner Stories / Reels (9:16)
                </button>
                <button
                  onClick={() => setActiveCreativeTab('copy')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs sm:text-sm font-bold transition border-b-2 ${
                    activeCreativeTab === 'copy'
                      ? 'border-yellow-400 text-yellow-400 bg-zinc-900'
                      : 'border-transparent text-zinc-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  Legenda & Roteiro de Anúncio
                </button>
              </div>

              {/* Conteúdo das Abas */}
              <div className="p-5 sm:p-6 bg-[#0f0f12] flex-1 overflow-auto">
                {activeCreativeTab === 'feed' && (
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-2xl max-w-sm w-full aspect-square bg-black">
                        <img 
                          src={feedBannerImg} 
                          alt="Banner Feed Projeto 90 Academia Inspire" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider py-0.5 px-2.5 rounded-md font-athletic">
                          FEED 1:1 (INSTAGRAM)
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                      <div>
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider font-athletic">
                          Formato Quadrado (1080x1080)
                        </span>
                        <h4 className="text-xl font-black font-athletic uppercase text-white mt-0.5">
                          Banner de Impacto para Feed & Carrossel
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                          Otimizado para chamar a atenção no scroll rápido do Instagram. Combina a estética dark esportiva, destaque visual para a <strong>Academia Inspire</strong>, a promessa dos <strong>90 dias</strong> e o alerta das <strong>Apenas 9 vagas</strong> com 50% OFF.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs space-y-1.5 text-zinc-300">
                        <div className="text-white font-bold flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Headline de ruptura de padrão no design</span>
                        </div>
                        <div className="text-white font-bold flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Gatilho de escassez e urgência no rodapé</span>
                        </div>
                        <div className="text-white font-bold flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Pronto para Meta Ads (Feed Instagram & Facebook)</span>
                        </div>
                      </div>

                      <a
                        href="/banner-feed-projeto90.jpg"
                        download="banner-feed-projeto90.jpg"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase text-xs tracking-wider transition shadow-lg shadow-yellow-500/20"
                      >
                        <Download className="w-4 h-4" />
                        <span>Baixar Imagem do Feed (1:1)</span>
                      </a>
                    </div>
                  </div>
                )}

                {activeCreativeTab === 'stories' && (
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-700 shadow-2xl max-w-[260px] w-full aspect-[9/16] bg-black">
                        <img 
                          src={storiesBannerImg} 
                          alt="Banner Stories Projeto 90 Academia Inspire" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider py-0.5 px-2.5 rounded-md font-athletic">
                          STORIES 9:16
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 bg-yellow-400 text-black text-center py-2 px-3 rounded-xl font-athletic font-black text-xs uppercase shadow-lg">
                          CLIQUE NO LINK ABAIXO 👇
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                      <div>
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider font-athletic">
                          Formato Vertical (1080x1920)
                        </span>
                        <h4 className="text-xl font-black font-athletic uppercase text-white mt-0.5">
                          Banner Vertical para Stories & Reels Ads
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                          Desenhado especificamente para prender a atenção nos Stories e Reels. Possui área livre no rodapé pensada para posicionar a <strong>figurinha de Link do Instagram</strong> direcionando para a sua página ou WhatsApp.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs space-y-1.5 text-zinc-300">
                        <div className="text-white font-bold flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Espaço para o Sticker de Link no Instagram</span>
                        </div>
                        <div className="text-white font-bold flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Visual agressivo e esportivo</span>
                        </div>
                        <div className="text-white font-bold flex items-center gap-1.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>Encaixe perfeito para Stories, Reels e TikTok</span>
                        </div>
                      </div>

                      <a
                        href="/banner-stories-projeto90.jpg"
                        download="banner-stories-projeto90.jpg"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-black font-black uppercase text-xs tracking-wider transition shadow-lg shadow-yellow-500/20"
                      >
                        <Download className="w-4 h-4" />
                        <span>Baixar Imagem Stories (9:16)</span>
                      </a>
                    </div>
                  </div>
                )}

                {activeCreativeTab === 'copy' && (
                  <div className="space-y-6">
                    {/* Legenda de Feed */}
                    <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider font-athletic">
                          Legenda Completa para o Feed / Anúncio Meta Ads
                        </span>
                        <button
                          onClick={() => {
                            const text = `Você não precisa treinar sozinho na academia fingindo que sabe o que está fazendo.\n\nSe você já tentou várias vezes começar a treinar, mas desiste no primeiro mês por falta de motivação, dores ou por se sentir perdido... o problema não é você. É a falta de um método e de alguém do seu lado.\n\nNos próximos 90 dias, eu vou te acompanhar de perto, treino a treino, presencialmente na Academia Inspire.\n\n🎯 90 dias para transformar o seu corpo e construir uma rotina que você consiga manter.\n\n🚨 ATENÇÃO: Abrimos uma condição especial de 50% OFF, mas são APENAS 9 VAGAS para garantir que eu consiga dar atenção máxima a cada aluno.\n\n👉 Toque no link da bio agora mesmo ou mande uma mensagem no WhatsApp para garantir a sua vaga com 50% de desconto antes que encerrem!`;
                            navigator.clipboard.writeText(text);
                            setCopiedCaption(true);
                            setTimeout(() => setCopiedCaption(false), 2500);
                          }}
                          className="flex items-center gap-1 px-3 py-1 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 rounded-lg text-xs font-bold transition"
                        >
                          {copiedCaption ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedCaption ? 'Copiado!' : 'Copiar Legenda'}</span>
                        </button>
                      </div>
                      <pre className="text-xs text-zinc-300 font-sans whitespace-pre-wrap leading-relaxed bg-black/40 p-3 rounded-xl border border-zinc-800/80">
{`Você não precisa treinar sozinho na academia fingindo que sabe o que está fazendo.

Se você já tentou várias vezes começar a treinar, mas desiste no primeiro mês por falta de motivação, dores ou por se sentir perdido... o problema não é você. É a falta de um método e de alguém do seu lado.

Nos próximos 90 dias, eu vou te acompanhar de perto, treino a treino, presencialmente na Academia Inspire.

🎯 90 dias para transformar o seu corpo e construir uma rotina que você consiga manter.

🚨 ATENÇÃO: Abrimos uma condição especial de 50% OFF, mas são APENAS 9 VAGAS para garantir que eu consiga dar atenção máxima a cada aluno.

👉 Toque no link da bio agora mesmo ou mande uma mensagem no WhatsApp para garantir a sua vaga com 50% de desconto antes que encerrem!`}
                      </pre>
                    </div>

                    {/* Roteiro para Stories em Vídeo (30 segundos) */}
                    <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                      <span className="text-yellow-400 font-bold text-xs uppercase tracking-wider font-athletic block mb-2">
                        Roteiro de 30 Segundos para Gravar na Academia Inspire (Stories/Reels)
                      </span>
                      <div className="text-xs text-zinc-300 space-y-2 leading-relaxed bg-black/40 p-3 rounded-xl border border-zinc-800/80">
                        <p><strong className="text-yellow-400">[0 a 5s - Gancho]:</strong> <em>(Com a câmera na mão na sala de musculação da Inspire)</em> "Se você vive começando e parando de treinar porque se sente perdido na academia, para de rolar esse vídeo agora."</p>
                        <p><strong className="text-yellow-400">[5 a 15s - Problema + Promessa]:</strong> "Eu criei o Projeto 90: 90 dias onde eu vou te acompanhar presencialmente aqui na Academia Inspire, corrigindo cada movimento e montando uma rotina que você realmente consiga manter."</p>
                        <p><strong className="text-yellow-400">[15 a 25s - Oferta + Escassez]:</strong> "Para essa turma de fim de ano, eu liberei uma condição de 50% OFF, mas são estritamente APENAS 9 VAGAS para eu conseguir acompanhar cada um de perto."</p>
                        <p><strong className="text-yellow-400">[25 a 30s - Chamada de Ação]:</strong> "Clica na figurinha de link aqui embaixo ou manda mensagem no meu direct agora antes que as 9 vagas acabem!"</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
