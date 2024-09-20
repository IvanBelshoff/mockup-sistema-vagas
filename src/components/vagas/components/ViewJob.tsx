'use client';

import React from 'react';
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IVaga } from '@/app/(default)/page';
import { useRouter } from 'next/navigation';

interface IViewJobProps {
    vaga: IVaga
    border: boolean
}

export const ViewJob: React.FC<IViewJobProps> = ({ vaga, border }) => {

    const image = 'http://10.86.177.250:5018/uploads/fotos/funcionarios/3d4416290a9d-IVAN%20LUIZ%20BELSHOFF%20RODRIGUES%20PINTO%20-%202.jpg';

    const router = useRouter();

    return (
        <div className='group'>
            <div data-border={border} className='data-[border=true]:border-b p-4 flex gap-6 group-hover:bg-secondary group-hover:rounded-xl '>
                <div className='flex justify-center items-center'>
                    <Image
                        src={image}
                        alt={'foto'}
                        width={60}
                        height={60}
                        draggable={false}
                        className='rounded-full'
                    />
                </div>
                <div className='flex flex-col gap-2 flex-1 group-hover:text-white'>
                    <span className='font-bold flex justify-start items-center gap-1'><FaMapMarkerAlt size={12} />{vaga.local}</span>
                    <h1 className='font-bold text-xl' >{vaga.cargo}</h1>
                    <div className='flex gap-2'>
                        <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-primary dark:text-gray-300'>{`R$ ${vaga.salario}`}</span>
                        <span className='bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-primary dark:text-gray-300'>{vaga.tipo}</span>
                    </div>
                </div>
                <div className='items-center justify-center hidden group-hover:flex'>
                    <button onClick={() => router.push(`/vagas/${vaga.id}`)} className='bg-primary text-white px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:border-white hover:border'>
                        <span className='text-xs'>Candidatar-se</span>
                        <FaArrowRight size={12} className='font-extralight' />
                    </button>
                </div>
            </div>
        </div>
    );
};
