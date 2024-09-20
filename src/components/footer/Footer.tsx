import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className='mt-2 bg-primary flex justify-center'>

            <div className='w-full min-[1024px]:max-w-[1024px] flex flex-col gap-2 py-4'>

                <div className='flex justify-between items-center'>
                    <FaHome size={24} className='text-white cursor-pointer' />
                    <div className='flex gap-2 items-center'>
                        <span className='text-white font-bold '>Siga-nos</span>
                        <FaXTwitter size={35} className='bg-secondary rounded-full p-2 hover:border hover:border-white hover:text-white hover:cursor-pointer' />
                        <FaGithub size={35} className='bg-secondary rounded-full p-2 hover:border hover:border-white hover:text-white hover:cursor-pointer' />
                        <FaInstagram size={35} className='bg-secondary rounded-full p-2 hover:border hover:border-white hover:text-white hover:cursor-pointer' />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-white font-bold'>Luvep | Todos os direitos reservados</span>
                    <div className='flex justify-center items-center gap-5'>
                        <span className='text-white font-bold hover:underline hover:cursor-pointer'>Termos</span>
                        <span className='text-white font-bold hover:underline hover:cursor-pointer'>Privacidade</span>
                        <span className='text-white font-bold hover:underline hover:cursor-pointer'>Diretrizes</span>
                    </div>
                </div>
            </div>

        </footer>
    )
}
