'use client'

import { KanbanColumn } from '@/components/ui/kanbanColumn'
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
import FilterForm from '@/components/ui/filterForm'
import { Input } from '@/components/ui/input'

export default function Home() {
  const [kanbanColumns, setKanbanColumns] = useState<Array<Vehicle[]>>([])
  const [filteredKanbanColumns, setFilteredKanbanColumns] = useState<
    Array<Vehicle[]>
  >([])
  const [listPlates, setListPlates] = useState<string[]>([])
  const [selectedVehicles, setSelectedVehicles] = useState<string[]>([])
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(
    null,
  )
  const [selectedLinkCategories, setSelectedLinkCategories] = useState<
    string | null
  >(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>('')

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

    setFilteredKanbanColumns(columns)
    setKanbanColumns(columns)
    setListPlates(randomVehicles.map(vehicle => vehicle.plate))
  }, [])

  const onFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const filteredKanban = kanbanColumns.map(column =>
      column.filter(vehicle => {
        const matchPlate = vehicle.plate
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
        const matchClientName = vehicle.clientName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())

        return (
          (selectedVehicles.length === 0 ||
            selectedVehicles.includes(vehicle.plate)) &&
          (selectedTechnology === null ||
            vehicle.technology === selectedTechnology) &&
          (selectedLinkCategories === null ||
            vehicle.linkCategory === selectedLinkCategories) &&
          (selectedStatus === null || vehicle.status === selectedStatus) &&
          (matchPlate || matchClientName)
        )
      }),
    )

    setFilteredKanbanColumns(filteredKanban)
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
            <Input
              type="text"
              placeholder="Placa, nome do motorista"
              className="border-none"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-5 items-center px-1 h-full">
            <Funnel size={22} />
            <span>Busca avançada</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#F9F9F9] p-5">
        <FilterForm
          linkCategories={linkCategories}
          listPlates={listPlates}
          onFilter={onFilter}
          selectedLinkCategories={selectedLinkCategories}
          setSelectedLinkCategories={setSelectedLinkCategories}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedTechnology={selectedTechnology}
          setSelectedTechnology={setSelectedTechnology}
          selectedVehicles={selectedVehicles}
          setSelectedVehicles={setSelectedVehicles}
          status={status}
          technologies={technologies}
        />
        <div className="grid grid-cols-5 gap-6 my-5">
          {filteredKanbanColumns.map((coluna, idx) => (
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
