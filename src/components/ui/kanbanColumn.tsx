import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CardItem } from './cardItem'
import { Vehicle } from '@/interfaces/vehicle'

interface SectionProps {
  vehicles: Vehicle[]
  title: string
}

export function KanbanColumn({ vehicles, title }: SectionProps) {
  return (
    <Card className="w-[250px] bg-gray-400 h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-sm text-white uppercase">
          {title}
          <div className="border px-1">5</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-3">
        {vehicles.slice(0, 5).map(vehicle => (
          <CardItem key={vehicle.plate} vehicle={vehicle} />
        ))}
      </CardContent>
    </Card>
  )
}
