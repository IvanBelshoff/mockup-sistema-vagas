'use client';
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiMonitor } from "react-icons/fi";
import { FaArrowRight } from 'react-icons/fa6';
import { MdCheck, MdContentCopy, MdOutlineAccessible, MdShare } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

export const CardJob = () => {

    const image = 'http://10.86.177.250:5018/uploads/fotos/funcionarios/3d4416290a9d-IVAN%20LUIZ%20BELSHOFF%20RODRIGUES%20PINTO%20-%202.jpg';

    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 2000);
        }
    }, [copied]);


    const handleCopy = () => {
        setCopied(true);
        window.navigator.clipboard.writeText(window.location.href);
    };

    return (
        <div className='flex flex-col gap-4 w-full justify-between p-4 border rounded-xl'>

            <div className='flex flex-col gap-3 justify-center items-center'>
                <Image
                    src={image}
                    alt={'foto'}
                    width={80}
                    height={80}
                    draggable={false}
                    className='rounded-full'
                />

                <h1 className='text-xl font-bold'>Administrativo</h1>


            </div>
            <div className='flex flex-col gap-3 justify-center items-start'>
                <span className='font-light flex justify-start items-center gap-3 text-lg'><CiCalendarDate size={24} />{'24 de agosto de 2024'}</span>
                <span className='font-light flex justify-start items-center gap-3 text-lg'><FaMapMarkerAlt size={15} />{'Viana'}</span>
                <span className='font-light flex justify-start items-center gap-3 text-lg'><FiMonitor size={15} />{'Híbrido'}</span>
                <span className='font-light flex justify-start items-center gap-3 text-lg'><MdOutlineAccessible size={20} />{'Vaga também para PcD'}</span>
                <span className='font-light flex justify-start items-center gap-3 text-lg'><MdOutlineWork size={20} />{'Efetivo'}</span>
            </div>
            <div className='flex flex-col gap-3 justify-center items-center'>

                <button className='bg-primary text-white px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-secondary'>
                    <span className='text-base'>Candidatar-se</span>
                    <FaArrowRight size={12} className='font-extralight' />
                </button>


            </div>

            <div className='flex flex-col gap-3 justify-center items-center rounded-lg border-t pt-4'>

                <div className='flex items-center gap-1 '>

                    <input
                        readOnly
                        autoFocus
                        value={window.location.href}
                        className='bg-background p-1 px-2 rounded w-full'
                    />

                    <button className='p-2' onClick={handleCopy}>
                        {copied ? <MdCheck className='text-primary' /> : <MdContentCopy />}
                    </button>
                </div>
                <h2 className='font-bold flex justify-start items-center gap-3'><MdShare size={20} />{'Compartilhar'}</h2>

            </div>
        </div>
    )
}
