import React from 'react';

export const FiltroVagas = () => {
    return (
        <div className='flex flex-row-reverse w-full justify-between p-6 border rounded-xl'>

            <div>
                <span className='text-secondary hover:underline hover:cursor-pointer'>Limpar</span>
            </div>

            <div className='flex flex-col gap-4'>

                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Localidade</span>

                    <div className="flex flex-col gap-2">

                        <div className='flex gap-2'>
                            <input id="Viana" type="checkbox" value="Viana" />
                            <label htmlFor="Viana" >Viana</label>
                        </div>

                        <div className='flex gap-2'>
                            <input id="Vitória da Conquista" type="checkbox" value="vitoria da conquista" />
                            <label htmlFor="Vitória da Conquista" className='text-nowrap'>Vitória da Conquista</label>
                        </div>

                        <div className='flex gap-2'>
                            <input id="Teixeira de Freitas" type="checkbox" value="teixeira de Freitas" />
                            <label htmlFor="Teixeira de Freitas" className='text-nowrap'>Teixeira de Freitas</label>
                        </div>


                        <div className='flex gap-2'>
                            <input id="Linhares" type="checkbox" value="Linhares" />
                            <label htmlFor="Linhares" className='text-nowrap'>Linhares</label>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Tipo</span>

                    <div className="flex flex-col gap-2">

                        <div className='flex gap-2'>
                            <input id="Hibrido" type="checkbox" value="hibrido" />
                            <label htmlFor="Hibrido" >Hibrido</label>
                        </div>

                        <div className='flex gap-2'>
                            <input id="Remoto" type="checkbox" value="remoto" />
                            <label htmlFor="Remoto" className='text-nowrap'>Remoto</label>
                        </div>

                        <div className='flex gap-2'>
                            <input id="Presencial" type="checkbox" value="presencial" />
                            <label htmlFor="Presencial" className='text-nowrap'>Presencial</label>
                        </div>

                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <span className='font-bold'>Área</span>

                    <form className="flex flex-col gap-2 border border-primary rounded px-2 py-2">
                        <select id="countries" className='w-ful'>
                            <option selected>Todas</option>
                            <option value="US">Administrativo</option>
                            <option value="CA">Comercial</option>
                            <option value="FR">Pos-Venda</option>
                        </select>
                    </form>

                </div>

            </div>

        </div>
    );
};
