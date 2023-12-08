'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface SelectProps {
  options: string[]
  placeholder: string
  selectedValues: string[]
  onSelectChange: (selected: string[]) => void
}

export function MultipleSelect({
  options,
  placeholder,
  selectedValues,
  onSelectChange,
}: SelectProps) {
  const displayText =
    selectedValues.length > 2
      ? `${selectedValues.slice(0, 2).join(', ')}...`
      : selectedValues.join(', ')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-[180px] h-7">
        <Button variant="outline">{displayText || placeholder}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        {options?.map((option, idx) => (
          <DropdownMenuCheckboxItem
            key={`${option}_${idx}`}
            checked={selectedValues.includes(option)}
            onCheckedChange={checked => {
              const updatedValues = checked
                ? [...selectedValues, option]
                : selectedValues.filter(value => value !== option)
              onSelectChange(updatedValues)
            }}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
