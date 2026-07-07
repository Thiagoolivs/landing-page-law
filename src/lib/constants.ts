import {
  Briefcase,
  Building2,
  Handshake,
  HeartHandshake,
  Home,
  Landmark,
  Scale,
  ShieldCheck,
  Users,
  Clock,
  Eye,
  Award,
  Zap,
  ClipboardCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Site                                                                */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "Advogada Gabriella Coelho",
  shortName: "Gabriella Coelho",
  legalName: "Advogada Gabriella Coelho",
  description:
    "Advocacia full service com mais de 15 anos de atuação estratégica. Atendimento personalizado, sigilo absoluto e atuação especializada em todas as áreas do Direito.",
  url: "https://www.gabriellacoelho.adv.br",
  phone: "+55 11 4000-0000",
  phoneRaw: "+551140000000",
  whatsapp: "5511940000000",
  whatsappDisplay: "(11) 94000-0000",
  email: "contato@gabriellacoelho.adv.br",
  address: {
    street: "Av. Brigadeiro Faria Lima, 4509 — 12º andar",
    district: "Itaim Bibi",
    city: "São Paulo",
    state: "SP",
    zip: "04538-133",
    country: "BR",
  },
  geo: {
    latitude: -23.5868,
    longitude: -46.6812,
  },
  hours: [
    { days: "Segunda a Sexta", time: "08h às 19h" },
    { days: "Sábado", time: "09h às 13h" },
  ],
  oab: "OAB/SP 000.000",
  foundingYear: 2009,
  social: {
    instagram: "https://instagram.com/gabriellacoelho.adv",
    linkedin: "https://linkedin.com/in/gabriella-coelho-adv",
    facebook: "https://facebook.com/gabriellacoelho.adv",
  },
} as const;

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Visitei o site e gostaria de falar com a advogada sobre o meu caso."
);

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${WHATSAPP_MESSAGE}`;

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
  /** Rótulo curto para a barra de navegação (desktop), onde o espaço é escasso. */
  short?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "O Escritório", href: "#sobre", short: "Escritório" },
  { label: "Áreas de Atuação", href: "#areas-de-atuacao", short: "Atuação" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como Funciona", href: "#como-funciona", short: "Processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const TRUST_BADGES = [
  "Atendimento Personalizado",
  "Resposta Rápida",
  "Advogada Especializada",
  "Sigilo Absoluto",
] as const;

/* ------------------------------------------------------------------ */
/* Áreas de atuação                                                    */
/* ------------------------------------------------------------------ */

export interface PracticeArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description:
      "Defesa de trabalhadores e empresas em rescisões, verbas devidas, assédio, acordos e ações trabalhistas complexas.",
  },
  {
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, benefícios negados, revisões e planejamento previdenciário para garantir o que você construiu.",
  },
  {
    icon: Scale,
    title: "Direito Civil",
    description:
      "Contratos, indenizações, responsabilidade civil e resolução de conflitos com estratégia e rigor técnico.",
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description:
      "Assessoria completa para empresas: societário, contratos, recuperação de crédito e prevenção de litígios.",
  },
  {
    icon: Handshake,
    title: "Direito do Consumidor",
    description:
      "Cobranças indevidas, negativação, vícios de produto e serviço. Seus direitos de consumidor levados a sério.",
  },
  {
    icon: HeartHandshake,
    title: "Direito de Família",
    description:
      "Divórcio, guarda, pensão e inventário conduzidos com sensibilidade, discrição e firmeza técnica.",
  },
  {
    icon: Home,
    title: "Direito Imobiliário",
    description:
      "Compra e venda, usucapião, regularização, locações e disputas possessórias com segurança jurídica total.",
  },
  {
    icon: Landmark,
    title: "Direito Tributário",
    description:
      "Planejamento tributário, defesa em execuções fiscais e recuperação de tributos pagos indevidamente.",
  },
];

/* ------------------------------------------------------------------ */
/* Diferenciais                                                        */
/* ------------------------------------------------------------------ */

export interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const DIFFERENTIALS: Differential[] = [
  {
    icon: Users,
    title: "Atendimento humanizado",
    description:
      "Você é atendido diretamente pela advogada, não por scripts. Cada caso recebe a atenção que merece, do início ao fim.",
  },
  {
    icon: Eye,
    title: "Transparência total",
    description:
      "Honorários claros, prognósticos realistas e comunicação honesta sobre cada etapa do seu processo.",
  },
  {
    icon: Award,
    title: "Experiência comprovada",
    description:
      "Mais de 15 anos de atuação e milhares de processos conduzidos em todas as instâncias do Judiciário.",
  },
  {
    icon: Zap,
    title: "Agilidade na resposta",
    description:
      "Retornamos o seu contato em até 24 horas úteis. Urgências jurídicas exigem respostas rápidas.",
  },
  {
    icon: ClipboardCheck,
    title: "Acompanhamento completo",
    description:
      "Atualizações periódicas sobre o andamento do processo, sem que você precise perguntar.",
  },
  {
    icon: Target,
    title: "Estratégia personalizada",
    description:
      "Nenhum caso é igual ao outro. Construímos a tese jurídica sob medida para o seu objetivo.",
  },
];

/* ------------------------------------------------------------------ */
/* Como funciona                                                       */
/* ------------------------------------------------------------------ */

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Primeiro contato",
    description:
      "Você nos conta o seu caso por WhatsApp, formulário ou telefone. Simples, rápido e sem compromisso.",
  },
  {
    step: 2,
    title: "Análise do caso",
    description:
      "A advogada avalia pessoalmente a viabilidade jurídica e os documentos, com total sigilo.",
  },
  {
    step: 3,
    title: "Estratégia jurídica",
    description:
      "Apresentamos o plano de ação, os cenários possíveis e os honorários — tudo com transparência.",
  },
  {
    step: 4,
    title: "Acompanhamento",
    description:
      "Conduzimos o processo e mantemos você informado sobre cada movimentação relevante.",
  },
  {
    step: 5,
    title: "Solução",
    description:
      "Trabalhamos até a resolução definitiva: acordo vantajoso ou decisão judicial favorável.",
  },
];

/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  name: string;
  city: string;
  initials: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana Duarte",
    city: "São Paulo, SP",
    initials: "MD",
    text: "Depois de dois anos tentando resolver minha aposentadoria sozinha, o escritório conseguiu a concessão em poucos meses. Fui informada de cada etapa e nunca me senti perdida no processo.",
  },
  {
    name: "Ricardo Nogueira",
    city: "Campinas, SP",
    initials: "RN",
    text: "Precisei de apoio em uma rescisão complicada e fui atendido no mesmo dia. A equipe foi direta sobre o que era possível e o resultado superou o que eu esperava. Profissionalismo raro.",
  },
  {
    name: "Cláudia Ferreira",
    city: "Santo André, SP",
    initials: "CF",
    text: "Meu divórcio foi conduzido com uma discrição e um cuidado que eu não imaginava ser possível. Em um momento tão difícil, ter essa tranquilidade fez toda a diferença.",
  },
  {
    name: "André Sampaio",
    city: "São Bernardo do Campo, SP",
    initials: "AS",
    text: "Contratei a assessoria empresarial para minha empresa há três anos. Contratos revisados com agilidade e nenhum passivo trabalhista desde então. Recomendo sem reservas.",
  },
  {
    name: "Patrícia Lima",
    city: "Guarulhos, SP",
    initials: "PL",
    text: "Fui negativada indevidamente por uma dívida que nunca existiu. Além de limpar meu nome, consegui uma indenização. Atendimento humano do começo ao fim.",
  },
  {
    name: "Fernando Barros",
    city: "Osasco, SP",
    initials: "FB",
    text: "A regularização do meu imóvel se arrastava havia anos em outro escritório. Aqui, recebi um plano claro logo na primeira reunião e a escritura saiu em tempo recorde.",
  },
];

/* ------------------------------------------------------------------ */
/* Estatísticas                                                        */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 2000, prefix: "+", label: "Clientes atendidos" },
  { value: 15, prefix: "+", suffix: " anos", label: "De experiência" },
  { value: 98, suffix: "%", label: "De satisfação" },
  { value: 5000, prefix: "+", label: "Processos conduzidos" },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "A primeira consulta é gratuita?",
    answer:
      "A análise inicial do seu caso é feita sem compromisso. Após entendermos a situação, apresentamos uma proposta de honorários clara e transparente antes de qualquer contratação.",
  },
  {
    question: "Como funciona o atendimento pelo WhatsApp?",
    answer:
      "Você envia uma mensagem descrevendo brevemente o seu caso e nossa equipe responde em até 24 horas úteis. Se necessário, agendamos uma reunião presencial ou por videoconferência diretamente com a advogada.",
  },
  {
    question: "Vocês atendem clientes de outras cidades e estados?",
    answer:
      "Sim. Atuamos em todo o território nacional. Com o processo eletrônico, acompanhamos ações em qualquer comarca do país, e o atendimento pode ser feito integralmente de forma remota.",
  },
  {
    question: "Quanto custam os honorários advocatícios?",
    answer:
      "Os honorários variam conforme a complexidade e a natureza do caso. Em muitas ações, trabalhamos com honorários de êxito — você só paga um percentual se ganhar. Tudo é formalizado em contrato antes do início do trabalho.",
  },
  {
    question: "Quanto tempo demora um processo judicial?",
    answer:
      "Depende da área, da comarca e da complexidade do caso. Na análise inicial, apresentamos uma estimativa realista de prazos e, sempre que possível, buscamos acordos que antecipem a solução.",
  },
  {
    question: "Meu caso será tratado com sigilo?",
    answer:
      "Absolutamente. O sigilo profissional é um dever ético da advocacia, previsto no Estatuto da OAB. Todas as informações compartilhadas conosco são protegidas por confidencialidade absoluta.",
  },
  {
    question: "Preciso ir até o escritório para contratar?",
    answer:
      "Não. Todo o processo — da análise do caso à assinatura do contrato e da procuração — pode ser feito digitalmente, com validade jurídica plena. Recebemos presencialmente quem preferir.",
  },
  {
    question: "Quais documentos devo separar para a análise do caso?",
    answer:
      "Depende da área, mas em geral: documento de identidade, comprovante de residência e todos os documentos relacionados ao caso (contratos, comprovantes, conversas, extratos). Na primeira conversa, indicamos exatamente o que é necessário.",
  },
  {
    question: "Vocês atendem tanto pessoas físicas quanto empresas?",
    answer:
      "Sim. Atendemos pessoas físicas em demandas individuais e empresas de todos os portes, com assessoria consultiva e contenciosa em todas as nossas áreas de atuação.",
  },
  {
    question: "Como acompanho o andamento do meu processo?",
    answer:
      "Você recebe atualizações periódicas da nossa equipe sobre cada movimentação relevante, além de poder falar diretamente com a advogada responsável sempre que precisar.",
  },
];
