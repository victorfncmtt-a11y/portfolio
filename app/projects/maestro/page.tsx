'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguageStore } from '@stores';

const TRANSLATIONS = {
  en: {
    back: '← BACK TO PORTFOLIO',
    role: 'Role',
    timeline: 'Timeline',
    projectOverview: 'Project Overview',
    projectOverviewSub: 'Lightweight real-time contextual bridge anchoring browser tabs to CRM databases.',
    positioningTitle: 'Phase 1: Brand & Positioning Strategy',
    positioningSub: 'How Maestro claims its market territories against CRM logging gaps and compliance barriers.',
    channelsTitle: 'Phase 2: Distribution Channels',
    channelsSub: 'Aligning video, written, and email formats with B2B purchase friction.',
    chronogramTitle: 'Phase 3: Operational Chronogram & Copywriting Playbook',
    chronogramSub: 'Interactive 7-day schedule with precise copywriting drafts designed for Sales Ops and CIOs.',
    copyDraftTitle: 'Copywriting Playbook Draft',
    copyBtn: 'Copy Draft',
    copiedMsg: 'Copied!',
    visualFlow: 'Visual Flow & Asset Instructions',
    concept: 'Pillar Concept',
    keyNarrative: 'Core Positioning Strategy',
    verbalConstraints: 'Verbal & Visual Tone Constraints',
    languageSelector: 'PT',
    portuguese: 'Português',
    english: 'English',
    meta: {
      client: 'Maestro Social Selling',
      roleVal: 'Senior Brand Planner & Content Systems Engineer',
      timeVal: 'Q1-Q2 2026',
      intro: 'Maestro is a lightweight, zero-dashboard, real-time contextual bridge (powered by passive DOM reading) that unifies sales threads across Gmail, LinkedIn, WhatsApp Web, and CRM systems directly inside the browser. It eliminates admin cognitive overhead and manual data logging, allowing sales reps to focus entirely on selling without entering data or switching tabs.',
    },
    glossary: {
      title: 'Operational Guidelines & Regional Terms',
      desc: 'Maestro targets high-turnover commercial teams and Southeast/South Brazilian inside sales structures, using direct, rep-centric terminology:',
      terms: [
        { word: 'Lead Leakage', meaning: 'Failing to log active WhatsApp Web communication to central CRM records.' },
        { word: 'CRM-to-Browser Match', meaning: 'Comparing DOM phone numbers and names with database entities in real-time.' },
        { word: 'Zero-Dashboard', meaning: 'Providing assistance inline in the browser without requiring a dedicated dashboard tab.' },
        { word: 'Procurement Bypass', meaning: 'Bypassing long enterprise security review cycles through strict local-only execution.' },
        { word: 'Vendas complexas', meaning: 'Complex B2B sales cycles involving multiple contacts and long decision phases.' },
        { word: 'Abordagem comercial', meaning: 'The messaging positioning used for initial contact across LinkedIn/WhatsApp.' }
      ]
    },
    territories: [
      {
        id: 't1',
        title: 'Territory 1: The "Anti-Prompting, Zero-Dashboard" Workflow',
        desc: 'Current AI sidebars require sales reps to copy-paste customer texts, type instructions, and paste results back. Maestro operates passively inside the browser DOM, prompting itself to display relevant CRM insights and actions next to chats.',
        concept: 'Stop prompting. Start selling. The first AI that reads browser context and acts without manual prompting.',
        narrative: 'AI is useful only if it minimizes administrative tasks. Standard generative assistants increase the rep\'s cognitive load. Maestro operates inline, reading active text and providing draft proposals on a single click.'
      },
      {
        id: 't2',
        title: 'Territory 2: The "Privacy-by-Default" Procurement Shortcut',
        desc: 'Mid-market and enterprise compliance teams block sales extensions to prevent sensitive data leaks. Maestro bypasses this constraint by implementing local-only DOM execution. Sensitive customer details never leave the local browser session to train LLMs.',
        concept: 'The AI sales assistant approved by security on Day 1. Local-only DOM reading means zero data leaks to public models.',
        narrative: 'Compliance is a product differentiator. Instead of waiting for a 6-month security review, sales managers deploy Maestro instantly, backed by pre-packaged registry files and ADMX templates.'
      },
      {
        id: 't3',
        title: 'Territory 3: The WhatsApp-First Sales Hub (Brazilian Inside Sales Reality)',
        desc: 'Brazilian B2B sales negotiate and close inside WhatsApp Web (which has a 98% open rate). Standard sales stacks are built for US-centric email workflows, causing severe lead leakage. Maestro matches and updates CRM contacts straight from WhatsApp Web DOM.',
        concept: 'Your CRM is blind to WhatsApp. Maestro bridges CRM, LinkedIn, and Gmail directly inside WhatsApp Web.',
        narrative: 'If communication isn\'t logged, the deal is at risk. Maestro unifies Outlook, Gmail, and CRM history within the active WhatsApp chat, ensuring the commercial rep knows the client\'s budget and objections instantly.'
      }
    ],
    formats: [
      {
        t: 'Territory 1: Zero-Dashboard',
        video: 'Short-form: High-speed split-screen comparison video (under 30s). Left: copy-pasting text to Claude sidebar. Right: Maestro generating a context-aware proposal instantly on WhatsApp Web.',
        written: 'Social: Punchy LinkedIn posts targeting B2B Sales Leaders. Deconstructs the "Cognitive Context-Switching Tax" that steals up to 40% of reps\' productive time.',
        email: 'Nurture: Explanations of how removing 3 administrative clicks per email template increases cold outreach by 40 messages per day per rep.'
      },
      {
        t: 'Territory 2: Privacy Procurement',
        video: 'Long-form: A 3-minute technical architecture walk-through checking browser devtools traffic logs to prove that CRM details are processed locally.',
        written: 'Articles: Text-only LinkedIn articles for CIOs and CTOs. Compares local-only extension security architecture vs. server-side cloud scraping.',
        email: 'Outbound: Direct outreach to IT decision-makers providing an "IT Clearance Security Blueprint for AI Browser Extensions".'
      },
      {
        t: 'Territory 3: WhatsApp Sales Hub',
        video: 'Short-form: Vertical Reels/TikToks illustrating "Lead Leakage". Showing an unanswered WhatsApp Web message from a hot prospect forgotten by a busy AE.',
        written: 'Social: Content posts in prominent Brazilian sales communities (Meetime, RD Station). Backed by data on B2B lead leakage in local regions.',
        email: 'Newsletter: Weekly benchmarks contrasting Brazilian WhatsApp-centric sales habits with traditional US email design templates.'
      }
    ],
    days: [
      {
        day: 'Day 1',
        channel: 'LinkedIn',
        medium: 'Written (Social Post)',
        pillar: 'Territory 1: Zero-Dashboard',
        focus: 'Reps are hired to close, not to write prompts',
        angle: 'Pain-Point Aggression',
        visual: 'Direct, clear copy formatted for maximum readability on mobile LinkedIn feeds.',
        copy: 'If your SDRs are spending 2 hours a day writing prompts in Gemini or Claude to reply to LinkedIn messages, you are paying them to be prompt engineers, not sales professionals.\n\nThe secret cost of AI sidebars is cognitive fatigue. Every time a rep copies text, opens a sidebar, pastes it, refines the prompt, and copies it back, they pay a cognitive context-switch tax.\n\nMaestro removes the sidebar entirely. It reads the active DOM and suggests the next sales action instantly. Zero dashboard. Zero typing prompts. Just sell.'
      },
      {
        day: 'Day 2',
        channel: 'Tech/Sales Newsletters',
        medium: 'Written (Newsletter Sponsor)',
        pillar: 'Territory 2: Privacy Procurement',
        focus: 'Enterprise security procurement bypass',
        angle: 'Technical Breakdown',
        visual: 'Clean, highlighted sponsor block text with a clear CTA to the security whitepaper.',
        copy: 'Your sales reps are already using unauthorized AI extensions, exposing your HubSpot/Salesforce data to public LLM training sets. Security knows it, and IT is preparing to block them.\n\nAvoid the 6-month procurement nightmare. Maestro is built on local-only extension policies. It reads browser DOM locally, ensuring your customer data never leaves the local browser session.\n\nSecure by default, approved on Day 1. [Try the 7-day reverse trial today].'
      },
      {
        day: 'Day 3',
        channel: 'YouTube / LinkedIn',
        medium: 'Video (Short)',
        pillar: 'Territory 3: WhatsApp-First',
        focus: 'Visual sync from WhatsApp to CRM',
        angle: 'Process Comparison',
        visual: '15-second vertical video. Zoom in on a WhatsApp Web chat. An incoming message asks: "Can we jump on a call tomorrow at 10 AM?". A tiny Maestro bubble appears inside the UI: "HubSpot: Lead Status - Negotiating. Gmail Thread: Conflicted time (Meeting with CEO at 10 AM). Suggestion: Propose 11 AM". Rep clicks the suggestion, message drafts instantly.',
        copy: 'No CRM tab open. No copy-paste. Just passive context.'
      },
      {
        day: 'Day 4',
        channel: 'SalesOps Email List',
        medium: 'Email Campaign',
        pillar: 'Play 4: Reverse-Trial',
        focus: 'Reverse-trial value & free limits justification',
        angle: 'Freemium Value Reveal',
        visual: 'Inbox mockups highlighting how returning to manual logging after 7 days feels restrictive.',
        copy: 'Subject: Why we cap free accounts at 5 unifications per day.\n\nHi [Name],\n\nWhen we launched Maestro, we wanted sales teams to experience what zero-dashboard sales feels like. That’s why we offer a 7-day Reverse-Trial with unlimited CRM-to-WhatsApp/LinkedIn unifications. No credit card required.\n\nBut after 7 days, we cap free usage at 5 unifications per day. Why? Because manual data copy-pasting is a habit-forming pain. After 5 free automatic syncs, going back to copying names and typing emails manually feels like dragging your feet in concrete.\n\nIf you want to keep your reps in flow state, upgrade to our B2B team plan. Click here to check pricing.'
      },
      {
        day: 'Day 5',
        channel: 'Inside Sales Community (Meetime)',
        medium: 'Written (Community)',
        pillar: 'Territory 3: WhatsApp-First',
        focus: 'Lead leakage in Brazilian B2B operations',
        angle: 'Data-Backed Authority',
        visual: 'Graphs or statistics showing the percent of unlogged B2B interactions on WhatsApp in Brazil.',
        copy: 'Southeast and South Brazil B2B inside sales teams have a major leak: WhatsApp. We have a 98% open rate, making WhatsApp the primary channel to close deals. Yet, 92% of managers admit they have no idea what BDRs are saying on WhatsApp Web because logging interactions to HubSpot or Salesforce takes too long.\n\nThis lead leakage costs mid-market companies millions in lost deals.\n\nThe solution isn\'t to force reps to use more dashboards. It’s to passively sync WhatsApp Web DOM directly to your CRM. Read how sales operations are closing the WhatsApp-CRM loop.'
      },
      {
        day: 'Day 6',
        channel: 'LinkedIn',
        medium: 'Video (Long-form)',
        pillar: 'Territory 1: Zero-Dashboard',
        focus: 'Maestro context bridge vs. standard AI sidebars',
        angle: 'Feature Shootout',
        visual: '2-minute video. Demonstrator walks through standard workspace extensions (Gemini, Claude panels) showing the steps needed to fetch page context vs. Maestro\'s overlay appearing instantly next to a LinkedIn message.',
        copy: 'Stop side-hustling as a prompt designer. Maestro bridges the gap passively.'
      },
      {
        day: 'Day 7',
        channel: 'Customer Newsletter',
        medium: 'Email Campaign',
        pillar: 'Territory 2: Privacy Procurement',
        focus: 'The IT checklist for browser extensions',
        angle: 'Authority Checklist',
        visual: 'An aesthetic PDF style graphic listing the 3 security checklist questions for IT procurement.',
        copy: 'Subject: 3 questions before approving your next AI browser extension.\n\nIT compliance doesn\'t have to be the enemy of sales speed. Before you approve another Chrome extension, run it through this checklist:\n1. Is the data processed locally or sent to external servers? (Maestro executes locally, avoiding external cloud storage for DOM data).\n2. Are conversation logs used to train public LLM models? (With Maestro, customer data is never used for training models).\n3. Does the tool require active API tokens to CRM data or passive DOM matching?\n\nDownload our complete AI Security Procurement Blueprint to speed up IT approvals by 30 days.'
      }
    ]
  },
  pt: {
    back: '← VOLTAR PARA O PORTFÓLIO',
    role: 'Função',
    timeline: 'Cronograma',
    projectOverview: 'Visão Geral do Projeto',
    projectOverviewSub: 'Ponte contextual em tempo real que conecta abas do navegador a bases do CRM.',
    positioningTitle: 'Fase 1: Estratégia de Marca e Posicionamento',
    positioningSub: 'Como o Maestro conquista território de mercado contra falhas de sincronização e conformidade.',
    channelsTitle: 'Fase 2: Canais de Distribuição',
    channelsSub: 'Formatos de vídeo, conteúdo escrito e nutrição alinhados com o funil corporativo.',
    chronogramTitle: 'Fase 3: Cronograma Operacional e Playbook de Copy',
    chronogramSub: 'Esqueleto de 7 dias interativo com redações prontas voltadas para Sales Ops e diretores.',
    copyDraftTitle: 'Rascunho de Redação / Copywriting',
    copyBtn: 'Copiar Texto',
    copiedMsg: 'Copiado!',
    visualFlow: 'Fluxo Visual e Diretrizes de Assets',
    concept: 'Conceito do Pilar',
    keyNarrative: 'Estratégia Central de Posicionamento',
    verbalConstraints: 'Restrições Verbais e Visuais de Tom',
    languageSelector: 'EN',
    portuguese: 'Português',
    english: 'English',
    meta: {
      client: 'Maestro Social Selling',
      roleVal: 'Senior Brand Planner & Content Systems Engineer',
      timeVal: 'Q1-Q2 2026',
      intro: 'O Maestro é uma ponte contextual em tempo real, sem dashboards e baseada em leitura passiva do DOM do navegador, que unifica conversas comerciais no WhatsApp Web, LinkedIn, Gmail e CRMs. Ele remove a sobrecarga mental de digitar dados manuais, permitindo que vendedores foquem inteiramente em vender.',
    },
    glossary: {
      title: 'Diretrizes de Operação e Termos Regionais',
      desc: 'O Maestro foca em equipes comerciais brasileiras e operações de inside sales, integrando terminologias operacionais diretas:',
      terms: [
        { word: 'Lead Leakage', meaning: 'Vazamento e perda de dados comerciais ao deixar de registrar conversas de WhatsApp no CRM.' },
        { word: 'Matches DOM-CRM', meaning: 'Processo de validação de dados em tempo real comparando informações da aba com o banco de dados.' },
        { word: 'Zero-Dashboard', meaning: 'Filosofia de design invisível, prestando assistência direta sem adicionar mais uma tela de controle.' },
        { word: 'Atalho de TI', meaning: 'Redução do tempo de homologação comercial de softwares através de segurança client-side.' },
        { word: 'Vendas complexas', meaning: 'Ciclos de vendas consultivos de alto valor com múltiplos decisores e etapas.' },
        { word: 'Abordagem comercial', meaning: 'O teor da comunicação estruturada usada para engajar clientes frios por canais sociais.' }
      ]
    },
    territories: [
      {
        id: 't1',
        title: 'Território 1: O Fluxo de Trabalho "Anti-Prompting, Zero-Dashboard"',
        desc: 'Painéis e assistentes de IA tradicionais exigem que os vendedores copiem conversas, escrevam instruções detalhadas e colem os textos de volta. O Maestro atua em background no DOM, autogerando contexto de apoio sem exigir preenchimento.',
        concept: 'Pare de escrever prompts. Comece a vender. A primeira IA que lê o contexto do navegador e age de forma invisível.',
        narrative: 'A inteligência artificial comercial só é eficiente se reduzir tarefas administrativas. O Maestro atua direto na tela de chat, eliminando cliques redundantes e gerando rascunhos com base na aba ativa.'
      },
      {
        id: 't2',
        title: 'Território 2: O Atalho de Homologação "Privacy-by-Default"',
        desc: 'Gerentes comerciais querem usar IA, mas a TI bloqueia extensões devido ao risco de vazamento de dados de clientes para treinamento de modelos públicos. O Maestro executa seu parsing de forma 100% local no cliente, blindando as informações.',
        concept: 'O assistente de vendas aprovado pela TI no primeiro dia. Execução 100% local significa segurança de dados de ponta.',
        narrative: 'Compliance é o maior acelerador de vendas enterprise. Ao garantir que dados confidenciais fiquem restritos ao navegador ativo, o Maestro elimina meses de revisões de segurança e oferece instaladores prontos (.reg e ADMX).'
      },
      {
        id: 't3',
        title: 'Território 3: WhatsApp-First Sales Hub (Realidade de Vendas no Brasil)',
        desc: 'No Brasil, negócios complexos acontecem dentro do WhatsApp Web. No entanto, as plataformas corporativas de CRM são focadas em e-mail, gerando grandes vazamentos de dados (lead leakage). O Maestro faz a ponte direta entre WhatsApp Web e o CRM.',
        concept: 'Seu CRM é cego para o WhatsApp. O Maestro traz o CRM, LinkedIn e Gmail direto para dentro do WhatsApp Web.',
        narrative: 'Se a negociação não é registrada no CRM, o lead é abandonado. O Maestro extrai dados do DOM do WhatsApp e atualiza o funil do Salesforce, HubSpot ou RD Station de forma nativa e sem preenchimento manual.'
      }
    ],
    formats: [
      {
        t: 'Território 1: Zero-Dashboard',
        video: 'Curto: Comparação em tela dividida rápida (menos de 30s). Esquerda: vendedor frustrado colando texto no Claude. Direita: Maestro gerando a resposta certa com um clique no WhatsApp.',
        written: 'Social: Posts focados no custo cognitivo oculto que gerentes trazem para o time ao exigir preenchimentos manuais de sistemas complexos.',
        email: 'Nutrição: Detalhamento matemático de como economizar 3 cliques por e-mail se converte em dezenas de novos contatos diários no funil de vendas.'
      },
      {
        t: 'Território 2: Atalho de Homologação',
        video: 'Longo: Demonstração arquitetônica de 3 minutos validando as requisições da aba Network para atestar a segurança dos dados locais de clientes.',
        written: 'Artigo: Posts para CIOs e CTOs no LinkedIn detalhando a segurança de extensões locais vs. scraping em servidores na nuvem.',
        email: 'Nutrição: Campanhas para gestores de TI fornecendo o blueprint completo para homologação e deploy de extensões de IA comercial.'
      },
      {
        t: 'Território 3: WhatsApp Sales Hub',
        video: 'Curto: Vídeos de storytelling (Reels/TikTok) focando no lead quente esquecido e perdido no WhatsApp por falta de anotação no CRM.',
        written: 'Social: Publicações nas maiores comunidades comerciais brasileiras (Meetime, RD Station) mostrando estatísticas de perda de receita em vendas complexas.',
        email: 'Nutrição: Conteúdo analítico semanal contrastando os hábitos brasileiros de vendas no WhatsApp com os modelos americanos baseados em e-mail.'
      }
    ],
    days: [
      {
        day: 'Dia 1',
        channel: 'LinkedIn',
        medium: 'Post Escrito',
        pillar: 'Território 1: Zero-Dashboard',
        focus: 'Vendedores são pagos para vender, não para treinar IA',
        angle: 'Identificação de Dor Direta',
        visual: 'Publicação curta e estruturada em linhas diretas para fácil leitura em telas de celulares.',
        copy: 'Se seus SDRs gastam 2 horas do dia escrevendo instruções detalhadas no Gemini ou Claude para responder a mensagens do LinkedIn, você está pagando engenheiros de prompt, não profissionais de vendas.\n\nO custo oculto das barras de IA adicionais é o desgaste mental. Cada vez que um vendedor copia dados, abre um chat de IA, escreve um prompt e cola o rascunho de volta, ele perde velocidade de execução comercial.\n\nO Maestro remove as barras laterais e painéis adicionais. Ele lê a aba ativa e sugere a próxima ação de vendas. Zero digitação de instruções. Foco total em vender.'
      },
      {
        day: 'Dia 2',
        channel: 'Newsletters do Setor',
        medium: 'Patrocínio de Conteúdo',
        pillar: 'Território 2: Atalho de Homologação',
        focus: 'Desbloqueando compras corporativas de TI',
        angle: 'Análise Estrutural',
        visual: 'Bloco de texto de patrocínio direto com destaque para o download do checklist de compliance de TI.',
        copy: 'Seus vendedores já estão usando extensões de IA não autorizadas, expondo dados sensíveis no HubSpot/Salesforce para treinamento de redes públicas de LLM. A TI sabe disso e está preparando bloqueios.\n\nEvite meses de auditorias e reuniões de segurança. O Maestro roda sob diretrizes client-side. Ele analisa o DOM no navegador do usuário, mantendo as informações de clientes restritas ao ambiente seguro local.\n\nAprovado no primeiro dia. [Comece o teste reverso de 7 dias].'
      },
      {
        day: 'Dia 3',
        channel: 'YouTube / LinkedIn',
        medium: 'Vídeo Curto',
        pillar: 'Território 3: WhatsApp-First',
        focus: 'Integração visual de vendas no WhatsApp Web',
        angle: 'Demonstração Operacional',
        visual: 'Gravação rápida de 15 segundos. Zoom no chat de WhatsApp Web. Chega mensagem: "Podemos alinhar amanhã às 10h?". O Maestro renderiza um balão sutil na tela: "HubSpot: Lead Negociando. E-mail: Reunião com CEO já agendada às 10h. Sugestão: Propor 11h". O vendedor clica e a mensagem é enviada.',
        copy: 'Sem abas extras abertas. Sem copiar e colar. Apenas contexto imediato na tela.'
      },
      {
        day: 'Dia 4',
        channel: 'Base de SalesOps',
        medium: 'Campanha de E-mail',
        pillar: 'Play 4: Teste Reverso',
        focus: 'Gatilho de transição e precificação baseada em valor',
        angle: 'Apresentação de Oferta Freemium',
        visual: 'Interface de limites de conta mostrando a barreira de unificação como redutor de esforço operacional.',
        copy: 'Assunto: Por que limitamos o plano grátis a 5 unificações automáticas por dia?\n\nOlá [Nome],\n\nAo lançar o Maestro, queríamos que os gestores de vendas enxergassem o ganho imediato da automação invisível de dados. É por isso que oferecemos 7 dias de teste reverso com unificações ilimitadas de CRM para WhatsApp e LinkedIn.\n\nApós o período, limitamos o plano a 5 sincronizações automáticas por dia. Por quê? Porque retornar ao trabalho manual de copiar contatos, transcrever conversas e atualizar o CRM parece carregar pedras após experimentar a velocidade local do Maestro.\n\nGaranta a produtividade máxima da sua operação comercial. Faça o upgrade para o plano de equipe aqui.'
      },
      {
        day: 'Dia 5',
        channel: 'Portal de Vendas (Meetime)',
        medium: 'Post de Comunidade',
        pillar: 'Território 3: WhatsApp-First',
        focus: 'Vazamento de leads nas operações comerciais',
        angle: 'Autoridade Baseada em Dados',
        visual: 'Visual simples demonstrando a perda de taxas de fechamento causadas pelo WhatsApp desconectado do CRM.',
        copy: 'As operações comerciais brasileiras de B2B enfrentam um grande vazamento de funil: o WhatsApp. Temos 98% de taxa de abertura, sendo o principal canal de vendas complexas. Porém, 92% dos gerentes de vendas admitem que não fazem ideia das conversas dos SDRs no WhatsApp Web porque atualizações de CRM tomam tempo demais.\n\nEssa perda de histórico custa milhões de reais para empresas de tecnologia e serviços de médio porte.\n\nA resposta não é exigir preenchimento de mais relatórios. É integrar a conversa do navegador de forma passiva. Veja como fechar a lacuna de dados entre o WhatsApp e o seu CRM.'
      },
      {
        day: 'Dia 6',
        channel: 'LinkedIn',
        medium: 'Vídeo Longo',
        pillar: 'Território 1: Zero-Dashboard',
        focus: 'Matriz comparativa contra painéis pesados de IA',
        angle: 'Duelo de Recursos',
        visual: 'Vídeo explicativo de 2 minutos. Comparação direta de cliques e interações para obter a mesma sugestão de follow-up em sidebars (Gemini, Claude) vs. Maestro inline.',
        copy: 'Pare de atuar como configurador de prompts. O Maestro resolve o contexto comercial de forma invisível.'
      },
      {
        day: 'Dia 7',
        channel: 'Newsletter de Clientes',
        medium: 'Campanha de E-mail',
        pillar: 'Território 2: Atalho de Homologação',
        focus: 'As 3 perguntas cruciais para a TI aprovar IAs',
        angle: 'Checklist de Autoridade',
        visual: 'Card minimalista com a listagem de segurança pronta para impressão e envio interno.',
        copy: 'Assunto: 3 perguntas fundamentais antes de aprovar a próxima extensão de IA.\n\nCompliance de TI não deve ser o obstáculo da agilidade comercial. Antes de liberar uma extensão no navegador de seus vendedores, verifique:\n1. O processamento dos dados comerciais é local ou ocorre em servidores em nuvem? (O Maestro executa tudo localmente, sem bancos externos).\n2. As mensagens são usadas para treinar modelos públicos de LLM? (No Maestro, dados de clientes são mantidos sob sigilo local).\n3. O sistema depende de APIs diretas ou de matches de DOM no navegador?\n\nBaixe nosso Blueprint de Homologação e reduza em 30 dias as aprovações internas com a TI.'
      }
    ]
  }
};

