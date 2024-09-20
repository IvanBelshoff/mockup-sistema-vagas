import { IVaga } from '@/app/(default)/page'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

interface IDetailJob {
    vaga: IVaga
}

export const DetailJob: React.FC<IDetailJob> = ({ vaga }) => {
    return (

        <div className='w-full flex py-2 flex-col gap-5'>


            <div className='text-center my-2'>
                <h1 className='text-4xl font-bold'>{vaga.cargo}</h1>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h2 className='text-2xl font-bold'>Descrição da vaga</h2>
                <p>{vaga.descricao}</p>
            </div>


            <div className='flex flex-col items-start gap-4'>
                <h2 className='text-2xl font-bold'>Responsabilidades e atribuições</h2>
                <ul className='list-disc pl-5'>
                    {vaga.atribuicoes.map(atribuicao => (
                        <li key={atribuicao}>{atribuicao}</li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <h2 className='text-2xl font-bold'>Requisitos e qualificações</h2>
                <ul className='list-disc pl-5'>
                    {vaga.requisitos.map(requisito => (
                        <li key={requisito}>{requisito}</li>
                    ))}
                </ul>
            </div>


            <div className='flex flex-col items-start gap-4'>
                <h2 className='text-2xl font-bold'>Informações adicionais</h2>

                <h3 className='font-bold'>Oque a Luvep proporciona ?</h3>
                <ul className='list-disc pl-5'>
                    {vaga.beneficios.map(beneficio => (
                        <li key={beneficio}>{beneficio}</li>
                    ))}
                </ul>

            </div>



        </div>
    )
}
