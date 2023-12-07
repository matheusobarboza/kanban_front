'use client'

import SelectInput from '@/components/select'
import { Funnel, ListChecks, MagnifyingGlass } from '@phosphor-icons/react'
import { FormEvent } from 'react'

export default function Home() {
  const onFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className="flex flex-col w-full">
      <div className="flex items-center justify-between h-20 bg-white px-5 text-xl font-medium text-zinc-500">
        <div className="flex gap-5 text-[#13262F] h-full items-center">
          <ListChecks size={26} />
          <span>Checklist</span>
        </div>
        <div className="flex w-2/5 justify-between gap-5 h-full items-center text-sm">
          <div className="flex flex-1 gap-5 items-center px-10 border h-full border-t-0 border-b-0">
            <MagnifyingGlass size={22} />
            <span>Placa, nome do motorista</span>
          </div>
          <div className="flex gap-5 items-center px-1 h-full">
            <Funnel size={22} />
            <span>Busca avançada</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#F9F9F9] p-5">
        <form
          onSubmit={onFilter}
          className="flex gap-5 items-center justify-start"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="period" className="text-zinc-400">
              Selecione o período
            </label>
            <input type="date" name="period" id="period" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="vehicle" className="text-zinc-400">
              Veículo
            </label>
            <SelectInput />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tech" className="text-zinc-400">
              Tecnologia
            </label>
            <input type="text" id="tech" name="tech" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-zinc-400">
              Categoria do veículo
            </label>
            <input type="text" name="category" id="category" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status" className="text-zinc-400">
              Situação
            </label>
            <input type="text" name="status" id="status" />
          </div>
          {/* <div className="self-end"> */}
          <button
            type="submit"
            className=" self-end ml-5 uppercase h-7 px-10 bg-[#4D7EA8] text-white rounded"
          >
            Filtrar
          </button>
          {/* </div> */}
        </form>
      </div>
    </main>
  )
}
