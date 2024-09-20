import { ListagemDeVagas } from "@/components/vagas";


export interface IVaga {
  id: number;
  cargo: string;
  descricao: string;
  tipo: 'hibrido' | 'remoto' | 'presencial';
  local: 'viana' | 'vitoria da conquista' | 'teixeira de freitas' | 'linhares';
  atribuicoes: string[];
  requisitos: string[];
  beneficios: string[];
  salario: number;
}

export default function Home() {

  const data: IVaga[] = [
    {
      id: 1,
      cargo: "Desenvolvedor Frontend",
      descricao: "Desenvolvimento de interfaces com React.",
      tipo: "remoto",
      local: "vitoria da conquista",
      atribuicoes: ["Desenvolver componentes", "Criar testes unitários", "Aprimorar performance"],
      requisitos: ["Experiência com React", "Conhecimentos em JavaScript", "Git"],
      beneficios: ["Vale refeição", "Horário flexível", "Auxílio home office"],
      salario: 5000
    },
    {
      id: 2,
      cargo: "Analista de Sistemas",
      descricao: "Análise e levantamento de requisitos para sistemas corporativos.",
      tipo: "hibrido",
      local: "viana",
      atribuicoes: ["Documentação de sistemas", "Gerenciamento de equipe técnica", "Contato com clientes"],
      requisitos: ["Conhecimento em análise de sistemas", "Boa comunicação", "Experiência com ERP"],
      beneficios: ["Plano de saúde", "Vale transporte", "Vale alimentação"],
      salario: 4500
    },
    {
      id: 3,
      cargo: "Suporte Técnico",
      descricao: "Atendimento a clientes e resolução de problemas técnicos.",
      tipo: "presencial",
      local: "linhares",
      atribuicoes: ["Atendimento ao cliente", "Suporte a hardware", "Instalação de softwares"],
      requisitos: ["Conhecimento em manutenção de computadores", "Boa comunicação", "Experiência com atendimento"],
      beneficios: ["Vale transporte", "Plano odontológico", "Seguro de vida"],
      salario: 3000
    },
    {
      id: 4,
      cargo: "Engenheiro de Software",
      descricao: "Desenvolvimento de sistemas em grande escala.",
      tipo: "hibrido",
      local: "vitoria da conquista",
      atribuicoes: ["Desenvolvimento de APIs", "Integração de sistemas", "Arquitetura de software"],
      requisitos: ["Experiência com desenvolvimento de software", "Conhecimento em AWS", "Python ou Java"],
      beneficios: ["Plano de saúde", "Stock options", "Auxílio educação"],
      salario: 7000
    },
    {
      id: 5,
      cargo: "Designer UX/UI",
      descricao: "Criação de interfaces amigáveis e intuitivas.",
      tipo: "remoto",
      local: "teixeira de freitas",
      atribuicoes: ["Design de interfaces", "Criação de protótipos", "Pesquisa de usuário"],
      requisitos: ["Experiência com Figma", "Portfólio de design", "Conhecimentos em UX"],
      beneficios: ["Horário flexível", "Auxílio home office", "Plano de saúde"],
      salario: 4500
    },
    {
      id: 6,
      cargo: "Desenvolvedor Backend",
      descricao: "Desenvolvimento de APIs e sistemas de banco de dados.",
      tipo: "hibrido",
      local: "linhares",
      atribuicoes: ["Desenvolver APIs REST", "Manter sistemas legados", "Otimizar consultas SQL"],
      requisitos: ["Experiência com Node.js", "Conhecimento em bancos de dados", "Git"],
      beneficios: ["Vale refeição", "Plano odontológico", "Vale transporte"],
      salario: 6000
    },
    {
      id: 7,
      cargo: "Product Owner",
      descricao: "Gerenciamento de produtos digitais e interface com equipe de desenvolvimento.",
      tipo: "remoto",
      local: "viana",
      atribuicoes: ["Gestão de backlog", "Priorização de tarefas", "Alinhamento com stakeholders"],
      requisitos: ["Experiência como PO", "Conhecimentos em metodologias ágeis", "Habilidades de liderança"],
      beneficios: ["Auxílio home office", "Plano de saúde", "Stock options"],
      salario: 8000
    },
    {
      id: 8,
      cargo: "Analista de Marketing",
      descricao: "Planejamento e execução de campanhas de marketing digital.",
      tipo: "presencial",
      local: "vitoria da conquista",
      atribuicoes: ["Criação de campanhas", "Gestão de redes sociais", "Análise de resultados"],
      requisitos: ["Experiência com marketing digital", "Conhecimento em SEO", "Ferramentas de automação"],
      beneficios: ["Vale refeição", "Plano de saúde", "Horário flexível"],
      salario: 4000
    },
    {
      id: 9,
      cargo: "Desenvolvedor Mobile",
      descricao: "Desenvolvimento de aplicativos para Android e iOS.",
      tipo: "remoto",
      local: "linhares",
      atribuicoes: ["Desenvolver apps Android/iOS", "Manutenção de apps existentes", "Otimização de performance"],
      requisitos: ["Experiência com React Native ou Flutter", "Conhecimento em APIs REST", "Git"],
      beneficios: ["Vale refeição", "Horário flexível", "Auxílio home office"],
      salario: 5500
    },
    {
      id: 10,
      cargo: "Analista de Testes",
      descricao: "Garantia de qualidade de software através de testes automatizados.",
      tipo: "hibrido",
      local: "teixeira de freitas",
      atribuicoes: ["Criação de planos de teste", "Execução de testes automatizados", "Documentação de bugs"],
      requisitos: ["Experiência com testes automatizados", "Conhecimento em Selenium", "Metodologias ágeis"],
      beneficios: ["Vale transporte", "Plano de saúde", "Auxílio home office"],
      salario: 5000
    },
    {
      id: 11,
      cargo: "Gerente de Projetos",
      descricao: "Gerenciamento de projetos de TI e interface com clientes.",
      tipo: "presencial",
      local: "viana",
      atribuicoes: ["Gestão de cronogramas", "Coordenação de equipe", "Alinhamento com clientes"],
      requisitos: ["Experiência com gestão de projetos", "Certificação PMP", "Excelentes habilidades de comunicação"],
      beneficios: ["Vale refeição", "Plano de saúde", "Seguro de vida"],
      salario: 9000
    },
    {
      id: 12,
      cargo: "Especialista em Segurança da Informação",
      descricao: "Implementação e monitoramento de políticas de segurança da informação.",
      tipo: "hibrido",
      local: "vitoria da conquista",
      atribuicoes: ["Gerenciamento de riscos", "Implementação de medidas de segurança", "Análise de vulnerabilidades"],
      requisitos: ["Certificações em segurança (CISSP, CISM)", "Experiência com firewall e redes", "Conhecimento em criptografia"],
      beneficios: ["Vale refeição", "Plano de saúde", "Auxílio home office"],
      salario: 7500
    },
    {
      id: 13,
      cargo: "Administrador de Redes",
      descricao: "Gerenciamento de redes corporativas e infraestrutura de TI.",
      tipo: "presencial",
      local: "teixeira de freitas",
      atribuicoes: ["Configuração de redes", "Manutenção de servidores", "Monitoramento de infraestrutura"],
      requisitos: ["Experiência com redes", "Certificação CCNA", "Conhecimento em firewall"],
      beneficios: ["Vale refeição", "Plano odontológico", "Seguro de vida"],
      salario: 5000
    },
    {
      id: 14,
      cargo: "Consultor SAP",
      descricao: "Consultoria em implementação e customização de sistemas SAP.",
      tipo: "remoto",
      local: "viana",
      atribuicoes: ["Configuração de módulos SAP", "Treinamento de usuários", "Customização de processos"],
      requisitos: ["Experiência com SAP", "Conhecimento em FI/CO", "Excelentes habilidades analíticas"],
      beneficios: ["Vale refeição", "Auxílio home office", "Plano de saúde"],
      salario: 11000
    },
    {
      id: 15,
      cargo: "DevOps",
      descricao: "Automatização de processos e otimização de pipelines de desenvolvimento.",
      tipo: "hibrido",
      local: "linhares",
      atribuicoes: ["Criação de pipelines CI/CD", "Automatização de deploys", "Monitoramento de performance"],
      requisitos: ["Experiência com Docker e Kubernetes", "Conhecimento em AWS ou Azure", "Git"],
      beneficios: ["Vale refeição", "Horário flexível", "Plano de saúde"],
      salario: 6500
    }
  ];

  return (
    <main className='mt-8 flex justify-center'>
      <div className='w-full min-[1024px]:max-w-[1024px]'>
        <ListagemDeVagas
          titulo="Vagas Luvep"
          vagas={data}
        />
      </div>
    </main>
  );
}
