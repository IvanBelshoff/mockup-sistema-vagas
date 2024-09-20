
import React from 'react';
import { ViewJob } from './ViewJob';
import { IVaga } from '@/app/(default)/page';

interface IViewJobsProps {
    vagas: IVaga[]
}

export const ListViewJobs: React.FC<IViewJobsProps> = ({ vagas }) => {

    console.log(vagas.length)
    return (
        <div className='w-full flex justify-center items-center py-2 '>
            <ol className='flex w-full flex-col overflow-clip mx-4'>
                {vagas.map((vaga, index) => (
                    <li key={vaga.id} >
                        <ViewJob vaga={vaga} border={vagas.length == index + 1 ? false : true} />
                    </li>
                ))}
            </ol>
        </div>
    );
};
