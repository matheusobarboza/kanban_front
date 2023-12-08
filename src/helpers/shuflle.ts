import { Vehicle } from '@/interfaces/vehicle'

export function shuffle(array: Vehicle[]) {
  let currentIndex = array.length,
    randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const generateRandomClientName = () => {
  const surnames = [
    'Barboza',
    'Oliveira',
    'Silva',
    'Moreira',
    'Santos',
    'Mendes',
    'Siqueira',
  ]
  const names = [
    'José',
    'Marcos',
    'Matheus',
    'Carlos',
    'Gabriel',
    'Jane',
    'John',
  ]

  const randomSurnames = surnames[Math.floor(Math.random() * surnames.length)]
  const randomNames = names[Math.floor(Math.random() * names.length)]

  return `${randomNames} ${randomSurnames}`
}
