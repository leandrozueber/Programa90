import React, { useState } from 'react';
import {
  MessageCircle,
  Flame,
  Dumbbell,
  Target,
  Zap,
  Lock,
  Check
} from 'lucide-react';

export default function App() {
  // Configuração do WhatsApp oficial: (63) 99958-5072 -> 5563999585072
  const phoneNumber = '5563999585072';
  const remainingSpots = 9;

  // Mensagem oficial exigida para a estratégia de conversão:
  // "Olá, Leandro! Vi o Projeto 90 e quero saber mais sobre a condição especial de 50% de desconto."
  const defaultWhatsAppText = 'Olá, Leandro! Vi o Projeto 90 e quero saber mais sobre a condição especial de 50% de desconto.';
  const encodedWhatsAppMessage = encodeURIComponent(defaultWhatsAppText);
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedWhatsAppMessage}`;

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-yellow-400 selection:text-black">
      
      {/* ========================================================================= */}
      {/* 1. HEADER / ALERTA DE TOPO (VERMELHO URGENTE) */}
      {/* ========================================================================= */}
      <header 
        id="top-alert-banner"
        className="sticky top-0 z-40 bg-[#dc2626] border-b border-red-500/40 text-white py-2.5 px-3 sm:px-4 shadow-lg shadow-red-950/40"
      >
        <div className="max-w-5xl mx-auto flex items-center justify-center text-center gap-2 text-xs sm:text-base font-black uppercase tracking-wider font-athletic">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
          <span className="text-white drop-shadow">
            🔴 RESTAM APENAS {remainingSpots} VAGAS COM 50% DE DESCONTO | ACADEMIA INSPIRE
          </span>
        </div>
      </header>

      {/* CONTAINER PRINCIPAL DA LANDING PAGE */}
      <main className="flex-1 w-full pb-20 sm:pb-0">

        {/* ========================================================================= */}
        {/* 2. HERO / PRIMEIRA TELA (ESTRATÉGIA DOS 3 SEGUNDOS) */}
        {/* ========================================================================= */}
        <section id="hero-section" className="relative pt-8 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Glow de fundo esportivo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-yellow-500/10 via-red-500/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
          
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* LOCKUP OFICIAL DE IDENTIDADE: PROJETO 90 (INSPIRADO NO MODELO DE REFERÊNCIA) */}
            <div 
              id="hero-badge"
              className="flex flex-col items-center justify-center mb-6 select-none transform -rotate-2 hover:rotate-0 transition-transform duration-300 group"
            >
              {/* FAIXA BRUSH AMARELA COM "PROJETO" */}
              <div className="relative inline-flex items-center justify-center px-6 sm:px-10 py-1.5 sm:py-2">
                {/* SVG da Pincelada / Brush Stroke Amarela com Bordas Rasgadas */}
                <svg 
                  className="absolute inset-0 w-full h-full text-[#FACC15] drop-shadow-[0_4px_16px_rgba(250,204,21,0.5)]" 
                  viewBox="0 0 280 60" 
                  preserveAspectRatio="none" 
                  fill="currentColor"
                >
                  <path d="M4 16C28 9 75 5 140 6C205 7 252 10 275 16C280 18 281 22 278 28C275 36 278 44 274 51C270 56 248 54 200 55C140 56 75 58 16 53C6 52 1 47 2 38C3 29 0 21 4 16Z" />
                  <path d="M-1 24C1 21 6 22 5 26C4 30 -1 29 -1 24Z" />
                  <path d="M281 14C283 13 285 16 284 19C282 21 280 18 281 14Z" />
                  <path d="M276 46C279 45 282 49 280 52C278 54 275 50 276 46Z" />
                </svg>
                
                {/* Texto "PROJETO" em Preto Atletic Condensado e Itálico */}
                <span className="relative z-10 font-athletic font-black italic text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-black drop-shadow-sm px-2">
                  PROJETO
                </span>
              </div>

              {/* NÚMERO "90" GIGANTE E TEXTURIZADO COM DROP SHADOW E INCLINAÇÃO */}
              <div className="relative -mt-2 sm:-mt-4 flex flex-col items-center">
                <span 
                  className="font-athletic font-black italic text-7xl sm:text-9xl md:text-[130px] leading-[0.82] tracking-tighter text-white uppercase select-none transition-transform group-hover:scale-105 duration-300"
                  style={{
                    textShadow: '3px 3px 0px #000, 6px 6px 0px #000, 0px 14px 28px rgba(0,0,0,0.95)',
                    WebkitTextStroke: '2px rgba(0,0,0,0.9)'
                  }}
                >
                  90
                </span>

                {/* Traço / Pincelada Amarela sob o "90" */}
                <svg 
                  className="w-32 sm:w-52 h-3.5 sm:h-5 text-yellow-400 -mt-1 sm:-mt-2 drop-shadow-[0_2px_10px_rgba(250,204,21,0.65)]" 
                  viewBox="0 0 160 16" 
                  preserveAspectRatio="none" 
                  fill="currentColor"
                >
                  <path d="M2 10C26 6 68 4 100 5C134 6 153 8 158 11C154 14 135 13 95 12C55 11 20 13 2 10Z" />
                </svg>
              </div>
            </div>

            {/* Headline Principal Muito Grande */}
            <h1 
              id="hero-headline"
              className="font-athletic text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] mb-5"
            >
              VOCÊ NÃO PRECISA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 underline decoration-red-600 decoration-4 sm:decoration-8 underline-offset-4">
                TREINAR SOZINHO.
              </span>
            </h1>

            {/* Subheadline Clara e Confortável de Ler */}
            <p className="text-base sm:text-2xl text-zinc-200 font-semibold max-w-2xl mx-auto mb-6 leading-snug">
              90 dias para transformar seu corpo e construir uma rotina que você consiga manter.
            </p>

            {/* Destaque Claro: PERSONAL TRAINER PRESENCIAL NA ACADEMIA INSPIRE */}
            <div 
              id="hero-personal-highlight"
              className="w-full max-w-2xl mx-auto mb-6 p-4 sm:p-5 rounded-2xl bg-[#141417] border-2 border-yellow-400/80 shadow-xl shadow-yellow-500/10"
            >
              <span className="block text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">
                Acompanhamento Exclusivo
              </span>
              <p className="font-athletic text-2xl sm:text-3xl md:text-4xl font-black uppercase text-yellow-400 leading-tight">
                PERSONAL TRAINER PRESENCIAL
              </p>
              <p className="font-athletic text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-wide mt-0.5">
                NA ACADEMIA INSPIRE
              </p>
            </div>

            {/* PROGRAMA DE 3 MESES + 50% DE DESCONTO + APENAS 9 VAGAS */}
            <div 
              id="hero-offer-box"
              className="w-full max-w-xl mx-auto mb-8 p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-700 shadow-lg"
            >
              <span className="inline-block px-3 py-1 rounded-md bg-zinc-800 text-yellow-400 font-athletic font-extrabold text-sm sm:text-base uppercase tracking-wider mb-2">
                PROGRAMA DE 3 MESES
              </span>

              <div className="font-athletic text-5xl sm:text-7xl font-black uppercase text-white tracking-tight leading-none my-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400">
                50% DE DESCONTO
              </div>

              <div className="mt-3 text-red-400 font-athletic text-lg sm:text-2xl font-black uppercase tracking-wide flex items-center justify-center gap-2">
                <span>🚨 APENAS {remainingSpots} VAGAS COM ESSA CONDIÇÃO ESPECIAL</span>
              </div>
            </div>

            {/* Botão de Ação CTA Principal */}
            <div className="w-full sm:w-auto flex flex-col items-center">
              <a
                id="hero-whatsapp-cta-btn"
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 bg-[#FACC15] hover:bg-[#EAB308] active:bg-yellow-500 text-black font-black text-lg sm:text-2xl uppercase tracking-wider rounded-2xl shadow-2xl shadow-yellow-500/30 transform transition hover:scale-105 active:scale-95 animate-pulse-subtle font-athletic"
              >
                <MessageCircle className="w-7 h-7 fill-black text-black shrink-0" />
                <span>QUERO GARANTIR MINHA VAGA</span>
              </a>

              {/* Sub-garantia sob o botão */}
              <span className="mt-3 text-xs sm:text-sm text-zinc-400 font-medium flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-yellow-400" />
                Fale direto comigo no WhatsApp • Resposta rápida
              </span>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. SEÇÃO "COMO FUNCIONA" (90 DIAS. UM PROGRAMA COMPLETO) */}
        {/* ========================================================================= */}
        <section id="how-it-works-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#121215] border-y border-zinc-800">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="font-athletic text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
              90 DIAS. <span className="text-yellow-400">UM PROGRAMA COMPLETO.</span>
            </h2>
            
            <p className="text-base sm:text-xl text-zinc-200 font-medium mt-3 leading-relaxed max-w-2xl mx-auto">
              Treino presencial + acompanhamento + desenvolvimento de hábitos.<br />
              <span className="text-zinc-400">3 meses para trabalhar seu corpo e sua rotina.</span>
            </p>

            {/* 3 Pilares Diretos com Títulos Grandes e Textos Curtos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left">
              
              {/* Pilar 1 */}
              <div 
                id="pilar-1-card"
                className="bg-[#18181b] border-2 border-zinc-800 hover:border-yellow-400/80 rounded-2xl p-6 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-4 text-yellow-400">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <h3 className="font-athletic text-2xl sm:text-3xl font-black uppercase text-yellow-400 mb-2">
                    PERSONAL PRESENCIAL
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-200 font-medium leading-snug">
                    Treine comigo na Academia Inspire.
                  </p>
                </div>
              </div>

              {/* Pilar 2 */}
              <div 
                id="pilar-2-card"
                className="bg-[#18181b] border-2 border-zinc-800 hover:border-yellow-400/80 rounded-2xl p-6 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-4 text-yellow-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-athletic text-2xl sm:text-3xl font-black uppercase text-yellow-400 mb-2">
                    RESULTADO + HÁBITOS
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-200 font-medium leading-snug">
                    Construa uma rotina que você consiga manter.
                  </p>
                </div>
              </div>

              {/* Pilar 3 */}
              <div 
                id="pilar-3-card"
                className="bg-[#18181b] border-2 border-zinc-800 hover:border-yellow-400/80 rounded-2xl p-6 transition flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-4 text-yellow-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-athletic text-2xl sm:text-3xl font-black uppercase text-yellow-400 mb-2">
                    ACOMPANHAMENTO DE PERTO
                  </h3>
                  <p className="text-base sm:text-lg text-zinc-200 font-medium leading-snug">
                    Orientação e evolução durante todo o programa.
                  </p>
                </div>
              </div>

            </div>

            {/* Botão intermediário após os pilares */}
            <div className="mt-10">
              <a
                id="pillars-whatsapp-cta-btn"
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#FACC15] hover:bg-[#EAB308] text-black font-black text-base sm:text-xl uppercase tracking-wider rounded-xl shadow-lg shadow-yellow-500/20 font-athletic transition"
              >
                <MessageCircle className="w-5 h-5 fill-black text-black" />
                <span>QUERO GARANTIR MINHA VAGA</span>
              </a>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. SEÇÃO "PARA QUEM É" (É PARA VOCÊ SE...) */}
        {/* ========================================================================= */}
        <section id="for-whom-section" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            
            <h2 className="font-athletic text-4xl sm:text-6xl font-black uppercase text-white text-center mb-8">
              É PARA VOCÊ SE...
            </h2>

            <div className="space-y-4">
              
              <div 
                id="checklist-item-1"
                className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center shrink-0 text-yellow-400">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <p className="text-lg sm:text-2xl font-bold text-white">
                  Quer melhorar sua forma física.
                </p>
              </div>

              <div 
                id="checklist-item-2"
                className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center shrink-0 text-yellow-400">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <p className="text-lg sm:text-2xl font-bold text-white">
                  Tem dificuldade para manter constância.
                </p>
              </div>

              <div 
                id="checklist-item-3"
                className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-[#18181b] border border-zinc-800 hover:border-yellow-400/50 transition"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center shrink-0 text-yellow-400">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <p className="text-lg sm:text-2xl font-bold text-white">
                  Já começou várias vezes e desistiu.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SEÇÃO OFERTA + ESCASSEZ (FECHAMENTO) */}
        {/* ========================================================================= */}
        <section id="offer-section" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#121215] to-[#09090b]">
          <div className="max-w-2xl mx-auto">
            
            {/* Card de Oferta de Alta Conversão */}
            <div 
              id="main-offer-card"
              className="relative bg-gradient-to-b from-[#1c1c22] to-[#121215] border-2 border-yellow-400 rounded-3xl p-6 sm:p-10 text-center shadow-2xl shadow-yellow-500/10"
            >
              
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-600 text-white font-athletic font-black text-sm uppercase tracking-wider mb-4 shadow">
                CONDIÇÃO EXCLUSIVA
              </div>

              <h2 className="font-athletic text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-tight mb-2">
                UMA CONDIÇÃO ESPECIAL PARA COMEÇAR
              </h2>

              {/* Destaque 50% de Desconto Muito Grande */}
              <div className="font-athletic text-6xl sm:text-8xl font-black uppercase text-yellow-400 tracking-tight my-4">
                50% DE DESCONTO
              </div>

              <p className="text-base sm:text-xl text-zinc-200 font-medium leading-relaxed max-w-lg mx-auto mb-6">
                Na primeira edição do Projeto 90, você terá acesso ao programa completo de 90 dias com uma condição especial de 50% de desconto.
              </p>

              {/* Destaque de Vagas */}
              <div 
                id="scarcity-box"
                className="p-4 rounded-xl bg-black/60 border border-red-500/60 mb-8"
              >
                <p className="font-athletic text-xl sm:text-2xl font-black uppercase text-red-400">
                  🚨 APENAS {remainingSpots} VAGAS COM ESSA CONDIÇÃO ESPECIAL.
                </p>
              </div>

              {/* Botão CTA Principal */}
              <a
                id="main-offer-whatsapp-cta-btn"
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#FACC15] hover:bg-[#EAB308] active:bg-yellow-500 text-black font-black text-lg sm:text-2xl uppercase tracking-wider rounded-2xl shadow-2xl shadow-yellow-500/30 transform transition hover:scale-105 active:scale-95 animate-pulse-subtle font-athletic"
              >
                <MessageCircle className="w-7 h-7 fill-black text-black shrink-0" />
                <span>QUERO GARANTIR MINHA VAGA</span>
              </a>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400 font-medium">
                Atendimento direto comigo no WhatsApp • Resposta rápida
              </p>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. FOOTER / RODAPÉ SIMPLIFICADO */}
        {/* ========================================================================= */}
        <footer id="footer-section" className="py-10 px-4 border-t border-zinc-800 bg-[#09090b] text-center text-zinc-500 text-xs sm:text-sm">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
            <div className="text-white font-black font-athletic text-2xl uppercase tracking-wider">
              ACADEMIA INSPIRE • PROJETO 90
            </div>

            <p className="text-zinc-400 text-sm font-medium">
              Acompanhamento 100% presencial com Personal Trainer na Academia Inspire.
            </p>

            <div className="flex items-center justify-center gap-3 text-xs text-zinc-500 mt-1">
              <span>📍 Academia Inspire</span>
              <span>•</span>
              <span>Treino Presencial</span>
            </div>

            <p className="text-zinc-600 text-xs mt-2">
              &copy; {new Date().getFullYear()} Academia Inspire. Todos os direitos reservados.
            </p>
          </div>
        </footer>

        {/* BOTÃO FLUTUANTE NO MOBILE (Sticky no rodapé) */}
        <div className="fixed bottom-0 left-0 right-0 p-3 bg-black/95 backdrop-blur-md border-t border-yellow-500/40 sm:hidden z-40">
          <a
            id="mobile-sticky-whatsapp-btn"
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-4 px-4 bg-yellow-400 active:bg-yellow-500 text-black font-black text-base uppercase tracking-wider rounded-xl shadow-lg shadow-yellow-500/30 font-athletic"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>QUERO GARANTIR MINHA VAGA (50% OFF)</span>
          </a>
        </div>

      </main>

    </div>
  );
}
