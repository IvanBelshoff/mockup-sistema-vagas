
import { Metadata } from 'next';
import React from 'react';
import { IVaga } from '../../page';
import { CardJob, DetailJob } from '@/components/vagas';
import Image from "next/image";
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

interface Props {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: params.id,
        description: params.id
    };
};

export default function pageCourseDetail({ params }: Props) {

    const data: IVaga = {
        id: 1,
        cargo: 'Desenvolvedor Full Stack',
        descricao: `Como desenvolvedor Full Stack, você será responsável por projetar, desenvolver e manter aplicativos complexos que atendam tanto ao front-end quanto ao back-end. 
                    Sua função envolve colaborar com equipes de design e produto para criar interfaces intuitivas e escaláveis, além de implementar soluções robustas de backend 
                    que garantam alta performance, segurança e confiabilidade. Espera-se que você esteja familiarizado com uma variedade de tecnologias, como React, Node.js, bancos de dados SQL e NoSQL, 
                    além de práticas ágeis de desenvolvimento. Você terá a oportunidade de participar de todas as fases do ciclo de vida do produto, desde a concepção até a implantação em produção, 
                    ajudando a definir a arquitetura, padrões de código e contribuindo ativamente para a melhoria contínua dos processos e ferramentas utilizadas. O candidato ideal deve ser apaixonado 
                    por aprender novas tecnologias e comprometido com a entrega de software de alta qualidade.`,
        tipo: 'hibrido',
        local: 'vitoria da conquista',
        atribuicoes: [
            'Desenvolver interfaces de usuário com React',
            'Implementar APIs RESTful com Node.js',
            'Criar e otimizar consultas a bancos de dados',
            'Colaborar com equipes multidisciplinares',
            'Realizar testes e revisão de código',
        ],
        requisitos: [
            'Experiência com desenvolvimento full stack',
            'Conhecimento sólido em JavaScript e TypeScript',
            'Familiaridade com React, Node.js e bancos de dados',
            'Experiência com controle de versão (Git)',
            'Habilidades de resolução de problemas e comunicação',
        ],
        beneficios: [
            'Plano de saúde e odontológico',
            'Vale refeição',
            'Auxílio home office',
            'Programas de incentivo à educação',
            'Bônus anual por desempenho',
        ],
        salario: 7500,
    };


    return (
        <>
            <div className='flex justify-start items-start mb-4'>
                <Link href="/" className=' p-2 hover:no-underline flex items-center justify-center gap-2'>
                    <FaArrowLeft size={12} className='text-secondary font-bold' />
                    <span className='text-secondary font-bold'>Todas as vagas</span>
                </Link>
            </div>
            <Image
                src={'https://attachments.gupy.io/production/companies/345/career/38719/images/2024-08-19_20-13_bannerUrl.jpg'}
                alt={'foto'}
                width={1920}
                height={581}
                draggable={false}
                className='rounded-xl'
            />

            <div className="flex justify-center items-start w-full gap-8 my-4">

                <div className="flex flex-col flex-1">
                    <DetailJob vaga={data} />
                </div>

                {/* Filtros com posição fixa ao fazer scroll */}
                <div className="flex w-auto bg-paper items-center justify-center rounded-lg sticky top-20 h-full">
                    <CardJob />
                </div>
            </div>
        </>


    );
}
