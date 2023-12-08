import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select'

interface SelectProps {
  options: string[]
  placeholder: string
}

const SelectInput = ({ options, placeholder }: SelectProps) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] h-7">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          {options.map((option, idx) => (
            <SelectItem key={`${option}_${idx}`} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectInput
