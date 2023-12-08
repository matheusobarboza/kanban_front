'use client'

import { DatePickerInput } from '@/components/ui/customDatePicker'
import { KanbanColumn } from '@/components/ui/kanbanColumn'
import SelectInput from '@/components/ui/selectInput'
import {
  columnTitles,
  letters,
  linkCategories,
  status,
  technologies,
} from '@/utils/dataFilter'
import { Funnel, ListChecks, MagnifyingGlass } from '@phosphor-icons/react'
import { FormEvent, useEffect, useState } from 'react'
import { Vehicle } from '@/interfaces/vehicle'
import { generateRandomClientName, shuffle } from '@/helpers/shuflle'

export default function Home() {
  const [kanbanColumns, setKanbanColumns] = useState<Array<Vehicle[]>>([])

  useEffect(() => {
    const randomVehicles: Vehicle[] = Array.from({ length: 20 }, () => {
      const plate = `${letters[Math.floor(Math.random() * 26)]}${
        letters[Math.floor(Math.random() * 26)]
      }${letters[Math.floor(Math.random() * 26)]}-${Math.floor(
        Math.random() * 9999,
      )
        .toString()
        .padStart(4, '0')}`

      return {
        plate,
        linkCategory:
          linkCategories[Math.floor(Math.random() * linkCategories.length)],
        technology:
          technologies[Math.floor(Math.random() * technologies.length)],
        status: status[Math.floor(Math.random() * status.length)],
        clientName: generateRandomClientName(),
      }
    })

    const columns: Vehicle[][] = []

    Array.from({ length: 5 }).forEach((_, index) => {
      const numVeiculosNaColuna = Math.floor(Math.random() * 5) + 1
      const startIndex = index * numVeiculosNaColuna

      const vehiclesInColumn = randomVehicles.slice(
        startIndex,
        startIndex + numVeiculosNaColuna,
      )

      // Verifica se as placas já existem em outras colunas
      const filteredVehicles = vehiclesInColumn.filter(
        vehicle =>
          !columns.some(
            (otherColumn, otherIndex) =>
              otherIndex !== index &&
              otherColumn.some(
                otherVehicle => otherVehicle.plate === vehicle.plate,
              ),
          ),
      )

      columns.push(shuffle(filteredVehicles))
    })

    setKanbanColumns(columns)
  }, [])

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
            <DatePickerInput id="period" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="vehicle" className="text-zinc-400">
              Veículo
            </label>
            <SelectInput options={status} placeholder="Selecione um veículo" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tech" className="text-zinc-400">
              Tecnologia
            </label>
            <SelectInput
              options={technologies}
              placeholder="Selecione uma tecnologia"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-zinc-400">
              Categorias de Vínculo
            </label>
            <SelectInput
              options={linkCategories}
              placeholder="Selecione uma categoria"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status" className="text-zinc-400">
              Situação
            </label>
            <SelectInput
              options={status}
              placeholder="Selecione uma situação"
            />
          </div>
          <button
            type="submit"
            className=" self-end ml-5 uppercase h-7 px-10 bg-[#4D7EA8] text-white rounded"
          >
            Filtrar
          </button>
        </form>
        <div className="grid grid-cols-5 gap-6 my-5">
          {kanbanColumns.map((coluna, idx) => (
            <KanbanColumn
              key={idx}
              title={columnTitles[idx]}
              vehicles={coluna}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
