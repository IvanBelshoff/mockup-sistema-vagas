'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome, FaUserCircle, FaSun } from 'react-icons/fa';

export const Header = () => {

    const currentPath = usePathname();

    return (

        <>
            <nav className="flex items-center gap-6 justify-between fixed top-0 right-0 left-0 md:justify-center bg-primary py-2 px-4 sm:py-4 px-6'">
                {/* Ícone de Home no canto esquerdo */}
                <div>
                    <Link href="/" className='hover:no-underline'>
                        <FaHome size={24} className="text-white cursor-pointer" />
                    </Link>
                </div>

                {/* Input centralizado */}
                <div
                    className='flex-1 items-center justify-center flex '
                >
                    <input
                        type="text"
                        data-active={currentPath === '/'}
                        className="data-[active=true]:flex hidden justify-center w-full max-w-md p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Procurar..."
                    />
                </div>

                {/* Ícones de tema e login no lado direito */}
                <div className='flex gap-4'>
                    {/* Ícone de alternar tema */}
                    <div className="cursor-pointer">
                        <FaSun className="text-white text-2xl" />
                    </div>

                    {/* Ícone de login */}
                    <div className="cursor-pointer">
                        <FaUserCircle className="text-white text-2xl cursor-pointer" />
                    </div>
                </div>
            </nav>
            <div className='h-14 sm:h-[72px]' />
        </>
    );
};
