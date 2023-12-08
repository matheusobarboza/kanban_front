import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CardItem } from './cardItem'

interface SectionProps {
  title: string
}

export function Section({ title }: SectionProps) {
  return (
    <Card className="w-[250px] bg-[#76818E] h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2 text-sm text-white uppercase">
          {title}
          <div className="border px-1">5</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </CardContent>
    </Card>
  )
}
