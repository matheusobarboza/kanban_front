// Importações necessárias
import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface SingleSelectProps {
  options: string[]
  placeholder: string
  selectedValue: string | null
  onSelectChange: (selectedValue: string | null) => void
}

export function SelectInput({
  options,
  placeholder,
  selectedValue,
  onSelectChange,
}: SingleSelectProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-[180px] h-7">
        <Button variant="outline">{selectedValue || placeholder}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        {options?.map((option, idx) => (
          <DropdownMenuItem
            key={`${option}_${idx}`}
            onClick={() => onSelectChange(option)}
          >
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
