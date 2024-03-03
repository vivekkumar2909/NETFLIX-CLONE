import useBillBoard from '@/hooks/useBillBoard';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const BillBoard = () => {

    const { data } = useBillBoard();

    console.log(data)


    return (
        <div className='relative h-[56.25vw] w-full'>
            <video className='w-full h-[56.25vw]  object-contain brightness-[60%]' autoPlay muted loop poster={data?.thumbnailUrl}  src={data?.videoUrl}/>
            <div className='absolute top-[30%] md:top-[40%] ml-4 md:ml-16'>
                <p className='text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl'>
                    {data?.title}
                </p>
                <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 md:w-[80%] w-[90%] lg:w-[50%] drop-shadow-xl'>
                    {data?.description}
                </p>
                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    <button className='text-white bg-white bg-opacity-30 blur-2 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg flex flex-row items-center hover:bg-opacity-20 transition'>
                      <AiOutlineInfoCircle className='mr-1'/>  More Info
                    </button>
                </div>
            </div>
        </div>
    )
};

export default BillBoard;