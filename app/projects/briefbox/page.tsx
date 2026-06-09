'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguageStore } from '@stores';


const TRANSLATIONS = {
  en: {
    back: '← BACK TO PORTFOLIO',
    role: 'Role',
    timeline: 'Timeline',
    projectOverview: 'Project Overview',
    projectOverviewSub: 'Zero-setup, local client-side assistant that unifies commercial conversations.',
    positioningTitle: 'Phase 1: Strategic Territories',
    positioningSub: 'How Briefbox positions itself against prompt-heavy AI sidebars and security concerns.',
    channelsTitle: 'Phase 2: Distribution Channels',
    channelsSub: 'Content formats optimized for minimal consumption friction and maximum outreach.',
    chronogramTitle: 'Phase 3: Operational Chronogram & Copy Drafts',
    chronogramSub: 'Interactive 7-day chronogram skeleton with ready-to-use copywriting campaigns.',
    copyDraftTitle: 'Copywriting Draft (PT-BR)',
    copyBtn: 'Copy Copy',
    copiedMsg: 'Copied!',
    visualFlow: 'Visual Flow & Narrative',
    concept: 'Strategic Concept',
    keyNarrative: 'Key Narrative',
    verbalConstraints: 'Verbal & Visual Tone Constraints',
    languageSelector: 'PT',
    portuguese: 'Português',
    english: 'English',
    meta: {
      client: 'Briefbox Chrome Extension',
      roleVal: 'Senior Brand Planner & Content Systems Engineer',
      timeVal: 'Q1-Q2 2026',
      intro: 'Briefbox is a client-side Chrome extension designed to solve context-switching fatigue and lead abandonment for inside sales professionals (SDRs and AEs) by passively stitching multi-channel conversation threads into a unified local context. It operates passively within the user\'s active browser session without requiring manual database synchronization or central dashboards.',
    },
    glossary: {
      title: 'Brazilian Inside Sales Terms Integrated',
      desc: 'To build trust with Brazilian sales teams, communication naturally incorporates specific commercial terminology:',
      terms: [
        { word: 'Vendas complexas', meaning: 'Complex B2B sales cycles requiring deep context retention.' },
        { word: 'Leads frios / quentes', meaning: 'Inactive vs. active prospects in the pipeline.' },
        { word: 'Funil de vendas', meaning: 'The structured stages of sales progression.' },
        { word: 'Prospecção ativa', meaning: 'Outbound outreach and discovery actions.' },
        { word: 'Abordagem', meaning: 'Initial touchpoint and messaging strategy.' },
        { word: 'Cadência de prospecção', meaning: 'Sequence of touchpoints across channels.' },
        { word: 'Follow-up', meaning: 'Actionable contact points to move deals forward.' },
        { word: 'Taxa de conversão', meaning: 'Conversion rates at different funnel stages.' }
      ]
    },
    territories: [
      {
        id: 't1',
        title: 'Territory 1: Anti-Prompting (O Fim do Prompt)',
        desc: 'Busy sales reps do not have time to copy-paste data, build prompts, or manage AI configurations. Briefbox operates with zero prompting and zero friction. It reads the DOM of active tabs passively and delivers the contextual answer directly where the rep already is.',
        concept: 'Stop prompting. Start selling. The first AI that reads your browser context and acts, zero typing required.',
        narrative: 'AI is only useful if it doesn\'t add to the representative\'s task list. Traditional generative AI tools require the rep to initiate, prompt, and guide. Briefbox reverses this flow by passively extracting context and suggesting follow-up drafts.'
      },
      {
        id: 't2',
        title: 'Territory 2: Privacy-by-Default (Segurança Local na Ponta)',
        desc: 'Enterprise IT departments routinely block Chrome extensions due to server-side scraping and data security risks. Briefbox operates strictly inside the user\'s active, authenticated browser session (local DOM parsing), keeping sensitive pipeline details within the client-side environment.',
        concept: 'The AI sales assistant approved by security on Day 1. Local-only DOM reading means zero data leaves your browser to train public models.',
        narrative: 'Security compliance is not a barrier to sales enablement. By avoiding central databases and cloud scraping, Briefbox is company-ready from day one, offering pre-configured .reg files and ADMX templates for automated deployment.'
      },
      {
        id: 't3',
        title: 'Territory 3: WhatsApp-First Brazilian Reality (Omnichannel do Close)',
        desc: 'In Brazil, vendas complexas are initiated in Gmail or Outlook but negotiated and closed inside WhatsApp Web. This cross-channel fragmentation leads to broken communication and premature lead abandonment.',
        concept: 'Your CRM is blind to WhatsApp. Briefbox brings your CRM, LinkedIn, and Gmail threads into WhatsApp Web passively, stopping lead abandonment in its tracks.',
        narrative: 'If a deal isn\'t tracked across WhatsApp and email, it doesn\'t exist. Briefbox acts as the lightweight contextual bridge that ties these threads together locally, ensuring that a WhatsApp chat is instantly mapped to the historical context of a proposal sent via email.'
      }
    ],
    formats: [
      {
        t: 'Territory 1: Anti-Prompting',
        video: 'Short-form: High-contrast, rapid screen-recordings highlighting the speed of context retrieval. Showing the immediate slide-in of the Briefbox sidebar generating a follow-up draft in real-time as soon as a chaotic chat page is loaded.',
        written: 'Social: Text-based LinkedIn posts detailing the cognitive cost of context-switching and why sales reps resist tools that require manual data inputs or prompt engineering.',
        email: 'Product: Onboarding tutorials focusing on "Zero-Setup Value"—showing users how the extension automatically starts working on active tabs.'
      },
      {
        t: 'Territory 2: Privacy-by-Default',
        video: 'Long-form: Technical walkthroughs inspecting the network tab to prove that raw customer data does not leave the local browser environment. Demonstrations of ADMX deployment.',
        written: 'Articles: Detailed LinkedIn articles and technical blogs written for CIOs, CISOs, and Heads of Sales Operations explaining the architecture of Local DOM Parsing.',
        email: 'Product: Enterprise nurture sequences delivering security whitepapers, compliance sheets, and ready-to-run installation guides directly to decision-makers.'
      },
      {
        t: 'Territory 3: WhatsApp-First Reality',
        video: 'Short-form: Storytelling-focused vertical videos highlighting the classic SDR/AE struggle of jumping between Outlook, WhatsApp Web, and LinkedIn to find what a client last agreed to.',
        written: 'Social: Highly relatable Brazilian sales content analyzing the statistics of lead abandonment in B2B and the impact on the conversion rates.',
        email: 'Product: Weekly digest emails containing conversion optimization templates, structured follow-up cadences, and local sales process frameworks.'
      }
    ],
    days: [
      {
        day: 'Day 1',
        channel: 'LinkedIn / Instagram',
        medium: 'Short-form Video',
        pillar: 'Territory 1: Anti-Prompting',
        focus: 'Passive DOM parsing vs. manual prompting',
        angle: 'Pattern Interrupt (Problem-Solution)',
        visual: 'Split screen: Left side shows frustrated SDR copying WhatsApp, opening ChatGPT, typing prompt. Right side shows SDR opening WhatsApp chat, Briefbox automatically sliding open, showing last Outlook email and generating follow-up draft.',
        copy: 'Você foi contratado para vender ou para treinar inteligência artificial?\n\nSe você passa o dia copiando conversas do WhatsApp Web, colando no ChatGPT e escrevendo prompts gigantes para tentar conseguir um e-mail de acompanhamento aceitável, você está perdendo tempo e vendas.\n\nO Briefbox resolve isso de forma passiva. Ele lê suas abas ativas localmente, cruza o histórico do Gmail/Outlook com o WhatsApp e gera a resposta ideal no exato momento em que você abre a aba. Sem preenchimento manual, sem dashboards extras e sem perda de contexto no seu funil de vendas.\n\nComece grátis hoje mesmo com até 5 unificações automáticas de thread por dia.'
      },
      {
        day: 'Day 2',
        channel: 'LinkedIn / X (Twitter)',
        medium: 'Written (Social Post)',
        pillar: 'PLG Value Realization',
        focus: 'Free tier limits & Pro upgrade triggers',
        angle: 'Value-First / Accessibility',
        visual: 'High-contrast graphic showing the three tiers (Free, Pro, Team/Enterprise) with clear feature gates.',
        copy: 'O maior inimigo da sua cadência de prospecção é o atrito. Por isso, desenhamos a precificação do Briefbox para se pagar no primeiro lead recuperado:\n\n🆓 Plano Free: Até 5 unificações automáticas de threads por dia. Ideal para quem está testando o fluxo local e precisa organizar as abas principais de Gmail, Outlook e WhatsApp Web.\n\n⚡ Plano Pro ($19/mês faturado anualmente): Unificações em background ilimitadas, painéis de contexto de multi-aplicativos ativos e rascunhos de follow-up automáticos em tempo real. Feito para AEs e SDRs que operam pipelines com mais de 30 leads ativos.\n\n🏢 Plano Team/Enterprise ($49/seat/mês): Modelos de follow-up compartilhados para todo o time, regras locais de prompt personalizadas e pacotes de implantação corporativa (.reg e ADMX) para a TI.\n\nPare de perder leads frios por falta de histórico. Instale o Briefbox e ganhe agilidade no seu navegador.'
      },
      {
        day: 'Day 3',
        channel: 'LinkedIn',
        medium: 'Written (Text Article)',
        pillar: 'Territory 3: WhatsApp-First',
        focus: 'WhatsApp to email fragmentation in Brazil',
        angle: 'Cultural Reality (Analytical)',
        visual: 'Text-only, high-engagement LinkedIn post formatting.',
        copy: 'Por que a taxa de conversão em vendas complexas cai tanto no Brasil?\n\nPorque nós temos uma dinâmica comercial única no mundo: o primeiro contato (abordagem) acontece por e-mail, mas a negociação real migra rapidamente para o WhatsApp Web.\n\nO problema? O histórico fica fragmentado:\n1. O contrato de vendas e a proposta formal estão no Outlook.\n2. As objeções e o feedback de preço estão no WhatsApp.\n3. O CRM fica desatualizado porque o vendedor não tem tempo de transcrever a conversa.\n\nResultado: 32% dos leads são abandonados prematuramente porque o rep simplesmente perde o contexto ou esquece de fazer o follow-up no timing correto.\n\nO Briefbox foi feito para essa realidade. Como uma extensão leve de navegador, ele une as pontas de forma 100% local, mostrando o histórico do e-mail ao lado do chat do WhatsApp. Sem esforço manual, sem quebrar o processo.'
      },
      {
        day: 'Day 4',
        channel: 'LinkedIn / Tech Blog',
        medium: 'Written (Technical Post)',
        pillar: 'Territory 2: Privacy-by-Default',
        focus: 'De-risking local browser DOM for IT',
        angle: 'Authority / Security Validation',
        visual: 'High-fidelity architectural mockup illustrating client-side parsing vs. cloud database storage.',
        copy: 'Sua equipe comercial quer usar IA para agilizar os follow-ups, mas a equipe de TI bloqueou a extensão de navegador. A culpa não é deles.\n\nA maioria das extensões envia dados sensíveis de clientes e propostas comerciais para servidores externos para processamento e treinamento de modelos. Para empresas que lidam com vendas complexas e contratos sob sigilo, isso é um risco inaceitável de segurança e conformidade (LGPD/GDPR).\n\nÉ por isso que projetamos o Briefbox sob o modelo de Local DOM Parsing.\n\n🔒 Processamento Local: O parsing de dados ocorre inteiramente dentro da sessão do navegador ativo do usuário. Nada de extração massiva ou armazenamento em nuvens externas de terceiros.\n🏢 Deployment Pronto para TI: Disponibilizamos chaves de registro prontas (.reg) e modelos ADMX para implantação automatizada em larga escala.\n\nProdutividade para o comercial, segurança absoluta para a governança corporativa. Baixe nosso material de segurança e apresente ao seu time de TI.'
      },
      {
        day: 'Day 5',
        channel: 'LinkedIn',
        medium: 'Written (Comparison)',
        pillar: 'Territory 1: Anti-Prompting',
        focus: 'Competitive differences: Gemini vs. Claude',
        angle: 'Competitive Positioning / Clarity',
        visual: 'Comparison table matrix comparing Briefbox, Google Gemini for Workspace, and Claude Cowork.',
        copy: 'IA para vendas: Por que ferramentas generalistas falham no dia a dia da operação comercial?\n\nVamos comparar os modelos de assistência de produtividade:\n\n1️⃣ Google Gemini para Workspace: Extremamente útil, mas limitado ao ecossistema Google. Ele não consegue cruzar o histórico de um e-mail do Gmail com uma janela ativa do WhatsApp Web ou do Outlook. Além disso, exige que o usuário tome a iniciativa (proativo vs. passivo).\n\n2️⃣ Claude Cowork: Excelente para automações pesadas de desktop, mas caro, complexo de configurar e focado em rodar fluxos inteiros de trabalho de forma autônoma. Não possui a leitura leve e em tempo real do DOM do navegador.\n\n3️⃣ Briefbox: Uma ponte contextual leve, client-side e focada exclusivamente no navegador. Ele monitora passivamente suas abas comerciais ativas e oferece suporte imediato na tela, reduzindo o custo de transação de cada mensagem de follow-up.\n\nNão mude sua rotina. Melhore a velocidade dela.'
      },
      {
        day: 'Day 6',
        channel: 'Email (Product Nurture)',
        medium: 'Email Newsletter',
        pillar: 'PLG Value Realization',
        focus: 'Moving from free limits to Pro Tier workflows',
        angle: 'Performance Upgrade / Scarcity',
        visual: 'Layout highlighting an inbox limitation card with a call-to-action upgrade banner.',
        copy: 'Assunto: Seu limite de 5 unificações diárias expirou. Não perca o controle do funil.\n\nOlá,\n\nHoje, o Briefbox ajudou você a unificar o contexto de 5 oportunidades de vendas diretamente no seu navegador. Você economizou tempo e evitou o desgaste mental de buscar históricos entre e-mail e WhatsApp.\n\nMas e os outros leads que continuam frios na sua fila de hoje?\n\nSe você gerencia um funil de vendas complexas ativo, limitar sua visão contextual significa deixar dinheiro na mesa.\n\nAssine o Briefbox Pro por apenas $19/mês (faturamento anual) e remova todos os limites:\n* Unificação automática de conversas em background sem limite diário.\n* Painéis de contexto ativos integrados em tempo real na tela.\n* Rascunhos de e-mail e mensagens de WhatsApp sugeridos instantaneamente.\n\n[Quero migrar para o Pro agora]'
      },
      {
        day: 'Day 7',
        channel: 'LinkedIn',
        medium: 'Written (Case Study style)',
        pillar: 'Territory 2 & Team Tiers',
        focus: 'Team templates, custom prompts & ADMX deployment',
        angle: 'Enterprise Scalability',
        visual: 'Screenshot of the Team Management panel showing where custom prompts and template repositories are set up.',
        copy: 'Escalar vendas complexas exige padronização. Se cada representante escreve um e-mail de acompanhamento usando abordagens diferentes, sua taxa de conversão torna-se imprevisível.\n\nMas forçar o time a preencher o CRM para obter essa padronização destrói a produtividade do time comercial.\n\nO Briefbox Enterprise resolve isso nos dois lados:\n* Modelos Compartilhados: Distribua os melhores scripts de follow-up e abordagens direto para o navegador de cada vendedor.\n* Regras Locais de Prompt: Configure diretrizes de redação específicas da sua marca sem expor dados confidenciais a servidores públicos.\n* Deployment ADMX: Distribuição centralizada e silenciosa para milhares de máquinas via rede interna.\n\nAcelere seu funil de vendas com conformidade e controle. Entre em contato com nossa equipe para agendar uma demonstração corporativa.'
      }
    ]
  },
  pt: {
    back: '← VOLTAR PARA O PORTFÓLIO',
    role: 'Função',
    timeline: 'Cronograma',
    projectOverview: 'Visão Geral do Projeto',
    projectOverviewSub: 'Assistente local sem configurações que unifica conversas comerciais.',
    positioningTitle: 'Fase 1: Territórios Estratégicos',
    positioningSub: 'Como o Briefbox se posiciona contra painéis complexos e preocupações de segurança.',
    channelsTitle: 'Fase 2: Canais de Distribuição',
    channelsSub: 'Formatos de conteúdo otimizados para baixo atrito de consumo e alcance de algoritmo.',
    chronogramTitle: 'Fase 3: Cronograma Operacional e Rascunhos de Copy',
    chronogramSub: 'Esqueleto de cronograma de 7 dias com campanhas e redações prontas.',
    copyDraftTitle: 'Rascunho de Copy (PT-BR)',
    copyBtn: 'Copiar Texto',
    copiedMsg: 'Copiado!',
    visualFlow: 'Fluxo Visual e Narrativa',
    concept: 'Conceito Estratégico',
    keyNarrative: 'Narrativa Principal',
    verbalConstraints: 'Restrições Verbais e Visuais de Tom',
    languageSelector: 'EN',
    portuguese: 'Português',
    english: 'English',
    meta: {
      client: 'Briefbox Chrome Extension',
      roleVal: 'Senior Brand Planner & Content Systems Engineer',
      timeVal: 'Q1-Q2 2026',
      intro: 'O Briefbox é uma extensão de navegador Chrome projetada para eliminar a fadiga de troca de contexto e a perda de leads para profissionais de vendas complexas. Ele atua passivamente lendo o DOM das abas abertas de e-mail e WhatsApp, construindo um contexto único local e sugerindo respostas prontas de follow-up de forma imediata.',
    },
    glossary: {
      title: 'Terminologia de Vendas Integrada',
      desc: 'Para criar conexão direta com os times comerciais brasileiros, a comunicação integra termos de vendas do ecossistema local:',
      terms: [
        { word: 'Vendas complexas', meaning: 'Ciclos longos de vendas B2B que exigem grande retenção de contexto.' },
        { word: 'Leads frios / quentes', meaning: 'Contatos inativos vs. ativos e quentes no funil.' },
        { word: 'Funil de vendas', meaning: 'As etapas estruturadas de progressão do negócio.' },
        { word: 'Prospecção ativa', meaning: 'Esforço de outbound para abertura de novos leads.' },
        { word: 'Abordagem', meaning: 'O tom e a mensagem inicial de contato.' },
        { word: 'Cadência de prospecção', meaning: 'A sequência e canais de contato estruturados.' },
        { word: 'Follow-up', meaning: 'Pontos de contato ativos para avançar a venda.' },
        { word: 'Taxa de conversão', meaning: 'Métricas de conversão entre etapas do funil.' }
      ]
    },
    territories: [
      {
        id: 't1',
        title: 'Território 1: Anti-Prompting (O Fim do Prompt)',
        desc: 'Vendedores ocupados não têm tempo para copiar e colar dados no ChatGPT, escrever instruções ou gerenciar telas adicionais. O Briefbox funciona com zero prompting e zero fricção. Ele lê o DOM das abas de WhatsApp e Gmail de forma passiva e entrega a resposta certa onde o vendedor já está.',
        concept: 'Pare de escrever prompts. Comece a vender. A primeira IA que lê o contexto do navegador e age sem você precisar digitar instruções.',
        narrative: 'A inteligência artificial só ajuda se não adicionar trabalho na lista do vendedor. Ferramentas tradicionais geram esforço cognitivo (copiar, colar, instruir). O Briefbox inverte esse fluxo trazendo o rascunho de forma passiva.'
      },
      {
        id: 't2',
        title: 'Território 2: Privacy-by-Default (Segurança Local na Ponta)',
        desc: 'Departamentos de TI corporativos bloqueiam extensões de navegador por motivos de vazamento de dados de clientes e scraping. O Briefbox atua 100% de forma local, rodando na sessão ativa do usuário sem bancos de dados centrais ou exportação de CRM.',
        concept: 'O assistente de vendas aprovado pela TI no primeiro dia. Processamento local significa que nenhum dado confidencial sai do navegador.',
        narrative: 'Compliance de segurança não precisa travar a produtividade comercial. Ao evitar armazenamento na nuvem e treinamento público de modelos, o Briefbox é homologado de imediato, oferecendo chaves de registro prontas (.reg) e ADMX.'
      },
      {
        id: 't3',
        title: 'Território 3: WhatsApp-First Reality (Omnichannel do Close)',
        desc: 'No Brasil, vendas complexas nascem no e-mail (Gmail/Outlook) mas as negociações e o fechamento acontecem no WhatsApp Web. Essa quebra de canal gera perda de contexto e abandono precoce de leads.',
        concept: 'Seu CRM não enxerga o WhatsApp. O Briefbox integra o histórico de e-mail e CRM ao WhatsApp de forma local, evitando que negócios se percam por falta de registro.',
        narrative: 'Se uma conversa de WhatsApp não está conectada ao e-mail, ela se perde no fluxo operacional. O Briefbox age como a ponte contextual leve, exibindo a proposta enviada por e-mail logo ao lado da conversa ativa de WhatsApp.'
      }
    ],
    formats: [
      {
        t: 'Território 1: O Fim do Prompt',
        video: 'Curto: Gravações de tela rápidas contrastando a perda de tempo digitando prompts no ChatGPT vs. o Briefbox gerando a resposta em 3 segundos direto no WhatsApp Web.',
        written: 'Social: Posts focados no custo de transação mental e fadiga que ferramentas adicionais trazem para SDRs que gerenciam pipelines de alto volume.',
        email: 'Fluxo: Onboarding focado em "Zero Configuração" - mostrando como a extensão começa a funcionar no navegador do usuário imediatamente após instalar.'
      },
      {
        t: 'Território 2: Segurança Local',
        video: 'Longo: Detalhamento técnico mostrando a aba "Network" do navegador para provar que nenhum dado sensível de CRM sai da máquina para servidores externos.',
        written: 'Artigo: Análises de arquitetura no LinkedIn para CIOs e diretores de vendas sobre as diferenças de processamento local vs. na nuvem.',
        email: 'Fluxo: Campanhas direcionadas com whitepapers de segurança, checklist de compliance e guias prontos para implantação automática via GPO.'
      },
      {
        t: 'Território 3: WhatsApp Omnichannel',
        video: 'Curto: Vídeos verticais de storytelling mostrando a rotina estressante de buscar propostas em e-mails enquanto atende um cliente com pressa no WhatsApp.',
        written: 'Social: Análise de dados de leads perdidos no Brasil porque vendedores não conseguem manter o CRM e as mensagens integradas manualmente.',
        email: 'Fluxo: Dicas semanais de estratégias de fechamento e cadências de prospecção aplicadas à realidade omnichannel brasileira.'
      }
    ],
    days: [
      {
        day: 'Dia 1',
        channel: 'LinkedIn / Instagram',
        medium: 'Vídeo Curto',
        pillar: 'Território 1: Anti-Prompting',
        focus: 'DOM parsing passivo vs. prompting manual',
        angle: 'Quebra de Padrão (Problema-Solução)',
        visual: 'Tela dividida: Lado esquerdo mostra vendedor frustrado copiando WhatsApp e colando no ChatGPT. Lado direito mostra vendedor abrindo WhatsApp, o Briefbox surge e exibe a última conversa e gera o follow-up direto.',
        copy: 'Você foi contratado para vender ou para treinar inteligência artificial?\n\nSe você passa o dia copiando conversas do WhatsApp Web, colando no ChatGPT e escrevendo prompts gigantes para tentar conseguir um e-mail de acompanhamento aceitável, você está perdendo tempo e vendas.\n\nO Briefbox resolve isso de forma passiva. Ele lê suas abas ativas localmente, cruza o histórico do Gmail/Outlook com o WhatsApp e gera a resposta ideal no exato momento em que você abre a aba. Sem preenchimento manual, sem dashboards extras e sem perda de contexto no seu funil de vendas.\n\nComece grátis hoje mesmo com até 5 unificações automáticas de thread por dia.'
      },
      {
        day: 'Dia 2',
        channel: 'LinkedIn / X (Twitter)',
        medium: 'Post Escrito',
        pillar: 'Realização de Valor PLG',
        focus: 'Limites do plano grátis & upgrade Pro',
        angle: 'Gatilho de Valor e Acessibilidade',
        visual: 'Gráfico minimalista contrastando as três faixas (Gratuito, Pro, Equipes) com os gatilhos claros de recursos.',
        copy: 'O maior inimigo da sua cadência de prospecção é o atrito. Por isso, desenhamos a precificação do Briefbox para se pagar no primeiro lead recuperado:\n\n🆓 Plano Free: Até 5 unificações automáticas de threads por dia. Ideal para quem está testando o fluxo local e precisa organizar as abas principais de Gmail, Outlook e WhatsApp Web.\n\n⚡ Plano Pro ($19/mês faturado anualmente): Unificações em background ilimitadas, painéis de contexto de multi-aplicativos ativos e rascunhos de follow-up automáticos em tempo real. Feito para AEs e SDRs que operam pipelines com mais de 30 leads ativos.\n\n🏢 Plano Team/Enterprise ($49/seat/mês): Modelos de follow-up compartilhados para todo o time, regras locais de prompt personalizadas e pacotes de implantação corporativa (.reg e ADMX) para a TI.\n\nPare de perder leads frios por falta de histórico. Instale o Briefbox e ganhe agilidade no seu navegador.'
      },
      {
        day: 'Dia 3',
        channel: 'LinkedIn',
        medium: 'Artigo Escrito',
        pillar: 'Território 3: WhatsApp-First',
        focus: 'Fragmentação de canais de vendas no Brasil',
        angle: 'Realidade Cultural (Analítico)',
        visual: 'Formatação de post de alta leitura e engajamento nativo no LinkedIn.',
        copy: 'Por que a taxa de conversão em vendas complexas cai tanto no Brasil?\n\nPorque nós temos uma dinâmica comercial única no mundo: o primeiro contato (abordagem) acontece por e-mail, mas a negociação real migra rapidamente para o WhatsApp Web.\n\nO problema? O histórico fica fragmentado:\n1. O contrato de vendas e a proposta formal estão no Outlook.\n2. As objeções e o feedback de preço estão no WhatsApp.\n3. O CRM fica desatualizado porque o vendedor não tem tempo de transcrever a conversa.\n\nResultado: 32% dos leads são abandonados prematuramente porque o rep simplesmente perde o contexto ou esquece de fazer o follow-up no timing correto.\n\nO Briefbox foi feito para essa realidade. Como uma extensão leve de navegador, ele une as pontas de forma 100% local, mostrando o histórico do e-mail ao lado do chat do WhatsApp. Sem esforço manual, sem quebrar o processo.'
      },
      {
        day: 'Dia 4',
        channel: 'LinkedIn / Tech Blog',
        medium: 'Post Técnico',
        pillar: 'Território 2: Segurança Local',
        focus: 'Redução de riscos no DOM local para TI',
        angle: 'Autoridade e Validação de Segurança',
        visual: 'Infográfico mostrando a arquitetura de parsing local client-side vs. bancos de dados centralizados.',
        copy: 'Sua equipe comercial quer usar IA para agilizar os follow-ups, mas a equipe de TI bloqueou a extensão de navegador. A culpa não é deles.\n\nA maioria das extensões envia dados sensíveis de clientes e propostas comerciais para servidores externos para processamento e treinamento de modelos. Para empresas que lidam com vendas complexas e contratos sob sigilo, isso é um risco inaceitável de segurança e conformidade (LGPD/GDPR).\n\nÉ por isso que projetamos o Briefbox sob o modelo de Local DOM Parsing.\n\n🔒 Processamento Local: O parsing de dados ocorre inteiramente dentro da sessão do navegador ativo do usuário. Nada de extração massiva ou armazenamento em nuvens externas de terceiros.\n🏢 Deployment Pronto para TI: Disponibilizamos chaves de registro prontas (.reg) e modelos ADMX para implantação automatizada em larga escala.\n\nProdutividade para o comercial, segurança absoluta para a governança corporativa. Baixe nosso material de segurança e apresente ao seu time de TI.'
      },
      {
        day: 'Dia 5',
        channel: 'LinkedIn',
        medium: 'Post de Comparação',
        pillar: 'Território 1: Anti-Prompting',
        focus: 'Diferenças competitivas: Gemini vs. Claude vs. Briefbox',
        angle: 'Posicionamento Competitivo e Clareza',
        visual: 'Matriz comparativa destacando os pontos fortes e limitações de cada assistente de produtividade.',
        copy: 'IA para vendas: Por que ferramentas generalistas falham no dia a dia da operação comercial?\n\nVamos comparar os modelos de assistência de produtividade:\n\n1️⃣ Google Gemini para Workspace: Extremamente útil, mas limitado ao ecossistema Google. Ele não consegue cruzar o histórico de um e-mail do Gmail com uma janela ativa do WhatsApp Web ou do Outlook. Além disso, exige que o usuário tome a iniciativa (proativo vs. passivo).\n\n2️⃣ Claude Cowork: Excelente para automações pesadas de desktop, mas caro, complexo de configurar e focado em rodar fluxos inteiros de trabalho de forma autônoma. Não possui a leitura leve e em tempo real do DOM do navegador.\n\n3️⃣ Briefbox: Uma ponte contextual leve, client-side e focada exclusivamente no navegador. Ele monitora passivamente suas abas comerciais ativas e oferece suporte imediato na tela, reduzindo o custo de transação de cada mensagem de follow-up.\n\nNão mude sua rotina. Melhore a velocidade dela.'
      },
      {
        day: 'Dia 6',
        channel: 'E-mail (Nutrição de Produto)',
        medium: 'Newsletter',
        pillar: 'Realização de Valor PLG',
        focus: 'Transição do limite grátis para a assinatura Pro',
        angle: 'Upgrade de Desempenho e Escassez',
        visual: 'Layout simulando um aviso de cota máxima com banner e link rápido de checkout para o plano Pro.',
        copy: 'Assunto: Seu limite de 5 unificações diárias expirou. Não perca o controle do funil.\n\nOlá,\n\nHoje, o Briefbox ajudou você a unificar o contexto de 5 oportunidades de vendas diretamente no seu navegador. Você economizou tempo e evitou o desgaste mental de buscar históricos entre e-mail e WhatsApp.\n\nMas e os outros leads que continuam frios na sua fila de hoje?\n\nSe você gerencia um funil de vendas complexas ativo, limitar sua visão contextual significa deixar dinheiro na mesa.\n\nAssine o Briefbox Pro por apenas $19/mês (faturamento anual) e remova todos os limites:\n* Unificação automática de conversas em background sem limite diário.\n* Painéis de contexto ativos integrados em tempo real na tela.\n* Rascunhos de e-mail e mensagens de WhatsApp sugeridos instantaneamente.\n\n[Quero migrar para o Pro agora]'
      },
      {
        day: 'Dia 7',
        channel: 'LinkedIn',
        medium: 'Post de Estudo de Caso',
        pillar: 'Território 2 & Planos Corporativos',
        focus: 'Modelos de equipe, regras de prompt e GPO ADMX',
        angle: 'Escalabilidade Enterprise',
        visual: 'Painel visual da tela de administração de equipe de vendas, com controle de prompts centralizados e download do template ADMX.',
        copy: 'Escalar vendas complexas exige padronização. Se cada representante escreve um e-mail de acompanhamento usando abordagens diferentes, sua taxa de conversão torna-se imprevisível.\n\nMas forçar o time a preencher o CRM para obter essa padronização destrói a produtividade do time comercial.\n\nO Briefbox Enterprise resolve isso nos dois lados:\n* Modelos Compartilhados: Distribua os melhores scripts de follow-up e abordagens direto para o navegador de cada vendedor.\n* Regras Locais de Prompt: Configure diretrizes de redação específicas da sua marca sem expor dados confidenciais a servidores públicos.\n* Deployment ADMX: Distribuição centralizada e silenciosa para milhares de máquinas via rede interna.\n\nAcelere seu funil de vendas com conformidade e controle. Entre em contato com nossa equipe para agendar uma demonstração corporativa.'
      }
    ]
  }
};

