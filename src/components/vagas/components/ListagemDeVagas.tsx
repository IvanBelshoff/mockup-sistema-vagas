'use client';
import React from 'react';
import { ListViewJobs } from './ListViewJobs';
import { FiltroVagas } from '@/components/filtros/FiltroVagas';
import { IVaga } from '@/app/(default)/page';


interface IListagemDeVagasProps {
    titulo: string;
    vagas: IVaga[];
}

export const ListagemDeVagas: React.FC<IListagemDeVagasProps> = ({ titulo, vagas }) => {

    return (
        <>
            <h1 className="font-bold text-3xl mb-6">{titulo}</h1>

            <div className="flex justify-center items-start w-full gap-8 my-2 ">
                {/* Lista de vagas */}
                <div className="flex flex-1 bg-paper items-center justify-center rounded-lg">
                    <ListViewJobs vagas={vagas} />
                </div>

                {/* Filtros com posição fixa ao fazer scroll */}
                <div className="flex w-auto bg-paper items-center justify-center rounded-lg sticky top-28 h-full">
                    <FiltroVagas />
                </div>
            </div>
        </>
    );
};