export default function MaestroCaseStudy() {
  const language = useLanguageStore((state) => state.language);
  const t = TRANSLATIONS[language];
  const [activeDay, setActiveDay] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020d0a] text-slate-100 font-sans selection:bg-emerald-500 selection:text-white pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-emerald-950/20 via-emerald-900/5 to-transparent pointer-events-none z-0" />
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#020d0a]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-xs tracking-widest text-emerald-400 font-bold hover:text-white transition-colors">
          {t.back}
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">{t.languageSelector}:</span>
          <button 
            onClick={() => useLanguageStore.getState().toggleLanguage()}
            className="text-xs font-bold text-white bg-emerald-950 border border-emerald-500/30 rounded px-2.5 py-1 hover:bg-emerald-900 transition-colors"
          >
            {language === 'en' ? 'Português' : 'English'}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative max-w-5xl mx-auto px-6 md:px-12 pt-12 z-10">
        
        {/* Project Header */}
        <section className="mb-16">
          <div className="text-xs font-mono text-emerald-400 tracking-wider mb-2 uppercase">{t.meta.client}</div>
          <h1 className="text-4xl md:text-5xl font-serif font-normal text-white leading-tight mb-6">
            {t.projectOverview}
          </h1>
          <p className="text-lg text-slate-400 font-sans max-w-3xl mb-8 leading-relaxed">
            {t.meta.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-b border-white/5 py-6">
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">{t.role}</span>
              <span className="text-sm font-medium text-slate-200">{t.meta.roleVal}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">{t.timeline}</span>
              <span className="text-sm font-medium text-slate-200">{t.meta.timeVal}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Status</span>
              <span className="inline-flex items-center text-xs font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded">
                ● Executed Strategy
              </span>
            </div>
          </div>
        </section>

        {/* Phase 1: Strategic Territories */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-serif text-white mb-2">{t.positioningTitle}</h2>
            <p className="text-sm text-slate-400">{t.positioningSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.territories.map((territory) => (
              <div 
                key={territory.id} 
                className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300 shadow-xl"
              >
                <h3 className="text-base font-semibold text-white mb-4 border-b border-white/5 pb-3 font-serif">
                  {territory.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{territory.desc}</p>
                <div className="bg-emerald-950/20 border border-emerald-500/10 rounded-lg p-4 text-xs">
                  <span className="block font-semibold text-emerald-400 uppercase tracking-wider mb-1 text-[10px]">{t.concept}</span>
                  <p className="text-slate-300 italic font-sans">"{territory.concept}"</p>
                </div>
                <div className="mt-4 text-xs text-slate-400">
                  <span className="block font-semibold text-slate-300 uppercase tracking-wider mb-1 text-[10px]">{t.keyNarrative}</span>
                  <p>{territory.narrative}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Glossary Section */}
          <div className="mt-10 bg-neutral-900/20 border border-white/5 rounded-xl p-6 md:p-8">
            <h4 className="text-base font-serif text-white mb-2">{t.glossary.title}</h4>
            <p className="text-sm text-slate-400 mb-6">{t.glossary.desc}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.glossary.terms.map((item, index) => (
                <div key={index} className="bg-neutral-900/50 border border-white/5 rounded-lg p-3">
                  <span className="block text-xs font-bold text-emerald-400 font-mono mb-1">{item.word}</span>
                  <span className="text-[10px] text-slate-400 leading-snug">{item.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2: Medium Selection */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-serif text-white mb-2">{t.channelsTitle}</h2>
            <p className="text-sm text-slate-400">{t.channelsSub}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/5 bg-neutral-900/10 rounded-xl overflow-hidden shadow-xl">
              <thead>
                <tr className="bg-neutral-900/60 text-[10px] uppercase tracking-wider text-slate-400 border-b border-white/5">
                  <th className="py-4 px-6 font-semibold">Territory</th>
                  <th className="py-4 px-6 font-semibold">Video Strategy</th>
                  <th className="py-4 px-6 font-semibold">Written Content</th>
                  <th className="py-4 px-6 font-semibold">Product Email Drips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-slate-300">
                {t.formats.map((row, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-serif font-bold text-white align-top w-1/4">{row.t}</td>
                    <td className="py-4 px-6 align-top w-1/4 leading-relaxed">{row.video}</td>
                    <td className="py-4 px-6 align-top w-1/4 leading-relaxed">{row.written}</td>
                    <td className="py-4 px-6 align-top w-1/4 leading-relaxed">{row.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 3: Operational Chronogram & Copy Drafts */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-2xl font-serif text-white mb-2">{t.chronogramTitle}</h2>
            <p className="text-sm text-slate-400">{t.chronogramSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Days list (left) */}
            <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-2 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0">
              {t.days.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl flex flex-col items-start transition-all duration-200 border whitespace-nowrap lg:whitespace-normal ${
                    activeDay === idx
                      ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-lg shadow-emerald-950/20'
                      : 'bg-neutral-900/20 border-white/5 text-slate-400 hover:bg-neutral-900/50 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase mb-1">{item.day}</span>
                  <span className="text-sm font-semibold truncate w-full">{item.medium}</span>
                  <span className="text-[10px] opacity-75 truncate w-full mt-0.5">{item.pillar}</span>
                </button>
              ))}
            </div>

            {/* Day details (right) */}
            <div className="lg:col-span-8 bg-neutral-900/20 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-2xl">
              <div>
                <div className="flex justify-between items-start border-b border-white/5 pb-4 mb-6">
                  <div>
                    <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                      {t.days[activeDay].channel}
                    </span>
                    <h3 className="text-xl font-serif text-white font-normal">
                      {t.days[activeDay].focus}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] text-slate-500 uppercase tracking-widest">Angle</span>
                    <span className="text-xs text-slate-300 font-medium">{t.days[activeDay].angle}</span>
                  </div>
                </div>

                {/* Visual Description */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">{t.visualFlow}</h4>
                  <p className="text-sm text-slate-200 leading-relaxed bg-black/40 border border-white/5 rounded-lg p-4">
                    {t.days[activeDay].visual}
                  </p>
                </div>

                {/* Copy draft */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">{t.copyDraftTitle}</h4>
                    <button 
                      onClick={() => handleCopy(t.days[activeDay].copy, activeDay)}
                      className="text-[10px] font-bold text-emerald-400 hover:text-white bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/20 rounded-md px-2.5 py-1 transition-colors"
                    >
                      {copiedIndex === activeDay ? t.copiedMsg : t.copyBtn}
                    </button>
                  </div>
                  <pre className="text-xs text-slate-300 leading-relaxed bg-emerald-950/10 border border-emerald-500/10 rounded-lg p-5 font-mono whitespace-pre-wrap select-text selection:bg-emerald-500 selection:text-white">
                    {t.days[activeDay].copy}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