export default function BriefboxCaseStudy() {
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
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-24">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-950/20 via-indigo-900/5 to-transparent pointer-events-none z-0" />
      
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-xs tracking-widest text-indigo-400 font-bold hover:text-white transition-colors">
          {t.back}
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">{t.languageSelector}:</span>
          <button 
            onClick={() => useLanguageStore.getState().toggleLanguage()}
            className="text-xs font-bold text-white bg-indigo-950 border border-indigo-500/30 rounded px-2.5 py-1 hover:bg-indigo-900 transition-colors"
          >
            {language === 'en' ? 'Português' : 'English'}
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative max-w-5xl mx-auto px-6 md:px-12 pt-12 z-10">
        
        {/* Project Header */}
        <section className="mb-16">
          <div className="text-xs font-mono text-indigo-400 tracking-wider mb-2 uppercase">{t.meta.client}</div>
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
                ● Executed Plan
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
                className="bg-neutral-900/30 border border-white/5 p-6 rounded-xl backdrop-blur-sm hover:border-indigo-500/20 transition-all duration-300 shadow-xl"
              >
                <h3 className="text-base font-semibold text-white mb-4 border-b border-white/5 pb-3 font-serif">
                  {territory.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{territory.desc}</p>
                <div className="bg-indigo-950/20 border border-indigo-500/10 rounded-lg p-4 text-xs">
                  <span className="block font-semibold text-indigo-400 uppercase tracking-wider mb-1 text-[10px]">{t.concept}</span>
                  <p className="text-slate-300 italic">&quot;{territory.concept}&quot;</p>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.glossary.terms.map((item, index) => (
                <div key={index} className="bg-neutral-900/50 border border-white/5 rounded-lg p-3">
                  <span className="block text-xs font-bold text-indigo-400 font-mono mb-1">{item.word}</span>
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
                      ? 'bg-indigo-950/40 border-indigo-500 text-white shadow-lg shadow-indigo-950/20'
                      : 'bg-neutral-900/20 border-white/5 text-slate-400 hover:bg-neutral-900/50 hover:text-white'
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-indigo-400 font-bold uppercase mb-1">{item.day}</span>
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
                    <span className="inline-block text-[10px] font-mono text-indigo-400 bg-indigo-950/50 border border-indigo-500/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
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
                      className="text-[10px] font-bold text-indigo-400 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/20 rounded-md px-2.5 py-1 transition-colors"
                    >
                      {copiedIndex === activeDay ? t.copiedMsg : t.copyBtn}
                    </button>
                  </div>
                  <pre className="text-xs text-slate-300 leading-relaxed bg-indigo-950/10 border border-indigo-500/10 rounded-lg p-5 font-sans whitespace-pre-wrap select-text selection:bg-indigo-500 selection:text-white">
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
