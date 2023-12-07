'use client'

import { ListChecks, PaperPlaneTilt } from '@phosphor-icons/react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='bg-[#f0f0f0] h-screen overflow-auto flex flex-col items-center min-w-[200px] md:w-full md:h-auto md:relative"'>
      <div className="bg-[#13262F] py-8 h-20 w-full flex justify-center items-center">
        <PaperPlaneTilt size={28} className="text-[#db9911]" />
        <span className="text-white uppercase italic">Monittora</span>
      </div>

      <div className="flex flex-col w-full text-white">
        <Link
          href="/"
          className="group transition-colors flex w-full gap-5 hover:bg-[#13262F] p-4 text-[#13262F] bg-[#F5F5F5]"
        >
          <ListChecks className="group-hover:text-white" size={24} />
          <span className="group-hover:text-white">Checklist</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
