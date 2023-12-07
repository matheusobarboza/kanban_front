import { CaretDown, CaretUp } from '@phosphor-icons/react'
import { useState } from 'react'

const SelectInput = () => {
  const [selected, setSelected] = useState('')

  return (
    <div className="p-6 w-64">
      <div className="bg-white w-full p-2 flex items-center justify-between rounded text-sm">
        Selecione a categoria
        <CaretDown size={20} />
      </div>
      <ul className="bg-white mt-2 overflow-y-auto max-h-60">
        <li className="p-2 text-sm" onClick={e => console.log('e', e)}>
          Veículo 1
        </li>
      </ul>
    </div>
  )
}

export default SelectInput
