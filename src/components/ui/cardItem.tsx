import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CardItem() {
  return (
    <Card className="w-full h-32 rounded p-0 bg-red-50 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex text-sm items-center justify-between">
          <span className="bg-[#76818E] px-1 rounded text-white">ABC-9D87</span>
          <span className="bg-red-600 rounded-full px-2 text-white">!</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span>Nome do cliente</span>
        <div className="mt-2 flex text-xs justify-between items-center w-full gap-2">
          <div className="rounded bg-red-600 text-white px-1 py-[.8px]">
            00:01
          </div>
          <div className="flex justify-between items-center gap-2 rounded bg-white px-1 py-[.8px]">
            <span>TOTAL |</span>
            <span>00:01</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
