import { FormEvent } from 'react'
import { DatePickerInput } from './customDatePicker'
import { MultipleSelect } from './multipleSelect'
import { SelectInput } from './selectInput'

interface FilterFormProps {
  onFilter: (e: FormEvent<HTMLFormElement>) => void
  selectedVehicles: string[]
  listPlates: string[]
  technologies: string[] | []
  selectedTechnology: string | null
  selectedLinkCategories: string | null
  selectedStatus: string | null
  linkCategories: string[] | []
  status: string[] | []
  setSelectedVehicles: (vehicles: string[]) => void
  setSelectedTechnology: (tech: string | null) => void
  setSelectedLinkCategories: (linkCategory: string | null) => void
  setSelectedStatus: (status: string | null) => void
}

const FilterForm = ({
  onFilter,
  linkCategories,
  listPlates,
  status,
  technologies,
  selectedVehicles,
  setSelectedVehicles,
  selectedTechnology,
  selectedLinkCategories,
  selectedStatus,
  setSelectedTechnology,
  setSelectedLinkCategories,
  setSelectedStatus,
}: FilterFormProps) => {
  return (
    <form onSubmit={onFilter} className="flex gap-5 items-center justify-start">
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
        <MultipleSelect
          options={listPlates}
          placeholder="Selecione um veículo"
          selectedValues={selectedVehicles}
          onSelectChange={setSelectedVehicles}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="tech" className="text-zinc-400">
          Tecnologia
        </label>
        <SelectInput
          options={technologies}
          placeholder="Selecione uma tecnologia"
          selectedValue={selectedTechnology}
          onSelectChange={selectedValue => setSelectedTechnology(selectedValue)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="category" className="text-zinc-400">
          Categorias de Vínculo
        </label>
        <SelectInput
          options={linkCategories}
          placeholder="Selecione uma categoria"
          selectedValue={selectedLinkCategories}
          onSelectChange={selectedValue =>
            setSelectedLinkCategories(selectedValue)
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="status" className="text-zinc-400">
          Situação
        </label>
        <SelectInput
          options={status}
          placeholder="Selecione uma situação"
          selectedValue={selectedStatus}
          onSelectChange={selectedValue => setSelectedStatus(selectedValue)}
        />
      </div>
      <button
        type="submit"
        className=" self-end ml-5 uppercase h-7 px-10 bg-[#4D7EA8] text-white rounded"
      >
        Filtrar
      </button>
    </form>
  )
}

export default FilterForm
