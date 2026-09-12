import React, { use } from 'react'
import type { Itechnology } from '../types/technolgiesType';

interface TechnologiesProps {
    technologiesPromise : Promise<Itechnology[]>
}

const  Technologies = ({technologiesPromise}):TechnologiesProps => {
    console.log(technologiesPromise);
    const technologies = use(technologiesPromise);
    console.log(technologies, "technologies")
  return (
    <div className="container mx-auto">
        <h2 className="text-2xl font-bold py-2">Explore the <span className='text-[#D91B7E]'>Technologies</span></h2>
        <p className='text-gray-500 text-sm' >Pick one technology per category to build your ideal stack.</p>


    </div>
  )
}
export default Technologies;